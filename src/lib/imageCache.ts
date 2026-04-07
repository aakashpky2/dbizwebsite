// Global image cache for instant loading across all pages
const imageCache = new Map<string, HTMLImageElement>();

// Critical images that should be preloaded immediately
export const criticalImages = [
  "/dbiz-uploads/5811ce1b-59a5-4195-9ade-c745a34d0dbd.png", // Logo
  "/dbiz-uploads/80e6af29-5d04-498a-bd8c-a3a5594b6eea.png", // Hero image
  "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=40", // Hero Background
];

// Secondary images to preload after critical ones
export const secondaryImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=40", // About Background
  "/dbiz-uploads/a75a8440-5707-4bf5-9cd2-8590206fd2ed.png",
  "/dbiz-uploads/32069ace-e979-4eee-8ed4-c4bbbb796b3c.png",
  "/dbiz-uploads/afd683e8-0e3d-4fd4-9ba8-58e64040d98c.png",
  "/dbiz-uploads/47281a91-32ee-4185-82b7-d4f2a2fbea26.png",
];

// Common external images used across service pages
export const servicePageImages = [
  "https://images.unsplash.com/photo-1521791136064-7986c2920216",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
  "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
  "https://images.unsplash.com/photo-1664575602554-2087b04935a5",
];

// Preload a single image and cache it
export const preloadImage = (src: string): Promise<HTMLImageElement> => {
  return new Promise((resolve) => {
    // Return cached image if available
    const cached = imageCache.get(src);
    if (cached?.complete) {
      resolve(cached);
      return;
    }

    const img = new Image();
    img.onload = () => {
      imageCache.set(src, img);
      resolve(img);
    };
    img.onerror = () => {
      // Still cache to prevent repeated failed requests
      imageCache.set(src, img);
      resolve(img);
    };
    img.src = src;
  });
};

// Check if an image is already cached and loaded
export const isImageCached = (src: string): boolean => {
  const cached = imageCache.get(src);
  return cached?.complete ?? false;
};

// Get cached image element
export const getCachedImage = (src: string): HTMLImageElement | undefined => {
  return imageCache.get(src);
};

// Preload all critical images immediately
export const preloadCriticalImages = (): Promise<HTMLImageElement[]> => {
  return Promise.all(criticalImages.map(preloadImage));
};

// Preload secondary images in background
export const preloadSecondaryImages = (): Promise<HTMLImageElement[]> => {
  return Promise.all([...secondaryImages, ...servicePageImages].map(preloadImage));
};

// Initialize all image preloading
export const initImageCache = (): void => {
  // Preload critical images immediately
  preloadCriticalImages().then(() => {
    // Then preload secondary images in background
    requestIdleCallback?.(() => preloadSecondaryImages()) ??
      setTimeout(() => preloadSecondaryImages(), 100);
  });
};

// Preload images for a specific page
export const preloadPageImages = (urls: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(urls.map(preloadImage));
};
