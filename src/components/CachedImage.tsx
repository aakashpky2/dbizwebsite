
import React, { useState, useEffect } from "react";
import { isImageCached, preloadImage } from "@/lib/imageCache";
import { cn } from "@/lib/utils";

interface CachedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  shimmerClassName?: string;
  // Architecture: Zero-Gravity Principle - Reserve space via Aspect Ratio
  aspectRatio?: string | number;
}

/**
 * Advanced Zero-Gravity Image Component
 * Eliminates CLS by ensuring layout stability and uses high-end shimmers.
 */
const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  shimmerClassName,
  aspectRatio,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(isImageCached(src));
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Correctly reset states when src changes
    setHasError(false);
    const cached = isImageCached(src);
    setIsLoaded(cached);
    
    if (!cached) {
      preloadImage(src)
        .then(() => setIsLoaded(true))
        .catch(() => setHasError(true));
    }
  }, [src]);

  const wrapperStyle = aspectRatio
    ? { aspectRatio: String(aspectRatio) }
    : undefined;

  return (
    <div
      className={cn("relative overflow-hidden bg-gray-100", wrapperClassName)}
      style={wrapperStyle}
    >
      {/* High-End Shimmer Skeleton */}
      {!isLoaded && !hasError && (
        <div className={cn(
          "absolute inset-0 z-10 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200",
          shimmerClassName
        )} />
      )}

      {/* Error State */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-400">
          <span className="text-xs">Image unavailable</span>
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-700 ease-in-out",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        loading={props.loading || "lazy"}
        decoding="async"
        {...props}
      />
    </div>
  );
};

export default CachedImage;
