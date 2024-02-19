import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage";

const SubTypes = ["Arcane Legend", "Artifact", "Companion", "Elemental Resonance", "Food", "Item", "Location", "Talent", "Weapon"];

const TCGActionSubTypeFilter = (props) => {
    return (
        <React.Fragment>
            {
                SubTypes.map((subType, index) => (
                    <CustomTooltip key={index} title={subType} arrow placement="top">
                        <img className="filter-off" id={`tcg-action-${subType.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/${subType}.png`} alt={subType} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TCGACTION_SUBTYPE_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TCGActionSubTypeFilter);