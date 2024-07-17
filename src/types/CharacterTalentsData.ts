import { SkillData } from "./SkillData"

export type CharacterTalentsData = {
    attack: SkillData,
    skill: SkillData,
    burst: SkillData,
    altsprint?: SkillData,
    a1passive: SkillData,
    a4passive: SkillData,
    utilpassive: SkillData,
    passive?: SkillData
}