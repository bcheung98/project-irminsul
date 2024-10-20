const fontNormal = "Roboto, sans-serif"
const fontNormalWeight = 400

const fontStyled = "Genshin, Roboto, sans-serif"
const fontStyledWeight = 300

export const legacyTheme = {
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
                    fontFamily: fontStyled,
                    backgroundColor: "rgb(0, 23, 47)",
                }
            }
        },
        MuiDialog: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(0, 23, 47)"
                }
            }
        },
        MuiDivider: {
            styleOverrides: {
                root: {
                    borderColor: "rgb(30, 73, 118)"
                }
            }
        },
        MuiMenu: {
            styleOverrides: {
                paper: {
                    backgroundColor: "rgb(0, 23, 47)"
                },
                list: {
                    backgroundColor: "rgb(0, 23, 47)",
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
        color: "rgb(30, 73, 118)",
        colorAlt: "rgb(30, 73, 118)"
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
        selected: "rgb(25, 118, 210)",
        appbar: "white",
    },
    button: {
        selected: "rgb(0, 127, 255)",
        hover: "rgb(0, 94, 188)",
    },
    menu: {
        backgroundColor: "rgb(0, 23, 47)",
        hover: "rgb(0, 46, 94)",
        selected: "rgb(0, 66, 114)",
        selectedHover: "rgb(0, 86, 134)"
    }
}