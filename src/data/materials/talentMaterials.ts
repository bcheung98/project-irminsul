import { dropDates } from "helpers/materialDates";
import { TalentMaterial, TalentMaterialKeys } from "types/materials";

export const talentMaterials = <const>{
    Mondstadt: ["Freedom", "Resistance", "Ballad"],
    Liyue: ["Prosperity", "Diligence", "Gold"],
    Inazuma: ["Transience", "Elegance", "Light"],
    Sumeru: ["Admonition", "Ingenuity", "Praxis"],
    Fontaine: ["Equity", "Justice", "Order"],
    Natlan: ["Contention", "Kindling", "Conflict"],
};

export const talentBookNames = Object.values(talentMaterials).flat();

// Add any unreleased materials to this array
const unreleasedMats: TalentMaterialKeys[] = [];

export const filteredTalentBooks = (showUnreleased = false) => {
    if (showUnreleased) {
        return talentMaterials;
    } else {
        return Object.assign(
            {},
            ...Object.entries(talentMaterials).map(([talent, talentMats]) => {
                return {
                    [talent]: talentMats.filter(
                        (material) =>
                            !unreleasedMats.some((mat) => material === mat)
                    ),
                };
            })
        ) as typeof talentMaterials;
    }
};

export function formatTalentBooks(material: TalentMaterial) {
    let mat: TalentMaterialKeys;
    if (["1", "2", "3"].includes(material.slice(-1))) {
        mat = material.slice(0, -1) as TalentMaterialKeys;
        if (material.endsWith("1")) {
            material = "Teachings of " + mat;
        }
        if (material.endsWith("2")) {
            material = "Guide to " + mat;
        }
        if (material.endsWith("3")) {
            material = "Philosophies of " + mat;
        }
    } else {
        mat = material as TalentMaterialKeys;
    }
    const index = talentBookNames.indexOf(mat) % 3;
    return `${material} ${dropDates[index]}`;
}
