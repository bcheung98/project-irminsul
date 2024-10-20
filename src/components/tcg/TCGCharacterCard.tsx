import * as React from "react"
import { connect } from "react-redux"

// Component imports
import TCGCharacterCardPopup from "./TCGCharacterCardPopup"
import { Transition } from "../_custom/Transition"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Dialog } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"

function TCGCharacterCard(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

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

    let energy
    try {
        energy = talents.burst.cost.split(" ")[1].slice(0, -1)
    }
    catch {
        energy = 0
    }

    return (
        <React.Fragment>
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
                            border: "2px solid transparent", // This actually centers the number
                            textAlign: "center",
                            width: "48px",
                            height: "58px",
                            backgroundImage: `url(${process.env.REACT_APP_URL}/tcg/icons/hp.png)`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100%",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: `${theme.font.genshin.family}`,
                                fontSize: "24px",
                                lineHeight: "58px",
                                color: `white`,
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
                        right: "-20px"
                    }}
                >
                    {
                        range(1, energy, 1).map(index => (
                            <Box key={index}>
                                <img src={`${process.env.REACT_APP_URL}/tcg/icons/Energy_Card.png`} alt="Energy" style={{ width: "40px", marginBottom: "-15px" }} />
                            </Box>
                        ))
                    }
                </Box>
                <img
                    src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}.png`} alt={name}
                    style={{
                        width: "150px",
                        border: `2px solid ${theme.border.color}`,
                        borderRadius: "18px",
                    }}
                    loading="lazy"
                    onError={ErrorLoadingImage}
                />
                {/* Card Name */}
                <Box>
                    <Typography
                        sx={{
                            fontFamily: `${theme.font.genshin.family}`,
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
                TransitionComponent={!matches ? Transition : undefined}
                fullScreen={!matches}
                maxWidth={false}
            >
                <TCGCharacterCardPopup key={name} char={props.char} inDeck={deck.characterCards.includes(props.char)} preview={props.preview} handleClose={handleClose} />
            </Dialog>
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck
})

export default connect(mapStateToProps)(TCGCharacterCard)