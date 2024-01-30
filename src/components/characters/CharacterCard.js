import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import CharacterMaterialGrid from "./CharacterMaterialGrid";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterCard = (props) => {

    const theme = useTheme();

    let { name, rarity, element, weapon } = props.character;

    const characterIconBackground = {
        margin: "auto",
        marginLeft: "2px",
        border: `1px solid ${theme.border.color}`,
        borderBottom: `5px solid ${GetRarityColor(rarity)}`,
        borderRadius: "5px",
        width: "100px",
        height: "100px",

        // Comment out following 3 lines for new icon
        // backgroundColor: "rgb(32, 32, 32)",
        // backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        // backgroundSize: "100%",

        // Comment out following 2 lines for old icon
        objectFit: "cover",
        objectPosition: "50% 20%",
    }

    return (
        <Card variant="outlined"
            sx={{
                width: 320,
                height: 195,
                mx: "auto",
                mb: "15px",
                backgroundColor: `${theme.card.backgroundColor}`,
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
                        <Typography variant="h5" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
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
                        <CustomTooltip title={element} arrow placement="top">
                            <img style={{ height: "32px", width: "32px", marginRight: "1px" }} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <CustomTooltip title={weapon} arrow placement="top">
                            <img style={{ height: "36px", width: "36px", marginTop: "-2px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/Icon_${weapon}.png`)} alt={weapon} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    </Box>
                </Box>
                <Grid container sx={{ mt: "10px" }}>
                    <Grid xs>
                        <Box sx={{ width: "105px" }}>
                            <ButtonBase disableRipple href={`/project-irminsul/character/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                                {/* Old Icon */}
                                {/* <img src={(`${process.env.REACT_APP_URL}/characters/thumbs/Character_${name.split(" ").join("_")}_Thumb.png`)} alt={name} style={characterIconBackground} onError={ErrorLoadingImage} /> */}
                                {/* New Icon */}
                                <img src={`${process.env.REACT_APP_URL}/characters/wish_multi/${name.split(" ").join("_")}_Multi_Wish.png`} alt={name} style={characterIconBackground} onError={ErrorLoadingImage} />
                            </ButtonBase>
                            <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity}
                                style={{
                                    display: "block",
                                    margin: "auto",
                                    marginTop: "5px",
                                    height: "25px",
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </Box>
                    </Grid>
                    <Grid xs={7.5}>
                        <CharacterMaterialGrid character={props.character} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card >
    )

}

export default CharacterCard;

const GetRarityColor = (rarity) => {
    if (rarity === 5) {
        return "rgb(255, 208, 112)";
    }
    if (rarity === 4) {
        return "rgb(175, 134, 255)";
    }
    if (rarity === 3) {
        return "rgb(105, 157, 237)";
    }
}