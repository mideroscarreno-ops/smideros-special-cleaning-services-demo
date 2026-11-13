import { useState } from 'react';
import { Home } from 'lucide-react';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: boolean;
  caption?: string;
}

export function EditorialImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  containerClassName = '',
  priority = false,
  caption,
}: EditorialImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex flex-col items-center justify-center bg-gradient-to-br from-[#15283F] via-[#1E3654] to-[#303942] text-[#FAF8F4] p-6 ${containerClassName}`}
      >
        <Home className="w-7 h-7 text-[#B97B53] mb-3" aria-hidden="true" />
        <p className="text-sm font-medium text-center max-w-xs text-[#FAF8F4]/90">{alt}</p>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-[#E8E8E3] ${containerClassName}`}>
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        onError={() => setFailed(true)}
        className={className}
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15283F]/85 via-[#15283F]/40 to-transparent px-5 py-4">
          <p className="text-xs text-[#FAF8F4]/95 tracking-wide">{caption}</p>
        </div>
      )}
    </div>
  );
}
