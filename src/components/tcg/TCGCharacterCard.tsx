import * as React from "react"
import { connect } from "react-redux"

// Component imports
import TCGCharacterCardPopup from "./TCGCharacterCardPopup"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography, Dialog } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"

function TCGCharacterCard(props: any) {

    const theme = useTheme()

    let { name, hp, talents } = props.char
    let { deck } = props.deck

    // Generates an array of numbers
    const range = (start: number, stop: number, step: number) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step))

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Box sx={{ mb: "20px" }}>
            <Box
                sx={{
                    width: "150px",
                    mx: "15px",
                    position: "relative",
                    cursor: "pointer"
                }}
                onClick={() => handleClickOpen()}
            >
                {/* HP Icon */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "-15px",
                        left: "-15px"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            textAlign: "center"
                        }}
                    >
                        <img src={`${process.env.REACT_APP_URL}/tcg/icons/hp.png`} alt={hp} style={{ width: "40px" }} />
                        <Typography
                            variant="h5"
                            sx={{
                                fontFamily: "Genshin, sans-serif",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                color: `${theme.text.color}`,
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
                                userSelect: "none"
                            }}>
                            {hp}
                        </Typography>
                    </Box>
                </Box>
                {/* Energy Icons */}
                <Box
                    sx={{
                        position: "absolute",
                        top: "10px",
                        right: "-23px"
                    }}
                >
                    {
                        range(1, talents.burst.energy, 1).map(index => (
                            <Box key={index}>
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/Energy_Card.png`} alt="Energy" style={{ width: "40px", marginBottom: "-15px" }} />
                            </Box>
                        ))
                    }
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/Card_${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        width: "150px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "18px",
                    }}
                    onError={ErrorLoadingImage}
                />
                {/* Card Name */}
                <Box>
                    <Typography
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: `${theme.text.color}`,
                        }}
                        variant="body2"
                        align="center"
                    >
                        {props.char.displayName ? props.char.displayName : name}
                    </Typography>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <TCGCharacterCardPopup key={name} char={props.char} inDeck={deck.characterCards.includes(props.char)} preview={props.preview} />
            </Dialog>
        </Box>
    )
}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck
})

export default connect(mapStateToProps)(TCGCharacterCard)