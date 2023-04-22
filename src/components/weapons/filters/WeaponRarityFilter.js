import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponRarityFilter = (props) => {

    return (
        <React.Fragment>
            <Box>
                <img className="filter-off" id="wep-5-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_5_Stars.png`)} alt="5" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </Box>
            <Box>
                <img className="filter-off" id="wep-4-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_4_Stars.png`)} alt="4" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </Box>
            <Box>
                <img className="filter-off" id="wep-3-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_3_Stars.png`)} alt="3" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </Box>
            <Box>
                <img className="filter-off" id="wep-2-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_2_Stars.png`)} alt="2" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </Box>
            <Box>
                <img className="filter-off" id="wep-1-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_1_Stars.png`)} alt="1" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </Box>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_WEP_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponRarityFilter);