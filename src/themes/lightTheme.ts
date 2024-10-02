const fontNormal = "Roboto, sans-serif"
const fontNormalWeight = 400

const fontStyled = "Rowdies, Roboto, sans-serif"
const fontStyledWeight = 300

export const lightTheme = {
    palette: {
        background: {
            default: "white"
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    fontFamily: fontNormal,
                    fontWeight: fontNormalWeight
                }
            }
        },
        MuiAutocomplete: {
            styleOverrides: {
                noOptions: {
                    color: "white",
                    backgroundColor: "rgb(0, 23, 47)",
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "rgb(193, 159, 116)"
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    backgroundColor: "white",
                    color: "black",
                }
            }
        }
    },
    font: {
        default: {
            family: fontNormal,
            weight: fontNormalWeight
        },
        genshin: {
            family: fontStyled,
            weight: fontStyledWeight
        }
    },
    appbar: {
        backgroundColor: "rgb(0, 70, 140)",
    },
    border: {
        color: "rgb(30, 73, 118)",
        colorAlt: "rgb(193, 159, 116)"
    },
    paper: {
        backgroundColor: "rgb(225, 225, 225)",
    },
    card: {
        backgroundColor: "rgb(225, 225, 225)",
    },
    table: {
        header: {
            backgroundColor: "rgb(0, 60, 120)",
        },
        body: {
            backgroundColor: "white",
            hover: "rgb(200, 200, 200)",
        },
    },
    toolbar: {
        backgroundColor: "rgb(0, 70, 140)",
    },
    materialImage: {
        backgroundColor: "white",
    },
    text: {
        color: "black",
        colorAlt: "gray",
        selected: "rgb(25, 118, 210)",
        appbar: "white",
    },
    button: {
        selected: "rgb(0, 127, 255)",
        hover: "rgb(0, 94, 188)",
    },
    menu: {
        backgroundColor: "white",
        hover: "rgb(200, 200, 200)",
        selected: "rgb(190, 190, 190)",
        selectedHover: "rgb(175, 175, 175)"
    }
}