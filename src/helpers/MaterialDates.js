export const MaterialDates = (day) => {

    const talents = ["Freedom", "Resistance", "Ballad", "Prosperity", "Diligence", "Gold", "Transience", "Elegance", "Light", "Admonition", "Ingenuity", "Praxis", "Equity", "Justice", "Order"];
    const weapons = ["Decarabian", "Boreal Wolf", "Dandelion Gladiator", "Guyun", "Mist Veiled Elixir", "Aerosiderite", "Sea Branch", "Narukami", "Oni Mask", "Forest Dew", "Oasis Garden", "Scorching Might", "Chord", "Dewdrop", "Pristine Sea"];

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

const GetMaterials = (arr, start) => {
    let output = [];
    for (let i = start; i < arr.length; i += 3) {
        output.push(arr[i])
    }
    return output
}