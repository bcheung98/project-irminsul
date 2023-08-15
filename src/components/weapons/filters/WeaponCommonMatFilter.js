import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatCommonMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const CommonMaterials = ["Arrow", "Fatui Insignia", "Mask", "Nectar", "Scroll", "Slime", "Treasure Hoarder Insignia", "Handguard", "Specter", "Fungi", "Headband", "Aberrant", "Gear"];

const WeaponCommonMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                CommonMaterials.map((material, index) => (
                    <CustomTooltip key={index} title={formatCommonMats(`${material}`)} arrow placement="top">
                        <img className="filter-off" id={`wep-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/common_mats/${material.split(" ").join("_")}3.png`} alt={material} onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_COMMON_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponCommonMatFilter);