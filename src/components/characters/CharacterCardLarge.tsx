import * as React from "react"
import { useTheme } from "@mui/material/styles"
import { Typography, Card, CardContent, ButtonBase, Box, Avatar } from "@mui/material"
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { GetRarityColor, GetBackgroundColor } from "../../helpers/RarityColors"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

function CharacterCardLarge(props: any) {

    const theme = useTheme()

    let { name, rarity, element, weapon } = props.character

    const width = "200px"

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
                        <Avatar variant="square" src={`${process.env.REACT_APP_URL}/characters/wish_multi/${name}.png`} alt={name}
                            style={{
                                width: width,
                                height: "475px",
                                zIndex: -1,
                                backgroundColor: `${theme.card.backgroundColor}`,
                            }}
                        >
                            <img src={`${process.env.REACT_APP_URL}/characters/wish/${name}.png`} alt={name}
                                style={{
                                    width: width,
                                    height: "500px",
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
                    backgroundColor: `${theme.table.header.backgroundColor}`
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
                    <img style={{ width: "30px", marginTop: "5px", marginLeft: "1.5px", marginRight: "1.5px" }} src={(`${process.env.REACT_APP_URL}/elements/${element}.png`)} alt={element} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <CustomTooltip title={weapon} arrow placement="top">
                    <img style={{ width: "33px", marginTop: "5px", marginLeft: "1.5px", marginRight: "1.5px" }} src={(`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`)} alt={weapon} onError={ErrorLoadingImage} />
                </CustomTooltip>
                <Box>
                    <ButtonBase disableRipple href={`/project-irminsul/character/${name.split(" ").join("_").toLowerCase()}`} target="_blank">
                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                            {name}
                        </Typography>
                    </ButtonBase>
                </Box>
            </CardContent>
        </Card>
    )

}

export default CharacterCardLarge