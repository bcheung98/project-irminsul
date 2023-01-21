export const MaterialDates = (day) => {
    switch (day) {
        case "Monday":
        case "Thursday":
            return {
                "talents": ["Freedom", "Prosperity", "Transience", "Admonition"],
                "weapons": ["Decarabian", "Guyun", "Sea Branch", "Forest Dew"]
            }
        case "Tuesday":
        case "Friday":
            return {
                "talents": ["Resistance", "Diligence", "Elegance", "Ingenuity"],
                "weapons": ["Boreal Wolf", "Mist Veiled Elixir", "Narukami", "Oasis Garden"]
            }
        case "Wednesday":
        case "Saturday":
            return {
                "talents": ["Ballad", "Gold", "Light", "Praxis"],
                "weapons": ["Dandelion Gladiator", "Aerosiderite", "Oni Mask", "Scorching Might"]
            }
        default:
            return {
                "talents": ["Freedom", "Resistance", "Ballad", "Prosperity", "Diligence", "Gold", "Transience", "Elegance", "Light", "Admonition", "Ingenuity", "Praxis"],
                "weapons": ["Decarabian", "Boreal Wolf", "Dandelion Gladiator", "Guyun", "Mist Veiled Elixir", "Aerosiderite", "Sea Branch", "Narukami", "Oni Mask", "Forest Dew", "Oasis Garden", "Scorching Might"]
            }
    }
}