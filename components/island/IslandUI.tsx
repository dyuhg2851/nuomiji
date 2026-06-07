/**
 * Island UI —— "无人岛/慢生活"风格的轻量组件套件（自建，零额外打包体积）。
 *
 * 设计 token 取自 animal-island 系列（Flutter `animal_theme.dart` + React 库的
 * `:root --animal-*`），用 Tailwind/内联样式在 SullyOS 里重新实现，不引第三方依赖。
 * 招牌特征：暖米色羊皮纸底、青绿主色、棕字、圆角、以及 primary 按钮的
 * "3D 像素堆叠"触感阴影（按下去会沉一下）。
 *
 * 纯内联样式实现交互态（按压/聚焦），不依赖 Tailwind 任意值生成，渲染稳。
 */
import React, { useState } from 'react';

export const ISLAND = {
    primary: '#19C8B9', primaryHover: '#3DD4C6', primaryActive: '#50B9AB',
    primarySolid: '#0CC0B5', primaryBg: '#E6F9F6', primaryShadow: '#12A89B',
    success: '#6FBA2C', warning: '#F5C31C', error: '#E05A5A',
    text: '#794F27', subText: '#9F927D', disabledText: '#C4B89E',
    border: '#AAA69D', borderHover: '#827157', lightBorder: '#E8E2D6',
    bg: '#F8F8F0', contentBg: '#F7F3DF', elevatedBg: '#FFF8D6', subtleBg: '#FFFDF7',
    shadow: '#3D3428',
    radiusSm: 16, radius: 18, radiusLg: 24,
    fontStack: `'Nunito','Noto Sans SC','PingFang SC','Microsoft YaHei',sans-serif`,
} as const;

type BtnType = 'primary' | 'default' | 'text';
type BtnSize = 'small' | 'middle' | 'large';

interface IslandButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
    type?: BtnType;
    size?: BtnSize;
    block?: boolean;
    icon?: React.ReactNode;
}

/** 岛屿风按钮：primary 带 3D 触感阴影，按下沉一格。 */
export const IslandButton: React.FC<IslandButtonProps> = ({
    type = 'default', size = 'middle', block, icon, children, disabled, style, ...rest
}) => {
    const [pressed, setPressed] = useState(false);
    const h = size === 'small' ? 32 : size === 'large' ? 48 : 40;
    const padX = size === 'small' ? 14 : size === 'large' ? 24 : 18;
    const fs = size === 'small' ? 13 : size === 'large' ? 16 : 14;

    const pal = type === 'primary'
        ? { bg: ISLAND.primary, bd: ISLAND.primarySolid, fg: '#fff', sh: ISLAND.primaryShadow }
        : { bg: ISLAND.subtleBg, bd: ISLAND.border, fg: ISLAND.text, sh: ISLAND.lightBorder };
    const flat = type === 'text';
    const down = pressed && !disabled;

    const press = disabled ? {} : {
        onPointerDown: () => setPressed(true),
        onPointerUp: () => setPressed(false),
        onPointerLeave: () => setPressed(false),
        onPointerCancel: () => setPressed(false),
    };

    return (
        <button {...rest} {...press} disabled={disabled}
            style={{
                display: block ? 'flex' : 'inline-flex', width: block ? '100%' : undefined,
                alignItems: 'center', justifyContent: 'center', gap: 6,
                height: h, padding: `0 ${padX}px`, fontSize: fs, fontWeight: 800,
                fontFamily: ISLAND.fontStack, lineHeight: 1, whiteSpace: 'nowrap',
                borderRadius: 999, cursor: disabled ? 'not-allowed' : 'pointer',
                border: `2px solid ${flat ? 'transparent' : pal.bd}`,
                background: flat ? 'transparent' : pal.bg,
                color: flat ? ISLAND.text : pal.fg,
                boxShadow: flat ? 'none' : (down ? `0 1px 0 ${pal.sh}` : `0 4px 0 ${pal.sh}`),
                transform: down ? 'translateY(3px)' : 'none',
                transition: 'transform .08s ease, box-shadow .08s ease, background .15s ease, border-color .15s ease',
                opacity: disabled ? 0.5 : 1,
                ...style,
            }}>
            {icon}{children}
        </button>
    );
};

interface IslandInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
    allowClear?: boolean;
    onClear?: () => void;
}

/** 岛屿风输入框：羊皮纸底、棕字、聚焦描边转青绿。 */
export const IslandInput: React.FC<IslandInputProps> = ({ allowClear, onClear, style, value, onChange, ...rest }) => {
    const [focus, setFocus] = useState(false);
    const showClear = allowClear && !!value;
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <input {...rest} value={value} onChange={onChange}
                onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
                onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
                style={{
                    width: '100%', height: 40, padding: showClear ? '0 34px 0 14px' : '0 14px',
                    fontSize: 14, fontFamily: ISLAND.fontStack, color: ISLAND.text,
                    background: ISLAND.subtleBg, borderRadius: ISLAND.radiusSm,
                    border: `2px solid ${focus ? ISLAND.primary : ISLAND.border}`,
                    outline: 'none', transition: 'border-color .15s ease',
                    ...style,
                }} />
            {showClear && (
                <button type="button" onClick={onClear}
                    style={{
                        position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)',
                        width: 18, height: 18, borderRadius: 999, border: 'none', cursor: 'pointer',
                        background: ISLAND.border, color: '#fff', fontSize: 11, lineHeight: '18px',
                    }}>×</button>
            )}
        </div>
    );
};

