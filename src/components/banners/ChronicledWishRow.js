import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell } from "../../helpers/CustomTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, TableRow } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

let CurrentBanner = (startDate, endDate) => {
    let today = new Date();
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: "rgb(0, 128, 225)" }
    }
}

const ChronicledWishRow = (props) => {

    const theme = useTheme();

    let { row, index } = props;

    return (
        <React.Fragment>
            <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)}>

                { /* Version */}
                <StyledTableCell>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{row.version}</Typography>
                    <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell>

                    { /* 5-Star Characters */}
                    <Box sx={{ display: "flex" }}>
                        {
                            row.banner.characters.fiveStars.map((char) => (
                                <ButtonBase disableRipple href={`/project-irminsul/character/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                    <CustomTooltip title={char} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.split(" ").join("_")}_Thumb.png`)} alt={char}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
                                                backgroundSize: "100%"
                                            }}
                                            onError={ErrorLoadingImage}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))
                        }
                    </Box>

                    { /* 4-Star Characters */}
                    <Box sx={{ display: "flex" }}>
                        {
                            row.banner.characters.fourStars.map((char) => (
                                <ButtonBase disableRipple href={`/project-irminsul/character/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                    <CustomTooltip title={char} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.split(" ").join("_")}_Thumb.png`)} alt={char}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
                                                backgroundSize: "100%"
                                            }}
                                            onError={ErrorLoadingImage}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))
                        }
                    </Box>

                    <hr style={{ border: `0.5px solid ${theme.border.color}`, margin: "15px 0px 15px 0px" }} />

                    { /* 5-Star Weapons */}
                    <Box sx={{ display: "flex" }}>
                        {
                            row.banner.weapons.fiveStars.map((wep) => (
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                    <CustomTooltip title={wep} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.split(" ").join("_")}.png`)} alt={wep}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
                                                backgroundSize: "100%"
                                            }}
                                            onError={ErrorLoadingImage}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))
                        }
                    </Box>

                    { /* 4-Star Weapons */}
                    <Box sx={{ display: "flex" }}>
                        {
                            row.banner.weapons.fourStars.map((wep) => (
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                    <CustomTooltip title={wep} arrow placement="top">
                                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.split(" ").join("_")}.png`)} alt={wep}
                                            style={{
                                                margin: "auto",
                                                marginLeft: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: `${theme.materialImage.backgroundColor}`,
                                                backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
                                                backgroundSize: "100%"
                                            }}
                                            onError={ErrorLoadingImage}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))
                        }
                    </Box>
                </StyledTableCell>

            </TableRow>
        </React.Fragment>
    )

}

export default ChronicledWishRow;