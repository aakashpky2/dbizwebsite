"use client";

import React, { useState, useEffect } from "react";
import { isImageCached, preloadImage } from "@/lib/imageCache";
import { cn } from "@/lib/utils";

interface CachedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

/**
 * CachedImage component that shows images instantly if cached,
 * or loads them with a smooth fade-in transition.
 */
const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  className,
  wrapperClassName,
  ...props
}) => {
  const [loaded, setLoaded] = useState(isImageCached(src));

  useEffect(() => {
    if (!loaded) {
      preloadImage(src).then(() => setLoaded(true));
    }
  }, [src, loaded]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="eager"
      decoding="sync"
      onLoad={() => setLoaded(true)}
      {...props}
    />
  );
};

export default CachedImage;
