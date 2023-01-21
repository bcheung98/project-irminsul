import * as React from "react";
import { StyledTableCell, StyledTableRows } from "../../helpers/StyledTable";
import { Box } from "@mui/system";
import { Typography, ButtonBase, Avatar } from "@mui/material";

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

const CharacterBannerRow = (props) => {

    let { row, index } = props;

    return (
        <React.Fragment>
            <StyledTableRows key={index} >

                { /* Version */}
                <StyledTableCell className="genshinFont">
                    <Typography>{row.version}</Typography>
                </StyledTableCell>

                { /* Banners */}
                <StyledTableCell className="genshinFont">
                    {
                        <Box sx={{ display: "flex" }}>
                            {row.banner.map((char, index) => (
                                <ButtonBase disableRipple href={`/project-irminsul/character/${char.split(" ").join("_").toLowerCase()}`} target="_blank" key={char} sx={{ m: "2px" }}>
                                    <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${char.split(" ").join("_")}_Thumb.png`)} alt={char}
                                        sx={{
                                            margin: "auto",
                                            ml: "2px",
                                            border: "1px solid rgb(30, 73, 118)",
                                            borderRadius: "5px",
                                            width: "64px",
                                            height: "64px",
                                            backgroundColor: "rgb(9, 24, 39)",
                                        }}
                                        style={CharIconBackground(index, row.banner.length)}
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