import * as React from "react";
import { Typography, Card, CardContent, Avatar, ButtonBase } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterMaterialGrid from "./CharacterMaterialGrid";
import { MaterialTooltip } from "../../helpers/MaterialTooltip";

const CharacterCard = (props) => {

    let { name, rarity, element, weapon } = props.character;
    const characterIconBackground = {
        backgroundImage: "url(" + require(`../../assets/backgrounds/Background_${rarity}_Star.png`) + ")",
        backgroundSize: "100%"
    }

    return (
        <React.Fragment>
            <Card variant="outlined" sx={{
                width: 325,
                height: 200,
                margin: "auto",
                mb: "18px",
                backgroundColor: "rgb(0, 30, 60)",
                border: "1px solid rgb(30, 73, 118)",
                borderRadius: "5px",
                fontFamily: "Genshin, sans-serif"
            }}>
                <CardContent sx={{
                    mt: "-8px",
                }}>
                    <div id="top-row">
                        <Typography sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: "white",
                            ml: "-5px",
                        }} variant="h5">
                            {name}
                        </Typography>
                        <div id="circle-icons" style={{
                            display: "flex",
                            position: "relative",
                            marginTop: "-35px",
                            marginBottom: "5px",
                            marginLeft: "225px",
                        }}>
                            <MaterialTooltip title={element} arrow placement="top">
                                <Avatar sx={{
                                    height: "35px",
                                    width: "35px",
                                }} src={require(`../../assets/elements/Element_${element}.png`)} alt={element} />
                            </MaterialTooltip>
                            <MaterialTooltip title={weapon} arrow placement="top">
                                <Avatar sx={{
                                    height: "35px",
                                    width: "35px"
                                }} src={require(`../../assets/weapons/Weapon-class-${weapon.toLowerCase()}-icon.png`)} alt={weapon} />
                            </MaterialTooltip>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs sx={{
                            marginTop: "5px",
                            marginLeft: "-40px",
                            width: "100px",
                        }}>
                            <Avatar variant="square" sx={{
                                margin: "auto",
                                border: "1px solid rgb(30, 73, 118)",
                                borderRadius: "5px",
                                width: '90px',
                                height: '90px',
                                backgroundColor: "rgb(32, 32, 32)",
                            }} src={require(`../../assets/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`)} alt={name} style={characterIconBackground} />
                            <img style={{
                                display: "block",
                                height: "25px",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "2px",
                            }} src={require(`../../assets/stars/Icon_${rarity}_Stars.png`)} alt={rarity} />
                        </Grid>
                        <CharacterMaterialGrid character={props.character} imageSize="48px" margin="-30px" />
                    </Grid>
                    <ButtonBase disableRipple href={`/project-irminsul/character/${props.character.name.split(" ").join("_").toLowerCase()}`}>
                        <Typography sx={{
                            fontFamily: "Genshin, sans-serif",
                            fontSize: "9pt",
                            color: "rgb(10, 155, 201)",
                            ml: "1px",
                            mt: "5px",
                        }}>
                            MORE INFO
                        </Typography>
                    </ButtonBase>
                </CardContent>
            </Card >
        </React.Fragment >
    )
}

export default CharacterCard;