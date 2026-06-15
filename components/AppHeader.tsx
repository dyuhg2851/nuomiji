import React from 'react';
import { ArrowLeft } from '@phosphor-icons/react';

interface HeaderProps {
  title: React.ReactNode | string;
  onBack: () => void;
  right?: React.ReactNode;
  showBack?: boolean;
}

export const AppHeader: React.FC<HeaderProps> = ({ title, onBack, right, showBack = true }) => {
  return (
    <div className="shrink-0 z-10 sticky top-0 bg-white/85">
          {/* Header内容区域 - 使用padding-top避开灵动岛 */}
          <div className="h-16 bg-white/85 backdrop-blur-xl flex items-center px-4 border-b border-white/40 shrink-0" style={{ paddingTop: 'env(safe-area-inset-top, 0px)' }}>
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            {showBack && (
              <button
                onClick={onBack}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 active:scale-90 transition-all"
              >
                <ArrowLeft size={20} className="text-slate-600" weight="bold" />
              </button>
            )}
            <h1 className="text-lg font-medium text-slate-700 tracking-wide">{title}</h1>
          </div>
          {right && <div className="flex items-center">{right}</div>}
        </div>
      </div>
    </div>
  );
};