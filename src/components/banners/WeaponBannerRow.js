import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell } from "../../helpers/CustomTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar, TableRow } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";

const WeaponIconBackground = (index) => {
    if (index <= 1) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
            backgroundSize: "100%"
        }
    }
    else {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
            backgroundSize: "100%"
        }
    }
}

let CurrentBanner = (startDate, endDate) => {
    let today = new Date();
    if (today >= new Date(startDate) && today < new Date(endDate)) {
        return { backgroundColor: "rgb(0, 128, 225)" }
    }
}

const CharacterBannerRow = (props) => {

    const theme = useTheme();

    let { row, index } = props;

    return (
        <React.Fragment>
            <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)} >

                { /* Version */}
                <StyledTableCell>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{row.version}</Typography>
                    <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell>
                    {
                        <Box sx={{ display: "flex" }}>
                            {row.banner.map((wep, index) => (
                                <ButtonBase disableRipple href={`/project-irminsul/weapon/${wep.split(" ").join("_").toLowerCase()}`} target="_blank" key={wep} sx={{ m: "2px" }}>
                                    <CustomTooltip title={wep} arrow placement="top">
                                        <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.split(" ").join("_")}.png`)} alt={wep}
                                            sx={{
                                                margin: "auto",
                                                ml: "2px",
                                                border: `1px solid ${theme.border.color}`,
                                                borderRadius: "5px",
                                                width: "64px",
                                                height: "64px",
                                                backgroundColor: "rgb(9, 24, 39)",
                                            }}
                                            style={WeaponIconBackground(index)}
                                        />
                                    </CustomTooltip>
                                </ButtonBase>
                            ))}
                        </Box>
                    }
                </StyledTableCell>

            </TableRow>
        </React.Fragment >
    )
}

export default CharacterBannerRow;