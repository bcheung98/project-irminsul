import { useTheme } from "@mui/material"

export function CurrentBanner(startDate: string, endDate: string) {

    const theme = useTheme()

    let today = new Date()
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: `${theme.button.selected}` }
    }
}