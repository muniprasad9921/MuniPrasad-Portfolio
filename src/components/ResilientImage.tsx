import { useState } from 'react';
import { Layers } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  loading?: 'lazy' | 'eager';
}

export function ResilientImage({
  src,
  alt,
  className = 'w-full h-full object-cover',
  fallbackTitle,
  loading = 'lazy',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className="w-full h-full min-h-[220px] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#141418] via-[#0d0d10] to-[#1a1710] border border-white/10 p-6 text-center"
        role="img"
        aria-label={alt}
      >
        <div className="w-10 h-10 rounded-lg border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
          <Layers className="w-5 h-5" aria-hidden="true" />
        </div>
        <span className="text-sm font-medium text-[#F4F2EC]/80 max-w-xs">
          {fallbackTitle || alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
