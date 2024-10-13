// MUI imports
import { useTheme, Box, Typography } from "@mui/material"

function TCGDiceCost(props: any) {

    const theme = useTheme()

    let cost = []
    if (props.cost !== undefined) {
        cost = props.cost.split(" ")
    }

    const size = (type: string) => {
        if (type === "card" || type === "popup") {
            return "60px"
        }
        else if (type === "card-large") {
            return "96px"
        }
        else if (type === "keyword-popup") {
            return "40px"
        }
        else {
            return "56px"
        }
    }

    const fontSize = (type: string) => {
        if (type === "card" || type === "popup") {
            return "24px"
        }
        else if (type === "card-large") {
            return "38.4px"
        }
        else if (type === "keyword-popup") {
            return "20px"
        }
        else {
            return "22.4px"
        }
    }

    return (
        <Box sx={{ display: props.type === "popup" ? "flex" : "block" }}>
            {
                cost.map((dice: string, index: number) => {
                    return (
                        <Box
                            sx={{
                                border: "2px solid transparent", // This actually centers the number
                                textAlign: "center",
                                width: size(props.type),
                                height: size(props.type),
                                backgroundImage: `url(${process.env.REACT_APP_URL}/tcg/icons/dice/${dice.slice(-1)}.png)`,
                                backgroundPosition: "center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "100%",
                            }}
                            key={index}
                        >
                            <Typography
                                sx={{
                                    fontFamily: `${theme.font.genshin.family}`,
                                    fontSize: fontSize(props.type),
                                    lineHeight: size(props.type),
                                    color: `white`,
                                    textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                    userSelect: "none",
                                }}>
                                {dice.slice(0, -1)}
                            </Typography>
                        </Box>
                    )
                })
            }
        </Box>
    )

}

export default TCGDiceCost