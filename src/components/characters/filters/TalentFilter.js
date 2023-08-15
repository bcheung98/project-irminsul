import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/material";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatTalents } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const TalentBooks = {
    "Mondstadt": ["Freedom", "Resistance", "Ballad"],
    "Liyue": ["Prosperity", "Diligence", "Gold"],
    "Inazuma": ["Transience", "Elegance", "Light"],
    "Sumeru": ["Admonition", "Ingenuity", "Praxis"],
    "Fontaine": ["Equity", "Justice", "Order"]
}

const TalentFilter = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(TalentBooks).map((nation, index) => (
                    <Box key={index}>
                        {
                            TalentBooks[nation].map((talent, index) => (
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