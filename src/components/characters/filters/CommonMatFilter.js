import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatCommonMats } from "../../../helpers/TooltipText";

let arrowIcon = require("../../../assets/materials/common_mats/Arrow3.png");
let fatuiIcon = require("../../../assets/materials/common_mats/Fatui_Insignia3.png");
let fungiIcon = require("../../../assets/materials/common_mats/Fungi3.png");
let handguardIcon = require("../../../assets/materials/common_mats/Handguard3.png");
let headbandIcon = require("../../../assets/materials/common_mats/Headband3.png");
let maskIcon = require("../../../assets/materials/common_mats/Mask3.png");
let nectarIcon = require("../../../assets/materials/common_mats/Nectar3.png");
let scrollIcon = require("../../../assets/materials/common_mats/Scroll3.png");
let slimeIcon = require("../../../assets/materials/common_mats/Slime3.png");
let specterIcon = require("../../../assets/materials/common_mats/Specter3.png");
let thIcon = require("../../../assets/materials/common_mats/Treasure_Hoarder_Insignia3.png");

const CommonMatFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title={formatCommonMats("Arrow")} arrow placement="top">
                <img className="filter-off" id="arrow-button" src={arrowIcon} alt="Arrow" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Fatui Insignia")} arrow placement="top">
                <img className="filter-off" id="fatui insignia-button" src={fatuiIcon} alt="Fatui Insignia" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Fungi")} arrow placement="top">
                <img className="filter-off" id="fungi-button" src={fungiIcon} alt="Fungi" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Handguard")} arrow placement="top">
                <img className="filter-off" id="handguard-button" src={handguardIcon} alt="Handguard" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Headband")} arrow placement="top">
                <img className="filter-off" id="headband-button" src={headbandIcon} alt="Headband" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Mask")} arrow placement="top">
                <img className="filter-off" id="mask-button" src={maskIcon} alt="Mask" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Nectar")} arrow placement="top">
                <img className="filter-off" id="nectar-button" src={nectarIcon} alt="Nectar" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Scroll")} arrow placement="top">
                <img className="filter-off" id="scroll-button" src={scrollIcon} alt="Scroll" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Slime")} arrow placement="top">
                <img className="filter-off" id="slime-button" src={slimeIcon} alt="Slime" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Specter")} arrow placement="top">
                <img className="filter-off" id="specter-button" src={specterIcon} alt="Specter" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Treasure Hoarder Insignia")} arrow placement="top">
                <img className="filter-off" id="treasure hoarder insignia-button" src={thIcon} alt="Treasure Hoarder Insignia" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_COMMON_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(CommonMatFilter);