import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Typography, ButtonBase, Box, Card, CardContent } from "@mui/material";
import { CustomTooltip } from "../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const WeaponCardLarge = (props) => {

    const theme = useTheme();

    let { name, type, rarity } = props.weapon;

    const width = "200px";

    const smallIcon = {
        width: "30px",
        marginTop: "5px",
        marginLeft: "1.5px",
        marginRight: "1.5px"
    }

    const weaponIcon = {
        width: width,
        borderRadius: "5px 5px 0px 0px",
        borderBottom: `1px solid ${theme.border.color}`,
        cursor: "pointer",
        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
        backgroundSize: "100%",
    }

    return (
        <Card
            sx={{
                width: width,
                mx: "auto",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <ButtonBase disableRipple href={`/project-irminsul/weapon/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <Box>
                    <Box
                        sx={{
                            width: width,
                            height: "200px",
                        }}
                    >
                        <img src={(`${process.env.REACT_APP_URL}/weapons/Weapon_${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} onError={ErrorLoadingImage} />
                    </Box>
                </Box>
            </ButtonBase>
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.materialImage.backgroundColor}`,
                    height: "100%"
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
                <CustomTooltip title={type} arrow placement="top">
                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${type.toLowerCase()}-icon.png`)} alt={type} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                    {name}
                </Typography>
            </CardContent>
        </Card >
    )

}

export default WeaponCardLarge;