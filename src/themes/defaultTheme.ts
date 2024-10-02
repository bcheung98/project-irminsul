const fontNormal = "Roboto, sans-serif"
const fontNormalWeight = 400

const fontStyled = "Rowdies, Roboto, sans-serif"
const fontStyledWeight = 300

export const defaultTheme = {
    palette: {
        background: {
            default: "rgb(0, 30, 60)"
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
                    backgroundColor: "rgb(32, 32, 32)",
                    color: "white",
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
        backgroundColor: "rgb(0, 16, 32)",
    },
    border: {
        color: "rgb(193, 159, 116)",
        colorAlt: "rgb(193, 159, 116)"
    },
    paper: {
        backgroundColor: "rgb(0, 23, 47)",
    },
    card: {
        backgroundColor: "rgb(0, 23, 47)",
    },
    table: {
        header: {
            backgroundColor: "rgb(0, 20, 40)",
        },
        body: {
            backgroundColor: "rgb(0, 30, 60)",
            hover: "rgb(19, 47, 76)",
        },
    },
    toolbar: {
        backgroundColor: "rgb(0, 16, 32)",
    },
    materialImage: {
        backgroundColor: "rgb(0, 30, 60)",
    },
    text: {
        color: "white",
        colorAlt: "rgb(218, 219, 222)",
        selected: "rgb(25, 118, 210)"
    },
    button: {
        selected: "rgb(0, 127, 255)",
        hover: "rgb(0, 94, 188)",
    },
    menu: {
        backgroundColor: "rgb(32, 32, 32)",
        hover: "rgb(64, 64, 64)",
        selected: "rgb(80, 80, 80)",
        selectedHover: "rgb(96, 96, 96)"
    }
}