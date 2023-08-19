import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatBossMats } from "../../../helpers/TooltipText";
import { BossMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const BossMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                BossMats.map((material, index) => (
                    <CustomTooltip key={index} title={formatBossMats(`${material}`)} arrow placement="top">
                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);