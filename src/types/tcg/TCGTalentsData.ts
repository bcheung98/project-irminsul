import { TCGSkillData } from "./TCGSkillData"

export type TCGTalentsData = {
    attack: TCGSkillData,
    skill: TCGSkillData,
    burst: TCGSkillData,
    passive?: TCGSkillData
}