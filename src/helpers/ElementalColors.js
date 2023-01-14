export const ElementalBorderColor = (element) => {
    switch (element) {
        case "Pyro":
            return { borderColor: "#ad0000" }
        case "Hydro":
            return { borderColor: "#204eb3" }
        case "Electro":
            return { borderColor: "#8216a3" }
        case "Cryo":
            return { borderColor: "#4492aa" }
        case "Anemo":
            return { borderColor: "#1aa577" }
        case "Geo":
            return { borderColor: "#91712e" }
        case "Dendro":
            return { borderColor: "#5a8f10" }
        default:
            return { borderColor: "gray" }
    }
}