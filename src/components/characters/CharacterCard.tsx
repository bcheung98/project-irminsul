// Component imports
import CharacterMaterialGrid from "./CharacterMaterialGrid"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { GetRarityColor } from "../../helpers/RarityColors"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterCard(props: any) {

    const theme = useTheme()

    let { name, rarity, element, weapon } = props.character

    const characterIconBackground = {
        backgroundColor: `${theme.materialImage.backgroundColor}`,
        backgroundSize: "100%",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
        boxSizing: "content-box",
        width: "96px",
        height: "96px",

        // Comment out following line if using new icon
        // backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,

        // Comment out following line if using old icon
        borderBottom: `5px solid ${GetRarityColor(rarity)}`,

    } as React.CSSProperties

    // Old Icon: 
    // const characterIcon = `${process.env.REACT_APP_URL}/characters/icons/${name.split(" ").join("_")}.png`

    // New Icon:
    const characterIcon = `${process.env.REACT_APP_URL}/characters/avatars/${name.split(" ").join("_")}.png`

    return (
        <Card variant="outlined"
            sx={{
                width: 300,
                height: 195,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
                fontFamily: `${theme.font.genshin.family}`
            }}
        >
            <CardContent sx={{ p: 0 }}>
                <Box sx={{ display: "flex", mx: "12px", mt: "10px" }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <Typography variant="h6" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                                {name}
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Box>
                        <CustomTooltip title={element} arrow placement="top">
                            <img style={{ height: "32px" }} src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <CustomTooltip title={weapon} arrow placement="top">
                            <img style={{ height: "32px", marginLeft: "2px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`)} alt={weapon} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", mx: "10px", mt: "5px" }}>
                    <Box sx={{ mr: "15px" }}>
                        <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${props.character.name.split(" ").join("_").toLowerCase()}`} target="_blank">
                            <img src={characterIcon} alt={name} style={characterIconBackground} onError={ErrorLoadingImage} />
                        </ButtonBase>
                        <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity}
                            style={{
                                display: "block",
                                marginLeft: "auto",
                                marginRight: "auto",
                                marginTop: "5px",
                                height: "25px",
                            }}
                            onError={ErrorLoadingImage}
                        />
                    </Box>
                    <Box>
                        <CharacterMaterialGrid character={props.character} />
                    </Box>
                </Box>
            </CardContent>
        </Card >
    )

}

export default CharacterCard