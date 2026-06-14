import { useCallback, useEffect, useRef, useState } from 'react';

interface SwipeConfig {
  threshold?: number;
  maxAngle?: number;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  onSwipeUp?: () => void;
  onSwipeDown?: () => void;
  disabled?: boolean;
}

export const useSwipeGesture = ({
  threshold = 50,
  maxAngle = 45,
  onSwipeRight,
  disabled = false,
}: SwipeConfig) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (disabled) return;
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
    setCurrentX(touch.clientX);
    setIsSwiping(true);
  }, [disabled]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (disabled || !isSwiping) return;
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
  }, [disabled, isSwiping]);

  const handleTouchEnd = useCallback(() => {
    if (disabled || !isSwiping) return;
    
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const angle = Math.abs(Math.atan2(deltaY, deltaX) * (180 / Math.PI));

    if (distance >= threshold && angle <= maxAngle) {
      if (deltaX > 0 && onSwipeRight) {
        onSwipeRight();
      }
    }

    setIsSwiping(false);
    setCurrentX(startX);
  }, [disabled, isSwiping, currentX, startX, startY, threshold, maxAngle, onSwipeRight]);

  const currentY = useRef(0);

  useEffect(() => {
    const container = containerRef.current || document.body;
    
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  const swipeProgress = isSwiping ? Math.min((currentX - startX) / threshold, 1) : 0;

  return {
    containerRef,
    isSwiping,
    swipeProgress,
  };
};