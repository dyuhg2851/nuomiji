import React, { useRef, useState, useEffect } from 'react';
import { ShareNetwork, Trash, Plus, Smiley, PaperPlaneTilt, Money, BookOpenText, GearSix, Image, Lock, ArrowsClockwise, ChatCircleDots, CalendarBlank, Code, Brain, PencilSimple } from '@phosphor-icons/react';
import { CharacterProfile, ChatTheme, EmojiCategory, Emoji } from '../../types';
import { PRESET_THEMES } from './ChatConstants';
import { AcnhActionTile } from '../os/acnhIcons';
import { isIOSStandaloneWebApp } from '../../utils/iosStandalone';

interface ChatInputAreaProps {
    input: string;
    setInput: (v: string) => void;
    isTyping: boolean;
    selectionMode: boolean;
    showPanel: 'none' | 'actions' | 'emojis' | 'chars';
    setShowPanel: (v: 'none' | 'actions' | 'emojis' | 'chars') => void;
    onSend: () => void;
    onDeleteSelected: () => void;
    onForwardSelected?: () => void;
    selectedCount: number;
    emojis: Emoji[];
    characters: CharacterProfile[];
    activeCharacterId: string;
    onCharSelect: (id: string) => void;
    customThemes: ChatTheme[];
    onUpdateTheme: (id: string) => void;
    onRemoveTheme: (id: string) => void;
    activeThemeId: string;
    onPanelAction: (type: string, payload?: any) => void;
    onImageSelect: (file: File) => void;
    isSummarizing: boolean;
    // Categories Support
    categories?: EmojiCategory[];
    activeCategory?: string;
    // Reroll Support
    onReroll: () => void;
    canReroll: boolean;
    // Proactive messaging
    isProactiveActive?: boolean;
    // HTML 模块模式
    htmlModeEnabled?: boolean;
    // 思考过程展示（会话级）
    showThinkingChain?: boolean;
    // Input style
    inputStyle?: 'default' | 'rounded' | 'flat' | 'wechat' | 'ios' | 'telegram' | 'discord' | 'pixel';
    sendButtonStyle?: 'circle' | 'pill' | 'minimal';
    chromeStyle?: 'soft' | 'flat' | 'floating' | 'pixel';
    /** 动森彩蛋模式：输入栏换成木质草绿圆角。 */
    acnh?: boolean;
}

