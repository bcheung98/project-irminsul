// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, ButtonBase, Box, Card, CardContent } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../_custom/CustomTooltip"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function WeaponCardLarge(props: any) {

    const theme = useTheme()

    let { name, type, rarity } = props.weapon

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
            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <img src={`${process.env.REACT_APP_URL}/weapons/${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        position: "relative",
                        zIndex: -1,
                        width: size,
                        height: size,
                        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
                        backgroundSize: "100%",
                        cursor: "pointer",
                    }}
                    onError={ErrorLoadingImage}
                />
            </ButtonBase>
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
                    <CustomTooltip title={type} arrow placement="top">
                        <img style={{ width: "32px", marginTop: "5px", marginLeft: "1.5px", marginRight: "1.5px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/${type}.png`)} alt={type} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                </Box>
                <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/characters/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                    <Typography variant="body2" sx={{ fontFamily: `${theme.font.genshin.family}`, color: `${theme.text.color}` }}>
                        {name}
                    </Typography>
                </ButtonBase>
            </CardContent>
        </Card>
    )

}

export default WeaponCardLarge