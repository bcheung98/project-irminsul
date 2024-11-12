export interface Skill {
    name: string,
    description: string,
    splash?: string
}

export interface SkillWithScaling extends Skill {
    scaling: string[][]
}