// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, SxProps, Typography } from "@mui/material"

function TCGDiceCost(props: any) {

    const theme = useTheme()

    let cost = []
    if (props.cost !== undefined) {
        cost = props.cost.split(" ")
    }

    const position = (type: string) => {
        if (type === "card") {
            return {
                position: "absolute",
                top: "5px",
                left: "-2px"
            }
        }
        else if (type === "card-large") {
            return {
                position: "absolute",
                top: "2px",
                left: "-16px"
            }
        }
        else if (type === "keyword-popup") {
            return {

            }
        }
        else {
            return {
                display: "flex",
                position: "absolute",
                right: "5px",
                bottom: "20px"
            }
        }
    }

    const size = (type: string) => {
        if (type === "card") {
            return {
                width: "56px"
            }
        }
        else if (type === "card-large") {
            return {
                width: "96px"
            }
        }
        else if (type === "keyword-popup") {
            return {
                width: "32px"
            }
        }
        else {
            return {
                width: "48px"
            }
        }
    }

    const fontSize = (type: string) => {
        if (type === "card") {
            return "h5"
        }
        else if (type === "card-large") {
            return "h3"
        }
        else if (type === "keyword-popup") {
            return "h6"
        }
        else {
            return "h5"
        }
    }

    return (
        <Box
            sx={{
                display: "flex",
                position: "relative"
            }}
        >
            <Box sx={position(props.type) as SxProps}>
                {
                    cost.map((dice: string, index: number) => {
                        return (
                            <Box
                                sx={{
                                    position: "relative",
                                    textAlign: "center",
                                }}
                                key={index}
                            >
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/dice/${dice.slice(-1)}.png`} alt={dice.slice(-1)} style={size(props.type)} />
                                <Typography
                                    variant={fontSize(props.type)}
                                    sx={{
                                        fontFamily: `${theme.font.genshin.family}`,
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                        color: `${theme.text.color}`,
                                        textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                        userSelect: "none"
                                    }}>
                                    {dice.slice(0, -1)}
                                </Typography>
                            </Box>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default TCGDiceCost