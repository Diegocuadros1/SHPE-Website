"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
}

export const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? images.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === images.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  const isOpen = selectedIndex !== null;

  return (
    <>
      {/* Carousel Gallery */}
      <div className="px-12">
        <Carousel opts={{ align: "start", loop: true }} className="w-full">
          <CarouselContent className="-ml-2 md:-ml-4">
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6"
              >
                <button
                  onClick={() => openLightbox(index)}
                  className="relative group w-full aspect-square overflow-hidden rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors flex items-center justify-center">
                    <span className="text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity bg-crimson/80 px-3 py-1 rounded-full">
                      View
                    </span>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 bg-primary-foreground/90 hover:bg-primary-foreground text-crimson border-0" />
          <CarouselNext className="right-0 bg-primary-foreground/90 hover:bg-primary-foreground text-crimson border-0" />
        </Carousel>
      </div>

      {/* Lightbox Modal */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 bg-background/95 backdrop-blur-sm border-border">
          {/* ✅ Required for accessibility */}
          <DialogHeader className="sr-only">
            <DialogTitle>
              {selectedIndex !== null
                ? `Image preview: ${images[selectedIndex].alt}`
                : "Image preview"}
            </DialogTitle>
            <DialogDescription>
              Use the left and right buttons to navigate images. Press Escape to
              close.
            </DialogDescription>
          </DialogHeader>

          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6 text-foreground" />
            </button>

            {/* Previous button */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 z-50 p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-primary-foreground" />
            </button>

            {/* Image */}
            {selectedIndex !== null && (
              <div className="w-full h-full flex items-center justify-center p-16">
                <img
                  src={images[selectedIndex].src.replace(
                    /w=\d+&h=\d+/,
                    "w=1200&h=800"
                  )}
                  alt={images[selectedIndex].alt}
                  className="max-w-full max-h-full object-contain rounded-lg shadow-2xl animate-scale-in"
                />
              </div>
            )}

            {/* Next button */}
            <button
              onClick={goToNext}
              className="absolute right-4 z-50 p-3 rounded-full bg-primary hover:bg-primary/90 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-primary-foreground" />
            </button>

            {/* Image counter */}
            {selectedIndex !== null && (
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium"
                aria-live="polite"
              >
                {selectedIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
