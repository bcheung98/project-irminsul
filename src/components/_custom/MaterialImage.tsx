// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"

// Helper imports
import { CustomTooltip } from "./CustomTooltip"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

interface MaterialImageProps {
    name: string,
    rarity: string,
    cost: string,
    img: string,
    size?: number
}

function MaterialImage({
    name,
    rarity,
    cost,
    img,
    size = 72
}: MaterialImageProps) {

    const theme = useTheme()

    return (
        <Box
            sx={{
                width: `${size + 2}px`,
                height: `${size * 1.3}px`,
                mr: "15px",
                backgroundColor: `rgb(233, 229, 220)`,
                border: `1px solid ${theme.border.color}`,
                borderRadius: "5px",
            }}
        >
            <CustomTooltip title={name} arrow placement="top">
                <img src={`${process.env.REACT_APP_URL}/materials/${img}.png`} alt={name}
                    style={{
                        width: `${size}px`,
                        backgroundColor: `rgb(20, 20, 20)`,
                        backgroundSize: "contain",
                        backgroundImage: `url(${process.env.REACT_APP_URL}/backgrounds/Background_${rarity}_Star.png)`,
                        borderRadius: "4px 4px 15px 0px",
                    }}
                    onError={ErrorLoadingImage}
                />
            </CustomTooltip>
            <Box
                sx={{
                    textAlign: "center",
                    mt: "-5px",
                }}
            >
                <Typography
                    sx={{
                        fontFamily: `${theme.font.genshin.family}`,
                        color: `rgb(32, 32, 32)`,
                        fontSize: `${size / 6}px`,
                    }}
                >
                    {cost}
                </Typography>
            </Box>
        </Box>
    )

}

export default MaterialImage