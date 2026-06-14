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
  threshold = 80,
  maxAngle = 25,
  onSwipeRight,
  disabled = false,
}: SwipeConfig) => {
  const [isSwiping, setIsSwiping] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (disabled) return;
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
    setCurrentX(touch.clientX);
    setCurrentY(touch.clientY);
    setIsSwiping(true);
  }, [disabled]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (disabled || !isSwiping) return;
    const touch = e.touches[0];
    setCurrentX(touch.clientX);
    setCurrentY(touch.clientY);
  }, [disabled, isSwiping]);

  const handleTouchEnd = useCallback(() => {
    if (disabled || !isSwiping) return;
    
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const absDeltaX = Math.abs(deltaX);
    const absDeltaY = Math.abs(deltaY);
    
    // 严格的幅度限制：
    // 1. 水平滑动距离必须大于阈值
    // 2. 水平滑动距离必须明显大于垂直滑动距离（至少 2 倍）
    // 3. 角度必须足够小（接近水平）
    const isHorizontalSwipe = absDeltaX >= threshold && absDeltaX > absDeltaY * 2;
    
    // 计算相对于水平轴的角度（0-90度）
    const angle = absDeltaY > 0 ? Math.atan2(absDeltaY, absDeltaX) * (180 / Math.PI) : 0;

    if (isHorizontalSwipe && angle <= maxAngle && deltaX > 0 && onSwipeRight) {
      onSwipeRight();
    }

    setIsSwiping(false);
    setCurrentX(startX);
    setCurrentY(startY);
  }, [disabled, isSwiping, currentX, currentY, startX, startY, threshold, maxAngle, onSwipeRight]);

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

  // 只有当水平滑动距离明显大于垂直滑动距离时才显示进度
  const absDeltaX = Math.abs(currentX - startX);
  const absDeltaY = Math.abs(currentY - startY);
  const isValidHorizontalSwipe = absDeltaX > absDeltaY * 2 && currentX > startX;
  const swipeProgress = isSwiping && isValidHorizontalSwipe ? Math.min(absDeltaX / threshold, 1) : 0;

  return {
    containerRef,
    isSwiping,
    swipeProgress,
  };
};