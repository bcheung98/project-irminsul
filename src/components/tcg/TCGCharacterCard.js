import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Dialog } from "@mui/material";
import TCGCharacterCardPopup from "./TCGCharacterCardPopup";

const TCGCharacterCard = (props) => {

    let { name, hp, talents } = props.char;
    let { deck } = props.deck;

    // Generates an array of numbers
    const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + (i * step));

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ mb: "20px" }}>
            <Box
                sx={{
                    width: "150",
                    mx: "15px",
                    mb: "45px",
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
                                color: "white",
                                textShadow: "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000"
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
                        right: "-18px"
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
                <img src={`${process.env.REACT_APP_URL}/tcg/character_cards/${name.split(" ").join("_")}_Character_Card.png`} alt={name} style={{ width: "150px" }} />
                {/* Card Name */}
                <Box sx={{ position: "absolute" }}>
                    <Typography
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            color: "white",
                        }}
                        variant="body1">
                        {name}
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

const mapStateToProps = (state) => {
    return {
        deck: state.deck
    }
}

export default connect(mapStateToProps)(TCGCharacterCard);