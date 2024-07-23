import { TCGSkillData } from "./TCGSkillData"

export interface TCGTalentsData {
    attack: TCGSkillData,
    skill: TCGSkillData,
    burst: TCGSkillData,
    passive?: TCGSkillData
}