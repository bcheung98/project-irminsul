// Component imports
import CustomCard from "../_custom/CustomCard"
import { StyledTableCellNoVert } from "../_custom/CustomTable"

// MUI imports
import { useTheme, Typography, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import { isTBA } from "./BannerList"

function WeaponBannerRow(props: any) {

    const theme = useTheme()

    let { version, subVersion, fiveStars, fourStars } = props.row

    let start = createDateObject(props.row.start)
    let end = createDateObject(props.row.end)

    return (
        <TableRow sx={{ backgroundColor: isCurrentBanner(start.obj, end.obj) ? `${theme.button.selected}` : "none" }}>
            <StyledTableCellNoVert sx={{ py: "10px" }}>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, textAlign: "left", mb: "10px" }}>
                    {`${version} Phase ${subVersion.split(".")[2]}: ${start.date} — ${end.date}`}
                </Typography>
                {
                    <Grid container spacing={0.75}>
                        {fiveStars.map((wep: string, index: number) => <CustomCard key={index} type="weapon" name={wep} rarity={!isTBA(wep) ? 5 : 1} disableLink={isTBA(wep)} />)}
                        {fourStars.map((wep: string, index: number) => <CustomCard key={index} type="weapon" name={wep} rarity={!isTBA(wep) ? 4 : 1} disableLink={isTBA(wep)} />)}
                    </Grid>
                }
            </StyledTableCellNoVert>
        </TableRow>
    )
}

export default WeaponBannerRow