const ChatInputArea: React.FC<ChatInputAreaProps> = ({
    input, setInput, isTyping, selectionMode,
    showPanel, setShowPanel, onSend, onDeleteSelected, onForwardSelected, selectedCount,
    emojis, characters, activeCharacterId, onCharSelect,
    customThemes, onUpdateTheme, onRemoveTheme, activeThemeId,
    onPanelAction, onImageSelect, isSummarizing,
    categories = [], activeCategory = 'default',
    onReroll, canReroll,
    isProactiveActive,
    htmlModeEnabled = false,
    showThinkingChain = false,
    inputStyle = 'default',
    sendButtonStyle = 'circle',
    chromeStyle = 'soft',
    acnh = false,
}) => {
    const chatImageInputRef = useRef<HTMLInputElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [actionsPage, setActionsPage] = useState<0 | 1>(0);
    const [emojiSelectionMode, setEmojiSelectionMode] = useState(false);
    const [selectedEmojis, setSelectedEmojis] = useState<any[]>([]);
    const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const startPos = useRef({ x: 0, y: 0 });
    const isLongPressTriggered = useRef(false); // Track if long press action fired
    const actionsSwipeStart = useRef<{ x: number; y: number } | null>(null);
    const actionsSwipeMoved = useRef(false);
    const useIOSStandaloneInputFix = isIOSStandaloneWebApp();

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend();
        }
    };

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>, type: 'chat' | 'bg') => {
        const file = e.target.files?.[0];
        if (file) {
            onImageSelect(file);
        }
        if (e.target) e.target.value = ''; // Reset
    };

    // --- Unified Touch/Long-Press Logic ---
    
    const clearTimer = () => {
        if (longPressTimer.current) {
            clearTimeout(longPressTimer.current);
            longPressTimer.current = null;
        }
    };

    const handleTouchStart = (item: any, type: 'emoji' | 'category', e: React.TouchEvent | React.MouseEvent) => {
        // 1. Always reset state first to ensure clean slate for any interaction
        // This fixes the bug where deleting a category leaves the flag true, blocking clicks on system categories
        clearTimer(); 
        isLongPressTriggered.current = false;

        // 2. Skip long-press for the default category (no options needed)
        if (type === 'category' && item.id === 'default') return;
        
        // 3. Store coordinates and start timer for valid long-press candidates
        if ('touches' in e) {
            startPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else {
            startPos.current = { x: e.clientX, y: e.clientY };
        }

        longPressTimer.current = setTimeout(() => {
            isLongPressTriggered.current = true;
            // Trigger action
            if (type === 'emoji') {
                if (!emojiSelectionMode) {
                    setEmojiSelectionMode(true);
                    setSelectedEmojis([item]);
                }
            } else {
                onPanelAction('category-options', item);
            }
        }, 500); // 500ms threshold
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        if (!longPressTimer.current) return;

        let clientX, clientY;
        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const diffX = Math.abs(clientX - startPos.current.x);
        const diffY = Math.abs(clientY - startPos.current.y);

        // Cancel long press if moved more than 10px (scrolling)
        if (diffX > 10 || diffY > 10) {
            clearTimer();
        }
    };

    const handleTouchEnd = () => {
        clearTimer();
    };

    // --- Actions Panel Swipe (left/right page switch) ---
    const handleActionsSwipeStart = (e: React.TouchEvent) => {
        const t = e.touches[0];
        actionsSwipeStart.current = { x: t.clientX, y: t.clientY };
        actionsSwipeMoved.current = false;
    };

    const handleActionsSwipeMove = (e: React.TouchEvent) => {
        if (!actionsSwipeStart.current) return;
        const t = e.touches[0];
        const dx = t.clientX - actionsSwipeStart.current.x;
        const dy = t.clientY - actionsSwipeStart.current.y;
        if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
            actionsSwipeMoved.current = true;
        }
    };

    const handleActionsSwipeEnd = (e: React.TouchEvent) => {
        if (!actionsSwipeStart.current) return;
        const t = e.changedTouches[0];
        const dx = t.clientX - actionsSwipeStart.current.x;
        const dy = t.clientY - actionsSwipeStart.current.y;
        actionsSwipeStart.current = null;
        const SWIPE_THRESHOLD = 40;
        if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0 && actionsPage === 0) setActionsPage(1);
            else if (dx > 0 && actionsPage === 1) setActionsPage(0);
        }
    };

    const handleActionsClickCapture = (e: React.MouseEvent) => {
        if (actionsSwipeMoved.current) {
            e.stopPropagation();
            e.preventDefault();
            actionsSwipeMoved.current = false;
        }
    };


    // Wrapper for Click to prevent conflicts
    const handleItemClick = (e: React.MouseEvent, item: any, type: 'emoji' | 'category') => {
        // If long press action triggered, block the click event (do not send)
        if (isLongPressTriggered.current) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }

        // If click happens, ensure timer is cleared (prevents "Send then Pop up" ghost issue)
        clearTimer();

        if (type === 'emoji') {
            if (emojiSelectionMode) {
                setSelectedEmojis(prev => {
                    const exists = prev.find(e => e.url === item.url);
                    if (exists) return prev.filter(e => e.url !== item.url);
                    return [...prev, item];
                });
            } else {
                onPanelAction('send-emoji', item);
            }
        } else {
            onPanelAction('select-category', item.id);
        }
    };

    const handleInputFocus = () => {
        if (!useIOSStandaloneInputFix) return;
        setShowPanel('none');
        const textarea = textareaRef.current;
        if (!textarea) return;
        window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
                if (document.activeElement !== textarea) return;
                try {
                    textarea.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                } catch {
                    // Older iOS builds can throw on unsupported scroll options.
                }
            });
        });
    };

    React.useEffect(() => {
        if (showPanel !== 'emojis') {
            setEmojiSelectionMode(false);
            setSelectedEmojis([]);
        }
    }, [showPanel]);

    React.useEffect(() => {
        if (!emojiSelectionMode) {
            setSelectedEmojis([]);
        }
    }, [emojiSelectionMode]);

    React.useEffect(() => {
        if (emojiSelectionMode) {
            setSelectedEmojis(prev => prev.filter(se => emojis.some(e => e.url === se.url)));
        }
    }, [emojis]);

    const isDiscordStyle = inputStyle === 'discord';
    const isPixelStyle = inputStyle === 'pixel' || chromeStyle === 'pixel';
    const shellClass = 'bg-[#f5f5f5] border-t-[0.25px] border-slate-300';
    const actionButtonClass = acnh
        ? 'w-11 h-11 shrink-0 rounded-full bg-[#4cb89e] flex items-center justify-center text-white hover:bg-[#43ad93] transition-colors shadow-sm'
        : isPixelStyle
        ? 'w-11 h-11 shrink-0 rounded-[4px] border-2 border-[#8f674a] bg-[#f8f0e0] flex items-center justify-center text-[#8f674a] hover:bg-[#fff7ed] transition-colors'
        : isDiscordStyle
          ? 'w-11 h-11 shrink-0 rounded-full bg-slate-800 flex items-center justify-center text-slate-200 hover:bg-slate-700 transition-colors'
          : 'w-11 h-11 shrink-0 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors';
    const inputWrapClass =
        acnh
            ? 'bg-[#fbf4de] border-2 border-[#e6dab4] rounded-full'
            :
        inputStyle === 'rounded'
            ? 'bg-slate-100 rounded-full'
            : inputStyle === 'flat'
              ? 'bg-transparent border-b border-slate-200 rounded-none'
              : inputStyle === 'wechat'
                ? 'bg-white border border-slate-200 rounded-full'
                : inputStyle === 'ios'
                  ? 'bg-white/80 border border-white/80 shadow-inner rounded-[26px]'
                  : inputStyle === 'telegram'
                    ? 'bg-white border border-sky-100 rounded-2xl'
                    : inputStyle === 'discord'
                      ? 'bg-slate-800 border border-white/10 rounded-2xl text-white'
                      : inputStyle === 'pixel'
                        ? 'bg-[#f8f0e0] border-2 border-[#8f674a] rounded-[4px]'
                        : 'bg-slate-100 rounded-[24px]';
    const sendButtonClass = acnh
        ? 'w-11 h-11 shrink-0 rounded-full bg-[#f3d06a] text-[#6b5a3e] flex items-center justify-center shadow-md'
        :
        sendButtonStyle === 'pill'
            ? isPixelStyle
                ? 'h-11 min-w-[72px] shrink-0 rounded-[4px] border-2 border-[#8f674a] bg-[#c99872] px-4 text-[11px] font-bold text-[#fff7ed]'
                : 'h-11 min-w-[72px] shrink-0 rounded-full bg-primary px-4 text-[11px] font-bold text-white shadow-lg'
            : sendButtonStyle === 'minimal'
              ? isPixelStyle
                ? 'w-11 h-11 shrink-0 rounded-[4px] border-2 border-[#8f674a] bg-[#c99872] text-[#fff7ed] flex items-center justify-center'
                : isDiscordStyle
                  ? 'w-11 h-11 shrink-0 rounded-full bg-transparent text-sky-300 flex items-center justify-center'
                  : 'w-11 h-11 shrink-0 rounded-full bg-transparent text-primary flex items-center justify-center'
              : isPixelStyle
                ? 'w-11 h-11 shrink-0 rounded-[4px] border-2 border-[#8f674a] bg-[#c99872] text-[#fff7ed] flex items-center justify-center'
                : 'w-11 h-11 shrink-0 rounded-full bg-primary text-white flex items-center justify-center transition-all shadow-lg';
    const panelClass = acnh
        ? 'bg-[#f3ecdc] border-t-[3px] border-[#e0d6c0]'
        : isPixelStyle
        ? 'bg-[#f8f0e0] border-t-2 border-[#8f674a]'
        : isDiscordStyle
          ? 'bg-slate-900/95 border-t border-white/10'
          : 'bg-slate-50 border-t border-slate-200/60';
    const panelTopBarClass = acnh
        ? 'h-10 bg-[#efe7d4] border-b-2 border-[#e0d6c0] flex items-center px-2 gap-2 overflow-x-auto no-scrollbar shrink-0'
        : isPixelStyle
        ? 'h-10 bg-[#eadfce] border-b-2 border-[#8f674a] flex items-center px-2 gap-2 overflow-x-auto no-scrollbar shrink-0'
        : isDiscordStyle
          ? 'h-10 bg-slate-950 border-b border-white/10 flex items-center px-2 gap-2 overflow-x-auto no-scrollbar shrink-0'
          : 'h-10 bg-white border-b border-slate-100 flex items-center px-2 gap-2 overflow-x-auto no-scrollbar shrink-0';
    const inactiveCategoryClass = isPixelStyle
        ? 'bg-[#f3e7d6] text-[#8f674a] border border-[#8f674a]/30'
        : isDiscordStyle
          ? 'bg-slate-800 text-slate-300 border border-white/10'
          : 'bg-slate-100 text-slate-500 border border-transparent';
    const activeCategoryClass = isPixelStyle
        ? 'bg-[#c99872] text-[#fff7ed] font-bold border border-[#8f674a]'
        : isDiscordStyle
          ? 'bg-indigo-500 text-white font-bold border border-indigo-400/60 shadow-sm'
          : 'bg-primary text-white font-bold shadow-sm border border-transparent';
    const categoryAddButtonClass = isPixelStyle
        ? 'w-6 h-6 rounded-full border border-[#8f674a] bg-[#f8f0e0] text-[#8f674a] flex items-center justify-center shrink-0 hover:bg-[#fff7ed]'
        : isDiscordStyle
          ? 'w-6 h-6 rounded-full border border-white/10 bg-slate-800 text-slate-300 flex items-center justify-center shrink-0 hover:bg-slate-700'
          : 'w-6 h-6 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center shrink-0 hover:bg-slate-200';
    const emojiImportTileClass = acnh
        ? 'aspect-square bg-white rounded-2xl border-2 border-dashed border-[#cfc3a6] flex items-center justify-center text-2xl text-[#9f8e68]'
        : isPixelStyle
        ? 'aspect-square bg-[#fff7ed] rounded-2xl border-2 border-dashed border-[#8f674a]/40 flex items-center justify-center text-2xl text-[#8f674a]'
        : isDiscordStyle
          ? 'aspect-square bg-slate-800 rounded-2xl border-2 border-dashed border-slate-700 flex items-center justify-center text-2xl text-slate-400'
          : 'aspect-square bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex items-center justify-center text-2xl text-slate-400';
    const emojiTileClass = acnh
        ? 'bg-white rounded-2xl p-2 border-2 border-[#ece0c8] shadow-sm relative active:scale-95 transition-transform select-none flex flex-col items-center'
        : isPixelStyle
        ? 'bg-[#fff7ed] rounded-2xl p-2 border-2 border-[#8f674a]/20 shadow-sm relative active:scale-95 transition-transform select-none flex flex-col items-center'
        : isDiscordStyle
          ? 'bg-slate-800 rounded-2xl p-2 border border-white/10 shadow-sm relative active:scale-95 transition-transform select-none flex flex-col items-center'
          : 'bg-white rounded-2xl p-2 shadow-sm relative active:scale-95 transition-transform select-none flex flex-col items-center';
    const emojiLabelClass = isPixelStyle
        ? 'text-[#8f674a]'
        : isDiscordStyle
          ? 'text-slate-400'
          : 'text-slate-400';

    const selectedEmojiUrls = emojiSelectionMode ? new Set(selectedEmojis.map(se => se.url)) : new Set();

    return (
        <>
        {emojiSelectionMode && (
            <div className={`fixed inset-0 z-[-1] ${isPixelStyle ? 'bg-[#eadfce]/70 backdrop-blur-[2px]' : isDiscordStyle ? 'bg-slate-950/70 backdrop-blur-[2px]' : 'bg-white/60 backdrop-blur-[2px]'}`} />
        )}
        <div className={`sully-chat-inputbar ${shellClass} shrink-0 z-40 relative -mt-3 pt-3`}>
            
            {selectionMode ? (
                <div className={`p-3 flex gap-2 ${isPixelStyle ? 'bg-[#f3e7d6]' : isDiscordStyle ? 'bg-slate-900/60 backdrop-blur-md' : 'bg-white/50 backdrop-blur-md'}`}>
                    {onForwardSelected && (
                        <button
                            onClick={onForwardSelected}
                            disabled={selectedCount === 0}
                            className={`flex-1 py-3 font-bold rounded-xl shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2 ${selectedCount === 0 ? 'bg-slate-200 text-slate-400 shadow-none' : 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-blue-200'}`}
                        >
                            <ShareNetwork className="w-5 h-5" weight="bold" />
                            转发 ({selectedCount})
                        </button>
                    )}
                    <button
                        onClick={onDeleteSelected}
                        className={`${onForwardSelected ? 'flex-1' : 'w-full'} py-3 bg-red-500 text-white font-bold rounded-xl shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2`}
                    >
                        <Trash className="w-5 h-5" weight="bold" />
                        删除 ({selectedCount})
                    </button>
                </div>
            ) : (
                <div className="p-2 pl-4 flex gap-0 items-center relative">
                    {/* 语音按钮 */}
                    <button className={`p-2 shrink-0 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="#000000" fillRule="evenodd" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-1.2a8.8 8.8 0 1 0 0-17.6a8.8 8.8 0 0 0 0 17.6m.308-3.992A6.77 6.77 0 0 0 14.3 12c0-1.83-.724-3.54-1.992-4.808l.849-.849A7.98 7.98 0 0 1 15.5 12c0 2.21-.895 4.21-2.343 5.657zm-1.98-1.98A3.98 3.98 0 0 0 11.5 12a3.98 3.98 0 0 0-1.172-2.828l.849-.849A5.18 5.18 0 0 1 12.7 12a5.18 5.18 0 0 1-1.523 3.677zm-1.13-1.13L7.5 12l1.697-1.697c.434.434.703 1.034.703 1.697s-.269 1.263-.703 1.697z"/>
                        </svg>
                    </button>
                    <div className={`flex-1 min-w-0 flex items-center px-1.5 pr-0 transition-all bg-white rounded-[4px] border border-slate-200/50 ${useIOSStandaloneInputFix ? 'overflow-visible' : 'overflow-hidden'}`}>
                        <textarea 
                            ref={textareaRef}
                            rows={1} 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            onKeyDown={handleKeyDown} 
                            onFocus={handleInputFocus}
                            inputMode="text"
                            enterKeyHint="send"
                            autoCorrect="on"
                            autoCapitalize="sentences"
                            className={`flex-1 min-w-0 bg-transparent px-3 py-1 ${useIOSStandaloneInputFix ? 'text-[16px]' : 'text-[14px]'} resize-none max-h-24 no-scrollbar text-slate-700`} 
                            placeholder="" 
                            style={{ height: 'auto' }} 
                        />
                        {/* 装饰按钮 */}
                        {!input.trim() && (
                        <button className={`p-1 shrink-0 opacity-40`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 48 48">
                                <g fill="none" stroke="#999999" strokeLinejoin="round" strokeWidth="4">
                                    <rect width="14" height="27" x="17" y="4" rx="7"/>
                                    <path strokeLinecap="round" d="M9 23c0 8.284 6.716 15 15 15s15-6.716 15-15M24 38v6"/>
                                </g>
                            </svg>
                        </button>
                        )}
                    </div>
                    {/* 表情按钮 */}
                    <button onClick={() => setShowPanel(showPanel === 'emojis' ? 'none' : 'emojis')} className={`p-2 shrink-0 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 21 21">
                            <g fill="none" fillRule="evenodd" transform="translate(2 2)">
                                <circle cx="8.5" cy="8.5" r="8" stroke="#000000" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="6" cy="6" r="1" fill="#000000"/>
                                <circle cx="11" cy="6" r="1" fill="#000000"/>
                                <path stroke="#000000" strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5q1 3 4 3t4-3z"/>
                            </g>
                        </svg>
                    </button>
                    {/* 加号按钮 */}
                    <button onClick={() => setShowPanel(showPanel === 'actions' ? 'none' : 'actions')} className={`p-2 shrink-0 text-slate-600 hover:text-primary hover:bg-slate-100 rounded-full`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                            <path fill="#000000" d="M7 12h4V8h1v4h4v1h-4v4h-1v-4H7zm4.5-9a9.5 9.5 0 0 1 9.5 9.5a9.5 9.5 0 0 1-9.5 9.5A9.5 9.5 0 0 1 2 12.5A9.5 9.5 0 0 1 11.5 3m0 1A8.5 8.5 0 0 0 3 12.5a8.5 8.5 0 0 0 8.5 8.5a8.5 8.5 0 0 0 8.5-8.5A8.5 8.5 0 0 0 11.5 4"/>
                        </svg>
                    </button>

                    {emojiSelectionMode && (
                        <div className={`absolute inset-0 z-10 bg-white/60 backdrop-blur-[2px]`} />
                    )}
                </div>
            )}

            {/* Panels — always mounted, height transitions for smooth open/close */}
            {!selectionMode && (
                <div
                    className={`sully-chat-panel ${panelClass} overflow-hidden relative z-0 flex flex-col will-change-[max-height] transition-[max-height] duration-200 ease-out`}
                    style={{ maxHeight: showPanel !== 'none' ? '18rem' : '0px' }}
                >
                    
                    {/* Emojis Panel with Categories */}
                    {showPanel === 'emojis' && (
                        <>
                            {/* Categories Bar */}
                            <div className="relative">
                                <div className={panelTopBarClass}>
                                    {categories.map(cat => (
                                        <button 
                                            key={cat.id} 
                                            onClick={(e) => handleItemClick(e, cat, 'category')}
                                            // Long press handlers for Categories
                                            onTouchStart={(e) => handleTouchStart(cat, 'category', e)}
                                            onTouchMove={handleTouchMove}
                                            onTouchEnd={handleTouchEnd}
                                            onMouseDown={(e) => handleTouchStart(cat, 'category', e)}
                                            onMouseMove={handleTouchMove}
                                            onMouseUp={handleTouchEnd}
                                            onMouseLeave={handleTouchEnd}
                                            onContextMenu={(e) => e.preventDefault()}
                                            className={`px-3 py-1 text-xs rounded-full whitespace-nowrap transition-all select-none flex items-center gap-1 ${activeCategory === cat.id ? activeCategoryClass : inactiveCategoryClass}`}
                                        >
                                            {cat.name}
                                            {cat.allowedCharacterIds && cat.allowedCharacterIds.length > 0 && (
                                                <Lock className="w-3 h-3 opacity-60" weight="bold" />
                                            )}
                                        </button>
                                    ))}
                                    <button onClick={() => onPanelAction('add-category')} className={categoryAddButtonClass}>+</button>
                                    <div className="w-6 shrink-0 pointer-events-none" />
                                </div>
                                {emojiSelectionMode ? (
                                    <div 
                                        className={`absolute inset-0 z-10 flex items-center justify-end px-3 ${
                                            isPixelStyle ? 'bg-[#eadfce]/70 backdrop-blur-[2px]' : 
                                            isDiscordStyle ? 'bg-slate-950/70 backdrop-blur-[2px]' : 
                                            'bg-white/60 backdrop-blur-[2px]'
                                        }`}
                                    >
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setEmojiSelectionMode(false); }} 
                                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shadow-sm ${
                                                isPixelStyle ? 'bg-[#c99872] text-[#fff7ed] hover:bg-[#b07d57]' :
                                                isDiscordStyle ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' :
                                                'bg-slate-200/80 text-slate-600 hover:bg-slate-300'
                                            }`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="absolute right-0 top-0 bottom-0 z-10 flex items-center justify-end px-3 pointer-events-none">
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); setEmojiSelectionMode(true); }} 
                                            className={`w-6 h-6 rounded-full flex items-center justify-center transition-colors shadow-sm pointer-events-auto ${
                                                isPixelStyle ? 'bg-[#c99872] text-[#fff7ed] hover:bg-[#b07d57]' :
                                                isDiscordStyle ? 'bg-slate-700 text-slate-300 hover:bg-slate-600' :
                                                'bg-white/90 text-slate-600 hover:bg-slate-100 backdrop-blur-sm border border-slate-200/50'
                                            }`}
                                        >
                                            <PencilSimple className="w-3.5 h-3.5" weight="bold" />
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="flex-1 overflow-y-auto no-scrollbar p-4">
                                <div className="grid grid-cols-4 gap-3">
                                    {emojiSelectionMode ? (
                                        <button 
                                            onClick={() => {
                                                if (selectedEmojis.length > 0) {
                                                    onPanelAction('delete-emoji-req', selectedEmojis);
                                                }
                                            }} 
                                            disabled={selectedEmojis.length === 0}
                                            className={`${emojiImportTileClass} !bg-red-50 !border-red-400 !text-red-500 ${selectedEmojis.length === 0 ? 'opacity-40 cursor-not-allowed' : 'active:scale-95'}`}
                                        >
                                            <Trash className="w-8 h-8" weight="fill" />
                                        </button>
                                    ) : (
                                        <button onClick={() => onPanelAction('emoji-import')} className={emojiImportTileClass}>+</button>
                                    )}
                                    {emojis.map((e, i) => {
                                        const isSelected = selectedEmojiUrls.has(e.url);
                                        return (
                                        <button 
                                            key={i} 
                                            onClick={(ev) => handleItemClick(ev, e, 'emoji')}
                                            // Long press handlers for Emojis
                                            onTouchStart={(ev) => handleTouchStart(e, 'emoji', ev)}
                                            onTouchMove={handleTouchMove}
                                            onTouchEnd={handleTouchEnd}
                                            onMouseDown={(ev) => handleTouchStart(e, 'emoji', ev)}
                                            onMouseMove={handleTouchMove}
                                            onMouseUp={handleTouchEnd}
                                            onMouseLeave={handleTouchEnd}
                                            onContextMenu={(ev) => ev.preventDefault()}
                                            className={`${emojiTileClass} ${isSelected ? '!border-blue-500' : ''}`}
                                        >
                                            <div className="aspect-square w-full">
                                                <img src={e.url} className="w-full h-full object-contain pointer-events-none" />
                                            </div>
                                            <span className={`text-[9px] truncate w-full text-center mt-0.5 leading-tight pointer-events-none ${emojiLabelClass}`}>{e.name}</span>
                                            {isSelected && <div className="absolute inset-0 bg-blue-500/20 rounded-2xl pointer-events-none border-2 border-blue-500" />}
                                        </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </>
                    )}

                    {/* Actions Panel (paginated: page 0 = 内置功能, page 1 = 外部服务) */}
                    {showPanel === 'actions' && (
                        <div
                            className="overflow-y-auto no-scrollbar"
                            onTouchStart={handleActionsSwipeStart}
                            onTouchMove={handleActionsSwipeMove}
                            onTouchEnd={handleActionsSwipeEnd}
                            onClickCapture={handleActionsClickCapture}
                        >
                          <div className={`p-6 grid grid-cols-4 gap-8 ${actionsPage === 0 ? '' : 'hidden'}`}>
                            <button onClick={() => onPanelAction('transfer')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="transfer" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 text-orange-300 border-orange-400/20' : 'bg-orange-50 text-orange-400 border-orange-100'}`}>
                                    <Money className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">转账</span>
                            </button>
                            
                            <button onClick={() => onPanelAction('poke')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="poke" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 border-sky-400/20' : 'bg-sky-50 border-sky-100'}`}><img src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/1f449.png" alt="poke" className="w-6 h-6" /></div>)}
                                <span className="text-xs font-bold">戳一戳</span>
                            </button>
                            
                            <button onClick={() => onPanelAction('archive')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="archive" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 text-indigo-300 border-indigo-400/20' : 'bg-indigo-50 text-indigo-400 border-indigo-100'}`}>
                                    <BookOpenText className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">{isSummarizing ? '归档中...' : '记忆归档'}</span>
                            </button>
                            
                            <button onClick={() => onPanelAction('settings')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="settings" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 text-slate-300 border-white/10' : 'bg-slate-50 text-slate-500 border-slate-100'}`}>
                                    <GearSix className="w-6 h-6" weight="bold" /></div>)}
                                <span className="text-xs font-bold">设置</span>
                            </button>
                            
                            <button onClick={() => chatImageInputRef.current?.click()} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="image" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 text-pink-300 border-pink-400/20' : 'bg-pink-50 text-pink-400 border-pink-100'}`}>
                                    <Image className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">相册</span>
                            </button>
                            <input type="file" ref={chatImageInputRef} className="hidden" accept="image/*" onChange={(e) => handleImageChange(e, 'chat')} />

                            {/* Regenerate Button */}
                            <button onClick={onReroll} disabled={!canReroll} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${canReroll ? (isDiscordStyle ? 'text-slate-200' : 'text-slate-600') : 'text-slate-300 opacity-50'}`}>
                                {acnh ? <AcnhActionTile kind="regenerate" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${canReroll ? (isDiscordStyle ? 'bg-slate-800 text-emerald-300 border-emerald-400/20' : 'bg-emerald-50 text-emerald-400 border-emerald-100') : (isDiscordStyle ? 'bg-slate-800 text-slate-600 border-white/10' : 'bg-slate-50 text-slate-300 border-slate-100')}`}>
                                    <ArrowsClockwise className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">重新生成</span>
                            </button>

                            {/* Proactive Message Button */}
                            <button onClick={() => onPanelAction('proactive')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform relative ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="proactive" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isProactiveActive ? (isDiscordStyle ? 'bg-violet-500/15 text-violet-300 border-violet-400/30' : 'bg-violet-50 text-violet-500 border-violet-200') : (isDiscordStyle ? 'bg-slate-800 text-slate-400 border-white/10' : 'bg-slate-50 text-slate-400 border-slate-100')}`}>
                                    <ChatCircleDots className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">主动消息</span>
                                {isProactiveActive && <span className={`absolute top-0 right-1 w-2.5 h-2.5 rounded-full border-2 ${isDiscordStyle ? 'bg-violet-400 border-slate-900' : 'bg-violet-500 border-white'}`} />}
                            </button>

                            {/* 情绪按钮已并入日程 — 情绪/意识流与日程强制同步，配置面板在日程 Modal 下方 */}

                            {/* Schedule Button */}
                            <button onClick={() => onPanelAction('schedule')} className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}>
                                {acnh ? <AcnhActionTile kind="schedule" /> : (
                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${isDiscordStyle ? 'bg-slate-800 text-cyan-300 border-cyan-400/20' : 'bg-cyan-50 text-cyan-500 border-cyan-100'}`}>
                                    <CalendarBlank className="w-6 h-6" weight="bold" />
                                </div>)}
                                <span className="text-xs font-bold">日程</span>
                            </button>

                          </div>

                          {/* Page 1: 外部服务 */}
                          <div className={`p-6 grid grid-cols-4 gap-8 ${actionsPage === 1 ? '' : 'hidden'}`}>
                            {/* HTML 模块模式：tap = 切换开关 (注入提示词); 长按打开自定义提示词设置 */}
                            <button
                              onClick={() => onPanelAction('html-mode-toggle')}
                              onContextMenu={(e) => { e.preventDefault(); onPanelAction('html-mode-settings'); }}
                              className={`flex flex-col items-center gap-2 active:scale-95 transition-transform relative ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}
                            >
                              {acnh ? <div className="relative"><AcnhActionTile kind="html" />{htmlModeEnabled && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#b77dee] border-2 border-white" />}</div> : (
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border relative ${
                                  htmlModeEnabled
                                    ? (isDiscordStyle ? 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-400/40' : 'bg-fuchsia-100 text-fuchsia-600 border-fuchsia-200')
                                    : (isDiscordStyle ? 'bg-slate-800 text-fuchsia-300 border-fuchsia-400/20' : 'bg-fuchsia-50 text-fuchsia-500 border-fuchsia-100')
                              }`}>
                                  <Code className="w-6 h-6" weight="bold" />
                                  {htmlModeEnabled && <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 ${isDiscordStyle ? 'bg-fuchsia-400 border-slate-900' : 'bg-fuchsia-500 border-white'}`} />}
                              </div>)}
                              <span className="text-xs font-bold">{htmlModeEnabled ? 'HTML已开' : 'HTML模式'}</span>
                            </button>

                            {/* 「展示思考」按钮：tap → 直接打开思考链设置弹窗（含开关），不再做 inline toggle */}
                            <button
                              onClick={() => onPanelAction('thinking-settings')}
                              className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}
                            >
                              {acnh ? <div className="relative"><AcnhActionTile kind="thinking" />{showThinkingChain && <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#889df0] border-2 border-white" />}</div> : (
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border relative ${
                                  showThinkingChain
                                    ? (isDiscordStyle ? 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40' : 'bg-indigo-100 text-indigo-600 border-indigo-200')
                                    : (isDiscordStyle ? 'bg-slate-800 text-indigo-300 border-indigo-400/20' : 'bg-indigo-50 text-indigo-500 border-indigo-100')
                              }`}>
                                  <Brain className="w-6 h-6" weight="bold" />
                                  {showThinkingChain && <span className={`absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 ${isDiscordStyle ? 'bg-indigo-400 border-slate-900' : 'bg-indigo-500 border-white'}`} />}
                              </div>)}
                              <span className="text-xs font-bold">{showThinkingChain ? '思考已开' : '展示思考'}</span>
                            </button>

                            {/* 白框：打开该角色专属的「白框自定义 CSS」弹窗 */}
                            <button
                              onClick={() => onPanelAction('chrome-css')}
                              className={`flex flex-col items-center gap-2 active:scale-95 transition-transform ${acnh ? 'text-[#725d42]' : isDiscordStyle ? 'text-slate-200' : 'text-slate-600'}`}
                            >
                              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm border ${acnh ? 'bg-white/70 border-[#e6dab4] text-[#b77dee]' : isDiscordStyle ? 'bg-slate-800 text-pink-300 border-pink-400/20' : 'bg-pink-50 text-pink-500 border-pink-100'}`}>
                                  <PencilSimple className="w-6 h-6" weight="bold" />
                              </div>
                              <span className="text-xs font-bold">白框</span>
                            </button>
                          </div>

                          {/* 翻页指示器 */}
                          <div className="flex items-center justify-center gap-3 pb-3 -mt-2">
                            <button
                              type="button"
                              aria-label="第 1 页"
                              onClick={() => setActionsPage(0)}
                              className={`w-2 h-2 rounded-full transition-all ${actionsPage === 0 ? (isDiscordStyle ? 'bg-slate-200 w-5' : 'bg-slate-500 w-5') : (isDiscordStyle ? 'bg-slate-600' : 'bg-slate-300')}`}
                            />
                            <button
                              type="button"
                              aria-label="第 2 页"
                              onClick={() => setActionsPage(1)}
                              className={`w-2 h-2 rounded-full transition-all ${actionsPage === 1 ? (isDiscordStyle ? 'bg-slate-200 w-5' : 'bg-slate-500 w-5') : (isDiscordStyle ? 'bg-slate-600' : 'bg-slate-300')}`}
                            />
                          </div>
                        </div>
                     )}
                     {showPanel === 'chars' && (
                        <div className="p-5 space-y-6 overflow-y-auto no-scrollbar">
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 px-1 tracking-wider uppercase mb-3">气泡样式</h3>
                                <div className="flex gap-3 px-1 overflow-x-auto no-scrollbar pb-2">
                                    {Object.values(PRESET_THEMES).map(t => (
                                        <button key={t.id} onClick={() => onUpdateTheme(t.id)} className={`px-6 py-3 rounded-2xl text-xs font-bold border shrink-0 transition-all ${activeThemeId === t.id ? 'bg-primary text-white border-primary' : 'bg-white border-slate-200 text-slate-600'}`}>{t.name}</button>
                                    ))}
                                    {customThemes.map(t => (
                                        <div key={t.id} className="relative group shrink-0">
                                            <button onClick={() => onUpdateTheme(t.id)} className={`px-6 py-3 rounded-2xl text-xs font-bold border transition-all ${activeThemeId === t.id ? 'bg-indigo-500 text-white border-indigo-500' : 'bg-indigo-50 border-indigo-100 text-indigo-600'}`}>
                                                {t.name} (DIY)
                                            </button>
                                            <button onClick={(e) => { e.stopPropagation(); onRemoveTheme(t.id); }} className="absolute -top-2 -right-2 bg-red-400 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs shadow-md opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-slate-400 px-1 tracking-wider uppercase mb-3">切换会话</h3>
                                <div className="space-y-3">
                                    {characters.map(c => (
                                        <div key={c.id} onClick={() => onCharSelect(c.id)} className={`flex items-center gap-4 p-3 rounded-[20px] border cursor-pointer ${c.id === activeCharacterId ? 'bg-white border-primary/30 shadow-md' : 'bg-white/50 border-transparent'}`}>
                                            <img src={c.avatar} className="w-12 h-12 rounded-2xl object-cover" />
                                            <div className="flex-1"><div className="font-bold text-sm text-slate-700">{c.name}</div><div className="text-xs text-slate-400 truncate">{c.description}</div></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
        </>
    );
};

export default React.memo(ChatInputArea);
