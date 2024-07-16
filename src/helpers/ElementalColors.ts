export const ElementalBorderColor = (element?: string | undefined) => {
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

export const SwitchColor = (element?: string | undefined) => {
    switch (element) {
        case "Pyro":
            return "#ad0000"
        case "Hydro":
            return "#204eb3"
        case "Electro":
            return "#8216a3"
        case "Cryo":
            return "#4492aa"
        case "Anemo":
            return "#1aa577"
        case "Geo":
            return "#91712e"
        case "Dendro":
            return "#5a8f10"
        default:
            return "#gray"
    }
}

export const SliderColor = (element?: string | undefined) => {
    switch (element) {
        case "Pyro":
            return "#ad0000"
        case "Hydro":
            return "#204eb3"
        case "Electro":
            return "#8216a3"
        case "Cryo":
            return "#4492aa"
        case "Anemo":
            return "#1aa577"
        case "Geo":
            return "#91712e"
        case "Dendro":
            return "#5a8f10"
        default:
            return "#1976d2"
    }
}