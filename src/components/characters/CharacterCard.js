import * as React from "react";
import { Typography, Card, CardContent, Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
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
                <CardContent>
                    <div id="top-row">
                        <Typography sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: "white",
                            marginBottom: "10px",
                        }} variant="h5">
                            {name}
                        </Typography>
                        <div id="circle-icons" style={{
                            display: "flex",
                            position: "absolute",
                            margin: "auto",
                            marginTop: "-43px",
                            marginLeft: "225px",
                        }}>
                            <MaterialTooltip title={element} arrow placement="top">
                                <Avatar sx={{
                                    height: "35px",
                                    width: "35px"
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
                            ml: "-100px",
                        }}>
                            <Avatar variant="square" sx={{
                                margin: "auto",
                                border: "2px solid rgb(30, 73, 118)",
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
                    </Grid>
                </CardContent>
            </Card >
        </React.Fragment>
    )
}

export default CharacterCard;