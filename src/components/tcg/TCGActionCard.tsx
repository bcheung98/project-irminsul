import * as React from "react"
import { connect } from "react-redux"

// Component imports
import TCGDiceCost from "./TCGDiceCost"
import TCGActionCardPopup from "./TCGActionCardPopup"
import { Transition } from "../_custom/Transition"

// MUI imports
import { useTheme, useMediaQuery, Box, Typography, Dialog } from "@mui/material"

// Helper imports
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { TCGDeckData } from "../../types/tcg/TCGDeckData"

function TCGActionCard(props: any) {

    const theme = useTheme()

    const matches = useMediaQuery(theme.breakpoints.up("sm"))

    let { name, cost } = props.card
    let { deck } = props.deck

    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
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
                <Box
                    sx={{
                        position: "absolute",
                        top: "-10px",
                        left: "-15px"
                    }}
                >
                    <TCGDiceCost cost={cost} />
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}.png`} alt={name}
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
                        {props.card.displayName ? props.card.displayName : name}
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
                <TCGActionCardPopup key={name} card={props.card} inDeck={deck.actionCards.includes(props.card)} count={deck.actionCards.filter((card: TCGDeckData) => card === props.card).length} preview={props.preview} />
            </Dialog>
        </React.Fragment>
    )

}

const mapStateToProps = (state: RootState) => ({
    deck: state.deck
})

export default connect(mapStateToProps)(TCGActionCard)