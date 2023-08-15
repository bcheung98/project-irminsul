import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatEliteMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const EliteMaterials = ["Horn", "Ley Line Branch", "Chaos Part", "Mist Grass", "Sacrificial Knife", "Bone Shard", "Sentinel Chaos Part", "Mirror Maiden Prism", "Riftwolf Claw", "Statuette", "Fungal Nucleus", "Drake Chaos Part", "Primal Construct Prism", "Shell", "Flower", "Tainted Water", "Rift Core"];

const WeaponEliteMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                EliteMaterials.map((material, index) => (
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