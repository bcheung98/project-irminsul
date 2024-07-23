import { createTheme } from '@mui/material/styles';

declare module "@mui/material/styles" {
    interface Theme {
        appbar: {
            backgroundColor: string,
        },
        border: {
            color: string,
        },
        paper: {
            backgroundColor: string,
        },
        card: {
            backgroundColor: string,
        },
        table: {
            header: {
                backgroundColor: string,
            },
            body: {
                backgroundColor: string,
                hover: string,
            },
        },
        toolbar: {
            backgroundColor: string,
        },
        materialImage: {
            backgroundColor: string,
        },
        text: {
            color: string,
            colorAlt: string,
            selected: string
        },
        button: {
            selected: string,
        },
        chip: {
            color: string
        }
    }
    interface ThemeOptions {
        appbar?: {
            backgroundColor?: string,
        },
        border?: {
            color?: string,
        },
        paper?: {
            backgroundColor?: string,
        },
        card?: {
            backgroundColor?: string,
        },
        table?: {
            header?: {
                backgroundColor?: string,
            },
            body?: {
                backgroundColor?: string,
                hover?: string,
            },
        },
        toolbar?: {
            backgroundColor?: string,
        },
        materialImage?: {
            backgroundColor?: string,
        },
        text?: {
            color?: string,
            colorAlt?: string,
            selected?: string
        },
        button?: {
            selected?: string,
        },
        chip?: {
            color?: string,
        }
    }
}

export const defaultTheme = createTheme({
    components: {
        MuiAutocomplete: {
            styleOverrides: {
                noOptions: {
                    color: "white",
                    backgroundColor: "rgb(0, 23, 47)",
                    fontFamily: "Genshin, sans-serif",
                }
            }
        }
    },
    appbar: {
        backgroundColor: "rgb(0, 16, 32)",
    },
    border: {
        color: "rgb(30, 73, 118)",
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
        selected: "rgb(0, 127, 255)"
    }
});