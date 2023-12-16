import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { Typography, Dialog } from "@mui/material";
import TCGDiceCost from "./TCGDiceCost";
import TCGActionCardPopup from "./TCGActionCardPopup";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const TCGActionCard = (props) => {

    const theme = useTheme();

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
                        top: "-15px",
                        left: "-15px"
                    }}
                >
                    <TCGDiceCost cost={cost} type={"card"} />
                </Box>
                <img src={`${process.env.REACT_APP_URL}/tcg/action_cards/Card_${name.split(" ").join("_")}.png`} alt={name}
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
                        {props.card.displayName ? props.card.displayName : name}
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