// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, ButtonBase, Box } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../_custom/CustomTooltip"
import { GetRarityColor, GetBackgroundColor } from "../../helpers/RarityColors"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterCardLarge(props: any) {

    const theme = useTheme()

    let { name, rarity, element, weapon } = props.character

    const size = "150px"

    return (
        <Card
            sx={{
                position: "relative",
                zIndex: 0,
                width: size,
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <img src={`${process.env.REACT_APP_URL}/characters/avatars/${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        position: "relative",
                        zIndex: -1,
                        width: size,
                        height: size,
                        cursor: "pointer",
                    }}
                    onError={ErrorLoadingImage}
                />
            </ButtonBase>
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
            <CardContent
                sx={{
                    textAlign: "center",
                    backgroundColor: `${theme.table.header.backgroundColor}`,
                    height: "100%"
                }}
            >
                <img src={(`${process.env.REACT_APP_URL}/stars/Icon_${rarity}_Stars.png`)} alt={rarity}
                    style={{
                        display: "block",
                        margin: "auto",
                        marginTop: "-5px",
                        marginBottom: "10px",
                        height: "25px",
                    }}
                    onError={ErrorLoadingImage}
                />
                <Box>
                    <CustomTooltip title={element} arrow placement="top">
                        <img style={{ width: "32px", marginTop: "5px", marginLeft: "1.5px", marginRight: "1.5px" }} src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <CustomTooltip title={weapon} arrow placement="top">
                        <img style={{ width: "32px", marginTop: "5px", marginLeft: "1.5px", marginRight: "1.5px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`)} alt={weapon} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Box>
                <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                    <Typography variant="body1" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                        {name}
                    </Typography>
                </ButtonBase>
            </CardContent>
        </Card>
    )

}

export default CharacterCardLarge