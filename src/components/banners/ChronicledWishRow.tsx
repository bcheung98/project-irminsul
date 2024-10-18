// Component imports
import CustomCard from "../_custom/CustomCard"
import { StyledTableCellNoVert } from "../_custom/CustomTable"

// MUI imports
import { useTheme, Typography, TableRow } from "@mui/material"
import Grid from "@mui/material/Grid2"

// Helper imports
import { createDateObject, isCurrentBanner } from "../../helpers/dates"
import { isTBA } from "./BannerList"

function ChronicledWishRow(props: any) {

    const theme = useTheme()

    let { version, subVersion, characters, weapons } = props.row

    let start = createDateObject(props.row.start)
    let end = createDateObject(props.row.end)

    return (
        <TableRow sx={{ backgroundColor: isCurrentBanner(start.obj, end.obj) ? `${theme.button.selected}` : "none" }}>
            <StyledTableCellNoVert sx={{ py: "10px" }}>
                <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, textAlign: "left", mb: "10px" }}>
                    {`${version} Phase ${subVersion.split(".")[2]}: ${start.date} — ${end.date}`}
                </Typography>
                { /* Characters */}
                <Grid container spacing={0.75}>
                    {characters.fiveStars.map((char: string, index: number) => <CustomCard key={index} type="character" name={char} rarity={!isTBA(char) ? 5 : 1} disableLink={isTBA(char)} />)}
                    {characters.fourStars.map((char: string, index: number) => <CustomCard key={index} type="character" name={char} rarity={!isTBA(char) ? 4 : 1} disableLink={isTBA(char)} />)}
                </Grid>
                <hr style={{ border: `0.75px solid ${theme.border.color}`, margin: "15px 0px 15px 0px" }} />
                { /* Weapons */}
                <Grid container spacing={0.75}>
                    {weapons.fiveStars.map((wep: string, index: number) => <CustomCard key={index} type="weapon" name={wep} rarity={!isTBA(wep) ? 5 : 1} disableLink={isTBA(wep)} />)}
                    {weapons.fourStars.map((wep: string, index: number) => <CustomCard key={index} type="weapon" name={wep} rarity={!isTBA(wep) ? 4 : 1} disableLink={isTBA(wep)} />)}
                </Grid>
            </StyledTableCellNoVert>
        </TableRow>
    )

}

export default ChronicledWishRow