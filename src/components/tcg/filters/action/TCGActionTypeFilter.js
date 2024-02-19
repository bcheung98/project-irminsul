import * as React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage";

const Types = ["Event", "Equipment", "Support"];

const TCGActionTypeFilter = (props) => {

    return (
        <React.Fragment>
            {
                Types.map((type, index) => (
                    <Box sx={{ display: "inline-flex", mr: "5px" }} key={index} >
                        {/* This is intentionally a <p> */}
                        <p className="filter-button-off" id={`tcg-action-${type.toLowerCase()}-button`} onClick={() => props.setFilter(type)} onError={ErrorLoadingImage}>
                            {type}
                        </p>
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TCGACTION_TYPE_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TCGActionTypeFilter);