export interface IslandSelectOption { key: string; label: React.ReactNode; }
interface IslandSelectProps {
    value: string;
    onChange: (key: string) => void;
    options: IslandSelectOption[];
    placeholder?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

/** 岛屿风下拉选择：原生 select 套羊皮纸皮，右侧自带小箭头。 */
export const IslandSelect: React.FC<IslandSelectProps> = ({ value, onChange, options, placeholder, disabled, style }) => {
    const [focus, setFocus] = useState(false);
    return (
        <div style={{ position: 'relative', width: '100%' }}>
            <select value={value} disabled={disabled}
                onChange={(e) => onChange(e.target.value)}
                onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
                style={{
                    width: '100%', height: 40, padding: '0 34px 0 14px', fontSize: 14,
                    fontFamily: ISLAND.fontStack, fontWeight: 700, color: ISLAND.text,
                    background: ISLAND.subtleBg, borderRadius: ISLAND.radiusSm,
                    border: `2px solid ${focus ? ISLAND.primary : ISLAND.border}`,
                    outline: 'none', appearance: 'none', WebkitAppearance: 'none', MozAppearance: 'none',
                    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
                    transition: 'border-color .15s ease', ...style,
                }}>
                {placeholder && <option value="" disabled hidden>{placeholder}</option>}
                {options.map(o => (
                    <option key={o.key} value={o.key}>{typeof o.label === 'string' ? o.label : o.key}</option>
                ))}
            </select>
            <span style={{
                position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                pointerEvents: 'none', color: ISLAND.subText, fontSize: 11,
            }}>▾</span>
        </div>
    );
};

/** 岛屿风羊皮纸卡片。 */
export const IslandCard: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, style, ...rest }) => (
    <div {...rest} style={{
        background: ISLAND.contentBg, border: `2px solid ${ISLAND.lightBorder}`,
        borderRadius: ISLAND.radiusLg, boxShadow: `0 8px 24px ${ISLAND.shadow}24`,
        color: ISLAND.text, fontFamily: ISLAND.fontStack, padding: 16, ...style,
    }}>{children}</div>
);

interface IslandModalProps {
    open: boolean;
    title?: React.ReactNode;
    width?: number;
    maskClosable?: boolean;
    footer?: React.ReactNode | null;
    onClose?: () => void;
    children?: React.ReactNode;
}

/**
 * 岛屿风弹窗：羊皮纸异形卡（大圆角 + 粗描边 + 顶部缎带标题），整体上浮动画。
 * 不是原库那种 SVG blob 异形（会裁掉表单内容），取其神：圆润、暖、有缎带。
 */
export const IslandModal: React.FC<IslandModalProps> = ({ open, title, width = 340, maskClosable = true, footer, onClose, children }) => {
    if (!open) return null;
    return (
        <div onClick={() => maskClosable && onClose?.()}
            style={{
                position: 'fixed', inset: 0, zIndex: 320, display: 'flex',
                alignItems: 'center', justifyContent: 'center', padding: 24,
                background: 'rgba(34,27,16,.5)', backdropFilter: 'blur(4px)',
            }}>
            <div onClick={(e) => e.stopPropagation()}
                style={{
                    width: '100%', maxWidth: width, position: 'relative',
                    background: ISLAND.contentBg, color: ISLAND.text, fontFamily: ISLAND.fontStack,
                    border: `2px solid ${ISLAND.border}`, borderRadius: 26,
                    boxShadow: `0 14px 40px ${ISLAND.shadow}55, 0 4px 0 ${ISLAND.lightBorder}`,
                    padding: 18, paddingTop: title ? 30 : 18,
                    animation: 'islandPop .22s cubic-bezier(.34,1.56,.64,1)',
                }}>
                <style>{`@keyframes islandPop{from{opacity:0;transform:translateY(10px) scale(.96)}to{opacity:1;transform:none}}`}</style>
                {title && (
                    <div style={{
                        position: 'absolute', top: -16, left: '50%', transform: 'translateX(-50%)',
                        padding: '5px 22px', background: ISLAND.primary, color: '#fff',
                        fontWeight: 800, fontSize: 14, whiteSpace: 'nowrap',
                        borderRadius: 999, border: `2px solid ${ISLAND.primarySolid}`,
                        boxShadow: `0 3px 0 ${ISLAND.primaryShadow}`,
                    }}>{title}</div>
                )}
                <div>{children}</div>
                {footer === null ? null : footer !== undefined ? (
                    <div style={{ marginTop: 16 }}>{footer}</div>
                ) : (
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 16 }}>
                        <IslandButton onClick={onClose}>取消</IslandButton>
                    </div>
                )}
            </div>
        </div>
    );
};
