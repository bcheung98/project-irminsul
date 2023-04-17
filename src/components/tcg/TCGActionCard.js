import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Dialog } from "@mui/material";
import TCGDiceCost from "./TCGDiceCost";
import TCGActionCardPopup from "./TCGActionCardPopup";

const TCGActionCard = (props) => {

    let { name, type, cost } = props.card;
    let { deck } = props.deck;

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
                <Box
                    sx={{
                        position: "absolute",
                        top: "-15px",
                        left: "-15px"
                    }}
                >
                    <TCGDiceCost cost={cost} type={"card"} />
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/${name.split(" ").join("_")}_${type}_Card.png`} alt={name} style={{ width: "150px" }} />
                {/* Card Name */}
                <Box sx={{ position: "absolute" }}>
                    <Typography
                        sx={{
                            fontFamily: "Genshin, sans-serif",
                            fontSize: "9.5pt",
                            color: "white",
                        }}
                        variant="body2">
                        {name}
                    </Typography>
                </Box>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth={false}
            >
                <TCGActionCardPopup key={name} card={props.card} inDeck={deck.actionCards.includes(props.card)} count={deck.actionCards.filter(card => card === props.card).length} preview={props.preview} />
            </Dialog>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        deck: state.deck
    }
}

export default connect(mapStateToProps)(TCGActionCard);