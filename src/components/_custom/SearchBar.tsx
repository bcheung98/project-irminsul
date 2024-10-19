import React from "react"
import { useTheme, TextField } from "@mui/material"

interface SearchBarProps {
    onChange?: (event: React.BaseSyntheticEvent) => void,
    placeholder?: string,
    size?: {
        width?: string,
        height?: string
    },
    params?: any
}

function SearchBar({
    onChange,
    placeholder = "Search",
    size = {
        width: "100%",
        height: "100%"
    },
    params,
}: SearchBarProps) {

    const theme = useTheme()

    return (
        <TextField
            {...params}
            sx={{
                "& .MuiOutlinedInput-root": {
                    width: size.width,
                    height: size.height,
                    backgroundColor: `${theme.table.header.backgroundColor}`,
                    color: `${theme.text.color}`,
                    fontFamily: `${theme.font.genshin.family}`,
                    "& fieldset": {
                        borderColor: `${theme.border.color}`,
                        borderWidth: "1px",
                        borderRadius: "5px",
                    },
                    "&:hover fieldset": {
                        borderColor: `${theme.button.selected}`,
                    },
                    "&.Mui-focused fieldset": {
                        borderColor: `${theme.button.selected}`,
                    },
                },
                "& .MuiButtonBase-root": {
                    color: `${theme.text.color}`,
                }
            }}
            onChange={onChange}
            placeholder={placeholder}
            fullWidth
        />
    )

}

export default SearchBar