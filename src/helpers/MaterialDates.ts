import { TalentBooks, WepAscensionMats } from "./MaterialList"

export function MaterialDates(day: string) {

    const talents = Object.values(TalentBooks).flat()
    const weapons = Object.values(WepAscensionMats).flat()

    switch (day) {
        case "Monday":
        case "Thursday":
            return {
                "talents": GetMaterials(talents, 0),
                "weapons": GetMaterials(weapons, 0)
            }
        case "Tuesday":
        case "Friday":
            return {
                "talents": GetMaterials(talents, 1),
                "weapons": GetMaterials(weapons, 1)
            }
        case "Wednesday":
        case "Saturday":
            return {
                "talents": GetMaterials(talents, 2),
                "weapons": GetMaterials(weapons, 2)
            }
        default:
            return {
                "talents": talents,
                "weapons": weapons
            }
    }

}

export const GetMaterials = (arr: string[], start: number) => {
    let output = [] as string[]
    for (let i = start; i < arr.length; i += 3) {
        output.push(arr[i])
    }
    return output
}