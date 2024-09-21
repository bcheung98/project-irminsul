// MUI imports
import { useTheme } from "@mui/material/styles"
import { Typography, ButtonBase, Box, Card, CardContent } from "@mui/material"

// Helper imports
import { CustomTooltip } from "../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function WeaponCardLarge(props: any) {

    const theme = useTheme()

    let { name, type, rarity } = props.weapon

    const width = "200px"

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

    const CardStyle = (viewSource = "grid") => {
        if (viewSource === "version-highlights") {
            return {
                width: width,
                mx: "auto",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }
        }
        else {
            return {
                width: width,
                mr: "20px",
                mb: "20px",
                backgroundColor: `${theme.card.backgroundColor}`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }
        }
    }

    return (
        <Card sx={CardStyle(props.viewSource)}>
            <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                <Box>
                    <Box
                        sx={{
                            width: width,
                            height: "200px",
                        }}
                    >
                        <img src={(`${process.env.REACT_APP_URL}/weapons/${name.split(" ").join("_")}.png`)} alt={name} style={weaponIcon} onError={ErrorLoadingImage} />
                    </Box>
                </Box>
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
                        marginBottom: "5px",
                        height: "25px",
                    }}
                    onError={ErrorLoadingImage}
                />
                <CustomTooltip title={type} arrow placement="top">
                    <img style={smallIcon} src={(`${process.env.REACT_APP_URL}/weapons/icons/${type}.png`)} alt={type} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Box>
                    <ButtonBase disableRipple href={`${process.env.REACT_APP_BASENAME}/weapons/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                            {name}
                        </Typography>
                    </ButtonBase>
                </Box>
            </CardContent>
        </Card >
    )

}

export default WeaponCardLarge