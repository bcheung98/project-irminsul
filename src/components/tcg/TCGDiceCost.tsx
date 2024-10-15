// MUI imports
import { useTheme, Box, Typography } from "@mui/material"

interface TCGDiceCostProps {
    cost: string,
    display?: "block" | "flex",
    size?: string
}

function TCGDiceCost({
    cost,
    display = "block",
    size = "56px"
}: TCGDiceCostProps) {

    const theme = useTheme()

    let costArray: string[] = []
    if (cost !== undefined) {
        costArray = cost.split(" ")
    }

    // const size = (type: string) => {
    //     if (type === "card" || type === "popup") {
    //         return "60px"
    //     }
    //     else if (type === "card-large") {
    //         return "96px"
    //     }
    //     else if (type === "keyword-popup") {
    //         return "40px"
    //     }
    //     else {
    //         return "56px"
    //     }
    // }

    return (
        <Box sx={{ display: display }}>
            {
                costArray.map((dice: string, index: number) => {
                    return (
                        <Box
                            sx={{
                                border: "2px solid transparent", // This actually centers the number
                                textAlign: "center",
                                width: size,
                                height: size,
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
                                    fontSize: `calc(${size} / 2.5)`,
                                    lineHeight: size,
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