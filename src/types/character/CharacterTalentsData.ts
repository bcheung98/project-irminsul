import { SkillData } from "../SkillData"

export interface CharacterTalentsData {
    attack: SkillData,
    skill: SkillData,
    burst: SkillData,
    altsprint?: SkillData,
    a1passive: SkillData,
    a4passive: SkillData,
    nightsoulpassive?: SkillData,
    utilpassive: SkillData,
    passive?: SkillData
}