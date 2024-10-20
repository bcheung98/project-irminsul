// Component imports
import CharacterMaterialGrid from "./CharacterMaterialGrid"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../_custom/CustomTooltip"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"
import CustomCard from "../_custom/CustomCard"

function CharacterCard(props: any) {

    const theme = useTheme()

    let { name, rarity, element, weapon } = props.character

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
                            <Typography sx={{ fontFamily: `${theme.font.genshin.family}`, fontSize: "20px", color: `${theme.text.color}` }}>
                                {name}
                            </Typography>
                        </ButtonBase>
                    </Box>
                    <Box>
                        <CustomTooltip title={element} arrow placement="top">
                            <img style={{ height: "32px" }} src={`${process.env.REACT_APP_URL}/elements/${element}.png`} alt={element} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                        <CustomTooltip title={weapon} arrow placement="top">
                            <img style={{ height: "32px", marginLeft: "2px" }} src={`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`} alt={weapon} onError={ErrorLoadingImage} />
                        </CustomTooltip>
                    </Box>
                </Box>
                <Box sx={{ display: "flex", mx: "10px", mt: "5px" }}>
                    <Box sx={{ mr: "10px" }}>
                        <CustomCard name={name} type="character" rarity={rarity} size="96px" variant="avatar" />
                        <img src={`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`} alt={rarity}
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
                        <CharacterMaterialGrid element={element} materials={props.character.materials} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    )

}

export default CharacterCard