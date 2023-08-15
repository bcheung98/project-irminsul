import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, Card, CardContent, ButtonBase, Box, Avatar } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterCardLarge = (props) => {

    const theme = useTheme();

    let { name, rarity, element, weapon } = props.character;

    const smallIcon = {
        width: "30px",
        marginTop: "5px",
        marginLeft: "1.5px",
        marginRight: "1.5px"
    }
    
    const width = "200px";

    return (
        <Card
            sx={{
                width: width,
                mx: "auto",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                zIndex: 0,
            }}
        >
            <ButtonBase disableRipple href={`/project-irminsul/character/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <Box>
                    <Box
                        sx={{
                            width: width,
                            height: "225px",
                        }}
                    >
                        <Avatar variant="square" src={`${process.env.REACT_APP_URL}/characters/wish_multi/${name.split(" ").join("_")}_Multi_Wish.png`} alt={name}
                            style={{
                                width: width,
                                height: "475px",
                                zIndex: -1,
                                backgroundColor: `${theme.card.backgroundColor}`,
                            }}
                        >
                            <img src={`${process.env.REACT_APP_URL}/characters/wish/Character_${name.split(" ").join("_")}_Wish.png`} alt={name}
                                style={{
                                    width: width,
                                    height: "400px",
                                    objectFit: "cover",
                                    objectPosition: "50% -50px",
                                }}
                                onError={ErrorLoadingImage}
                            />
                        </Avatar>
                    </Box>
                    <Box
                        sx={{
                            mt: "-55px",
                            textAlign: "center",
                            background: `linear-gradient(transparent, ${GetBackgroundColor(rarity)})`,
                            borderBottom: `7px solid ${GetRarityColor(rarity)}`,
                        }}
                    >
                        <Box sx={{ height: "55px" }} />
                    </Box>
                </Box>
            </ButtonBase>
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.materialImage.backgroundColor}`
                }}
            >
                <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity}
                    style={{
                        display: "block",
                        margin: "auto",
                        marginTop: "-5px",
                        marginBottom: "5px",
                        height: "25px",
                    }}
                    onError={ErrorLoadingImage}
                />
                <CustomTooltip title={element} arrow placement="top">
                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/elements/Element_${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <CustomTooltip title={weapon} arrow placement="top">
                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${weapon.toLowerCase()}-icon.png`)} alt={weapon} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                    {name}
                </Typography>
            </CardContent>
        </Card>
    )

}

export default CharacterCardLarge;

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

const GetBackgroundColor = (rarity, opacity = 0.45) => {
    if (rarity === 5) {
        return `rgba(255, 199, 129, ${opacity})`;
    }
    if (rarity === 4) {
        return `rgba(193, 153, 253, ${opacity})`;
    }
    if (rarity === 3) {
        return `rgba(115, 176, 244, ${opacity})`;
    }
}