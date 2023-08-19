import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatTalents } from "../../../helpers/TooltipText";
import { TalentBooksGeneral } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const TalentFilter = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(TalentBooksGeneral).map((nation, index) => (
                    <Box key={index}>
                        {
                            TalentBooksGeneral[nation].map((talent, index) => (
                                <CustomTooltip key={index} title={formatTalents(`${talent}`)} arrow placement="top">
                                    <img className="filter-off" id={`${talent.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talent}3.png`} alt={talent} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                                </CustomTooltip>
                            ))
                        }
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_TALENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TalentFilter);