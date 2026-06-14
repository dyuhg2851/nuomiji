import { CharacterProfile, UserProfile, GuidebookRound } from '../types';

// 攻略本 (Guidebook) Prompt 构建函数

/**
 * 构建开场 Prompt
 */
export function buildOpeningPrompt(
    char: CharacterProfile,
    userProfile: UserProfile,
    initialAffinity: number,
    scenarioHint: string | undefined,
    mode: 'manual' | 'auto',
    recentMsgs: string,
    guidebookInsights?: string[]
): string {
    const charName = char.name || '角色';
    const userName = userProfile.name || '用户';

    const insightsSection = guidebookInsights && guidebookInsights.length > 0
        ? `\n=== ${charName} 对 ${userName} 的了解（来自过往攻略）===\n${guidebookInsights.map(i => `• ${i}`).join('\n')}\n`
        : '';

    const systemPrompt = `你是 ${charName}，正在和 ${userName} 玩"攻略本"互动小游戏。这个游戏的目标是让你（${charName}）通过精心设计的情境选项来"攻略"${userName}，让 ${userName} 做出符合 ${charName} 心意的选择。

游戏规则：
1. 你（${charName}）是出题者，设计情境和选项
2. ${userName} 选择后，你会看到选择并做出反应
3. 根据 ${userName} 的选择，好感度会变化（+10 到 -10）
4. 游戏进行 5 轮后结束，展示结果

你的任务：
- 设计一个有趣、暧昧、有挑战性的开场情境
- 提供 3 个选项，每个选项对应不同的好感度变化
- 选项要有吸引力，让 ${userName} 想要探索
- 注意 ${charName} 的性格设定

好感度说明：初始好感度 ${initialAffinity}，范围 -100 到 +100。

${insightsSection}

=== 最近聊天记录（参考）===
${recentMsgs || '（无）'}

请以 JSON 格式返回开场内容：
{
  "segments": [
    { "speaker": "gm", "text": "（GM旁白，描述场景设定）" },
    { "speaker": "${charName}", "text": "（${charName}的开场白/动作/对话）" }
  ]
}`;

    return systemPrompt;
}

/**
 * 构建回合 Prompt（用户选择后，AI 生成角色反应）
 */
export function buildRoundPrompt(
    char: CharacterProfile,
    userProfile: UserProfile,
    currentAffinity: number,
    roundNumber: number,
    maxRounds: number,
    options: { text: string; affinity: number }[],
    previousRounds: GuidebookRound[],
    scenarioHint: string | undefined,
    recentMsgs: string,
    worldContext: string,
    nextDirectionHint: string | undefined,
    roundScenario: string | undefined
): string {
    const charName = char.name || '角色';
    const userName = userProfile.name || '用户';

    // 格式化历史回合
    const historySection = previousRounds.length > 0
        ? `\n=== 历史回合 ===\n${previousRounds.map(r => {
            const chosen = r.options[r.charChoice];
            return `第 ${r.roundNumber} 轮：
  GM旁白：${r.gmNarration}
  选项：${r.options.map((o, i) => `[${String.fromCharCode(65 + i)}] ${o.text}（好感度${o.affinity >= 0 ? '+' : ''}${o.affinity}）`).join(' | ')}
  ${charName} 选择了：${chosen?.text}
  ${charName} 的内心OS：${r.charInnerThought}
  ${charName} 的反应：${r.charReaction}`;
        }).join('\n')}\n`
        : '';

    // 格式化当前选项
    const optionsSection = options.map((o, i) =>
        `[${String.fromCharCode(65 + i)}] ${o.text}（好感度${o.affinity >= 0 ? '+' : ''}${o.affinity}）`
    ).join(' | ');

    const directionHint = nextDirectionHint
        ? `\n=== 方向提示 ===\n${nextDirectionHint}\n`
        : '';

    const scenarioHintSection = roundScenario
        ? `\n=== 本轮场景 ===\n${roundScenario}\n`
        : '';

    const prompt = `你是 ${charName}，正在和 ${userName} 玩"攻略本"互动小游戏。

当前状态：
- 回合：第 ${roundNumber} 轮（共 ${maxRounds} 轮）
- 好感度：${currentAffinity}（范围 -100 到 +100）

${scenarioHintSection}
${directionHint}
${historySection}

=== 本轮情境 ===
${worldContext || '（无世界背景）'}

=== ${userName} 的选择 ===
${optionsSection}

请以 JSON 格式返回 ${charName} 的回应：
{
  "choice": 0-2之间的数字（选择的选项索引）,
  "gmNarration": "（GM旁白，描述${charName}设计的这个情境，注意这不是${charName}自己说的话）",
  "charInnerThought": "（${charName}的内心OS，描述为什么选这个，以及对${userName}的预测/期待）",
  "charReaction": "（${charName}对这个选择的反应，可以是动作、表情、台词）"
}`;

    return prompt;
}

