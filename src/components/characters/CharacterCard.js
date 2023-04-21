import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, Avatar, ButtonBase, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterMaterialGrid from "./CharacterMaterialGrid";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";

const CharacterCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, weapon } = props.character;
    const characterIconBackground = {
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%"
    }

    return (
        <React.Fragment>
            <Card variant="outlined"
                sx={{
                    width: 320,
                    height: 185,
                    mx: "auto",
                    my: "10px",
                    backgroundColor: `${theme.paper.backgroundColor}`,
                    border: `1px solid ${theme.border.color}`,
                    borderRadius: "5px",
                    fontFamily: "Genshin, sans-serif"
                }}
            >
                <CardContent sx={{ py: "10px" }}>
                    <Box
                        sx={{
                            display: "flex",
                            position: "relative"
                        }}
                    >
                        <ButtonBase disableRipple href={`/project-irminsul/character/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <Typography sx={{
                                fontFamily: "Genshin, sans-serif",
                                color: `${theme.text.color}`,
                            }} variant="h5">
                                {name}
                            </Typography>
                        </ButtonBase>
                        <Box
                            sx={{
                                display: "flex",
                                position: "absolute",
                                right: "-5px"
                            }}
                        >
                            <MaterialTooltip title={element} arrow placement="top">
                                <Avatar sx={{ height: "30px", width: "30px" }} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} />
                            </MaterialTooltip>
                            <MaterialTooltip title={weapon} arrow placement="top">
                                <Avatar sx={{ height: "30px", width: "30px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${weapon.toLowerCase()}-icon.png`)} alt={weapon} />
                            </MaterialTooltip>
                        </Box>
                    </Box>
                    <Grid container sx={{ mt: "10px" }}>
                        <Grid xs>
                            <ButtonBase disableRipple href={`/project-irminsul/character/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                <Avatar variant="square" src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`)} alt={name}
                                    style={characterIconBackground}
                                    sx={{
                                        margin: "auto",
                                        ml: "2px",
                                        border: "1px solid rgb(30, 73, 118)",
                                        borderRadius: "5px",
                                        width: "90px",
                                        height: "90px",
                                        backgroundColor: "rgb(32, 32, 32)",
                                    }}
                                />
                            </ButtonBase>
                            <img style={{
                                display: "block",
                                margin: "auto",
                                marginTop: "5px",
                                height: "25px",
                            }} src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                        </Grid>
                        <Grid xs={8}>
                            <CharacterMaterialGrid character={props.character} />
                        </Grid>
                    </Grid>
                </CardContent>
            </Card >
        </React.Fragment >
    )
    
}

export default CharacterCard;