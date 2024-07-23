export function FormatTCGTalentKey(key: string) {
    switch (key) {
        case "attack":
        case "attack2":
            key = "Normal Attack"
            break
        case "skill":
        case "skill2":
            key = "Elemental Skill"
            break
        case "burst":
            key = "Elemental Burst"
            break
        case "passive":
            key = "Passive"
            break
        default:
            key = "Combat Talent"
    }
    return key
}