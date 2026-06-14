import React from 'react';
import { useSwipeGesture } from '../hooks/useSwipeGesture';

interface AppWrapperProps {
  children: React.ReactNode;
  onClose: () => void;
  disableSwipe?: boolean;
}

export const AppWrapper: React.FC<AppWrapperProps> = ({ children, onClose, disableSwipe = false }) => {
  const { containerRef, swipeProgress } = useSwipeGesture({
    threshold: 50,
    maxAngle: 30,
    onSwipeRight: onClose,
    disabled: disableSwipe,
  });

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex flex-col"
      style={{
        transform: swipeProgress > 0 ? `translateX(${swipeProgress * 60}px)` : undefined,
        transition: swipeProgress > 0 ? 'transform 0.1s ease-out' : undefined,
      }}
    >
      {children}
    </div>
  );
};