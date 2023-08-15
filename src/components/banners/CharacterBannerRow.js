import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { StyledTableCell } from "../../helpers/CustomTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar, TableRow } from "@mui/material";

const CharIconBackground = (index, len) => {
    if (index === 0 && len === 4) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
            backgroundSize: "100%"
        }
    }
    if (index <= 1 && len === 5) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_5_Star.png)`,
            backgroundSize: "100%"
        }
    }
    if (index !== 0 && len === 4) {
        return {
            backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_4_Star.png)`,
            backgroundSize: "100%"
        }
    }
    if (index >= 2 && len === 5) {
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
            <TableRow key={index} sx={CurrentBanner(row.startDate, row.endDate)}>

                { /* Version */}
                <StyledTableCell>
                    <Typography sx={{ fontFamily: "Genshin, sans-serif" }}>{row.version}</Typography>
                    <Typography variant="body2">{row.startDate} — {row.endDate}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell>
                    {
                        <Box sx={{ display: "flex" }}>
                            {row.banner.map((char, index) => (
                                <ButtonBase disableRipple href={`/project-irminsul/character/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                    <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.split(" ").join("_")}_Thumb.png`)} alt={char}
                                        sx={{
                                            margin: "auto",
                                            ml: "2px",
                                            border: `1px solid ${theme.border.color}`,
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: `${theme.materialImage.backgroundColor}`,
                                        }}
                                        style={CharIconBackground(index, row.banner.length)}
                                    />
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