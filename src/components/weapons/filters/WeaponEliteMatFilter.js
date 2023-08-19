import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatEliteMats } from "../../../helpers/TooltipText";
import { EliteMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponEliteMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                EliteMats.map((material, index) => (
                    <CustomTooltip key={index} title={formatEliteMats(`${material}`)} arrow placement="top">
                        <img className="filter-off" id={`wep-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${material.split(" ").join("_")}3.png`} alt={material} onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_ELITEMAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponEliteMatFilter);