import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const GenderFilter = (props) => {

    return (
        <Box>
            <CustomTooltip title="Male" arrow placement="top">
                <img className="filter-off" id="male-button" src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="Male" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="Female" arrow placement="top">
                <img className="filter-off" id="female-button" src={(`${process.env.REACT_APP_URL}/icons/Lumine.png`)} alt="Female" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
        </Box>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_GENDER_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(GenderFilter);