/**
 * 构建选项辅助 Prompt（AI 帮助设计下一轮的选项）
 */
export function buildOptionAssistPrompt(
    char: CharacterProfile,
    userProfile: UserProfile,
    currentAffinity: number,
    roundNumber: number,
    previousRounds: GuidebookRound[],
    scenarioHint: string | undefined,
    recentMsgs: string,
    worldContext: string,
    nextDirectionHint: string | undefined
): string {
    const charName = char.name || '角色';
    const userName = userProfile.name || '用户';

    // 格式化历史回合
    const historySection = previousRounds.length > 0
        ? `\n=== 历史回合 ===\n${previousRounds.map(r => {
            const chosen = r.options[r.charChoice];
            return `第 ${r.roundNumber} 轮：
  GM旁白：${r.gmNarration}
  ${charName} 的内心OS：${r.charInnerThought}
  ${charName} 的反应：${r.charReaction}
  好感度变化：${r.affinityAfter - r.affinityBefore > 0 ? '+' : ''}${r.affinityAfter - r.affinityBefore}`;
        }).join('\n')}\n`
        : '';

    const directionHint = nextDirectionHint
        ? `\n=== 方向提示 ===\n${nextDirectionHint}\n`
        : '';

    const prompt = `你是 ${charName}，正在和 ${userName} 玩"攻略本"互动小游戏。AI 助手会帮助你设计下一轮的选项。

当前状态：
- 回合：第 ${roundNumber} 轮
- 当前好感度：${currentAffinity}

${directionHint}
${historySection}

=== 世界/场景背景 ===
${worldContext || '（无）'}

=== 最近聊天 ===
${recentMsgs || '（无）'}

请根据 ${charName} 的性格和当前情境，设计 3 个有吸引力的选项，让 ${userName} 想要选择：

每个选项需要：
- 文字描述要暧昧、有趣、有挑战性
- 符合 ${charName} 的性格
- 好感度变化要合理（+5 到 +10 表示被攻略成功，-5 到 -10 表示 ${charName} 不喜欢）

请以 JSON 格式返回：
{
  "options": [
    { "text": "选项A的描述", "affinity": 数字 },
    { "text": "选项B的描述", "affinity": 数字 },
    { "text": "选项C的描述", "affinity": 数字 }
  ]
}`;

    return prompt;
}

/**
 * 构建结束卡片 Prompt
 */
export function buildEndCardPrompt(
    char: CharacterProfile,
    userProfile: UserProfile,
    initialAffinity: number,
    currentAffinity: number,
    rounds: GuidebookRound[],
    recentMsgs: string
): string {
    const charName = char.name || '角色';
    const userName = userProfile.name || '用户';

    const affinityChange = currentAffinity - initialAffinity;
    const result = affinityChange > 0 ? '攻略成功' : affinityChange < 0 ? '攻略失败' : '平局';

    // 格式化回合摘要
    const roundsSummary = rounds.map(r => {
        const chosen = r.options[r.charChoice];
        return `• 第${r.roundNumber}轮：${charName} 选择 "${chosen?.text}"，好感度 ${r.affinityAfter - r.affinityBefore >= 0 ? '+' : ''}${r.affinityAfter - r.affinityBefore}`;
    }).join('\n');

    const prompt = `你是 ${charName}，正在和 ${userName} 玩"攻略本"互动小游戏。游戏结束了！

=== 游戏结果 ===
- 初始好感度：${initialAffinity}
- 最终好感度：${currentAffinity}
- 变化：${affinityChange >= 0 ? '+' : ''}${affinityChange}
- 结果：${result}

=== 回合回顾 ===
${roundsSummary || '（无回合记录）'}

=== 最近聊天 ===
${recentMsgs || '（无）'}

请以 JSON 格式返回结束卡片内容：
{
  "verdict": "（${charName}对${userName}的最终评价/吐槽，1-2句话）",
  "title": "（总结这次攻略体验的标题，5-10个字，如'被拿捏了'、'势均力敌'等）",
  "highlights": ["（亮点1）", "（亮点2）", "（亮点3）"],
  "charSummary": "（${charName}对这次攻略的总结和感受，2-3句话）",
  "charNewInsight": "（${charName}通过这次攻略新发现的关于${userName}的一点，1句话）"
}`;

    return prompt;
}
