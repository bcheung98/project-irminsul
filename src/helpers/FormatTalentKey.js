export const FormatTalentKey = (key) => {
    switch (key) {
        case "attack":
            key = "Normal Attack";
            break;
        case "skill":
            key = "Elemental Skill";
            break;
        case "burst":
            key = "Elemental Burst";
            break;
        case "altsprint":
            key = "Alternate Sprint";
            break;
        case "a1passive":
            key = "1st Ascension Passive";
            break;
        case "a4passive":
            key = "4th Ascension Passive";
            break;
        case "utilpassive":
            key = "Utility Passive";
            break;
        case "passive":
            key = "Passive";
            break;
        default:
            key = "Combat Talent";
    }
    return key;
}