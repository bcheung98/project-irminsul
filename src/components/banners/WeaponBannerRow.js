import * as React from "react";
import { StyledTableCell, StyledTableRows } from "../../helpers/StyledTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar } from "@mui/material";

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

const CharacterBannerRow = (props) => {

    let { row, index } = props;

    return (
        <React.Fragment>
            <StyledTableRows key={index} >

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
                                    <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${wep.split(" ").join("_")}.png`)} alt={wep}
                                        sx={{
                                            margin: "auto",
                                            ml: "2px",
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: "rgb(9, 24, 39)",
                                        }}
                                        style={WeaponIconBackground(index)}
                                    />
                                </ButtonBase>
                            ))}
                        </Box>
                    }
                </StyledTableCell>

            </StyledTableRows>
        </React.Fragment >
    )
}

export default CharacterBannerRow;