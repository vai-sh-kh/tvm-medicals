"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export interface CarouselSlide {
  image: string;
  mobileImage?: string;
  title: string;
  description: string;
  buttons?: React.ReactNode;
}

interface HeroCarouselProps {
  images: string[] | CarouselSlide[];
  alt?: string;
  buttons?: React.ReactNode;
}

export default function HeroCarousel({
  images,
  alt = "Medical Equipment",
  buttons,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPausedRef = useRef(false);
  const isTransitioningRef = useRef(false);

  // Normalize images to CarouselSlide format
  const slides: CarouselSlide[] = images.map((img) => {
    if (typeof img === "string") {
      return { image: img, title: "", description: "" };
    }
    return img;
  });

  // Minimum swipe distance (in pixels)
  const minSwipeDistance = 50;

  // Pause auto-play temporarily (will resume after delay)
  const pauseAutoPlay = () => {
    isPausedRef.current = true;
  };

  // Resume auto-play
  const resumeAutoPlay = () => {
    isPausedRef.current = false;
  };

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    pauseAutoPlay();
    setIsTransitioning(true);
    isTransitioningRef.current = true;
    setCurrentIndex(index);
    setTimeout(() => {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
      // Resume auto-play after transition completes
      setTimeout(() => resumeAutoPlay(), 100);
    }, 500);
  };

  const goToPrevious = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    }
    if (isRightSwipe) {
      goToPrevious();
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Auto-play functionality
  useEffect(() => {
    if (slides.length <= 1) return;

    // Initialize auto-play
    isPausedRef.current = false;

    // Clear any existing interval
    if (autoPlayIntervalRef.current) {
      clearInterval(autoPlayIntervalRef.current);
    }

    // Set up new interval
    autoPlayIntervalRef.current = setInterval(() => {
      // Check refs directly to avoid stale closures
      if (!isPausedRef.current && !isTransitioningRef.current) {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex === slides.length - 1 ? 0 : prevIndex + 1;
          setIsTransitioning(true);
          isTransitioningRef.current = true;
          setTimeout(() => {
            setIsTransitioning(false);
            isTransitioningRef.current = false;
          }, 500);
          return nextIndex;
        });
      }
    }, 2000); // 3 seconds delay

    return () => {
      if (autoPlayIntervalRef.current) {
        clearInterval(autoPlayIntervalRef.current);
      }
    };
  }, [slides.length]);

  if (slides.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="relative w-full h-full overflow-hidden"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            willChange: "transform",
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex-shrink-0 relative h-full"
            >
              {/* Desktop Image */}
              <Image
                src={slide.image}
                alt={slide.title || `${alt} - Slide ${index + 1}`}
                fill
                className="object-cover hidden md:block"
                priority={index === 0}
                sizes="100vw"
              />
              {/* Mobile Image (if provided, otherwise use desktop image) */}
              <Image
                src={slide.mobileImage || slide.image}
                alt={slide.title || `${alt} - Slide ${index + 1}`}
                fill
                className="object-cover md:hidden"
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Black overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title and Description Overlay */}
      {slides[currentIndex]?.title && (
        <div className="absolute inset-0 flex items-center justify-center z-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-center text-white">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-6 leading-tight drop-shadow-2xl transition-opacity duration-500">
              {slides[currentIndex].title}
            </h2>
            {slides[currentIndex].description && (
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-50 drop-shadow-lg max-w-3xl mx-auto transition-opacity duration-500">
                {slides[currentIndex].description}
              </p>
            )}
          </div>
        </div>
      )}
      {/* Action Buttons - Fixed Position Below Text */}
      {buttons && (
        <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 w-full px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-row gap-2 sm:gap-3 md:gap-4 justify-center max-w-md sm:max-w-lg md:max-w-none mx-auto">
            {buttons}
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      {slides.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="hidden md:flex absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 items-center justify-center"
            aria-label="Previous slide"
            disabled={isTransitioning}
          >
            <FiChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>

          <button
            onClick={goToNext}
            className="hidden md:flex absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full p-2 sm:p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 items-center justify-center"
            aria-label="Next slide"
            disabled={isTransitioning}
          >
            <FiChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {slides.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-white w-8 sm:w-10"
                  : "bg-white/50 w-2 sm:w-3 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              disabled={isTransitioning}
            />
          ))}
        </div>
      )}
    </div>
  );
}
