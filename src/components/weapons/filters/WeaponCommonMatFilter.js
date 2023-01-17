import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatCommonMats } from "../../../helpers/TooltipText";

let arrowIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Arrow3.png`);
let fatuiIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Fatui_Insignia3.png`);
let fungiIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Fungi3.png`);
let handguardIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Handguard3.png`);
let headbandIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Headband3.png`);
let maskIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Mask3.png`);
let nectarIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Nectar3.png`);
let scrollIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Scroll3.png`);
let slimeIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Slime3.png`);
let specterIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Specter3.png`);
let thIcon = (`${process.env.REACT_APP_URL}/materials/common_mats/Treasure_Hoarder_Insignia3.png`);

const WeaponCommonMatFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title={formatCommonMats("Arrow")} arrow placement="top">
                <img className="filter-off" id="wep-arrow-button" src={arrowIcon} alt="Arrow" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Fatui Insignia")} arrow placement="top">
                <img className="filter-off" id="wep-fatui insignia-button" src={fatuiIcon} alt="Fatui Insignia" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Fungi")} arrow placement="top">
                <img className="filter-off" id="wep-fungi-button" src={fungiIcon} alt="Fungi" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Handguard")} arrow placement="top">
                <img className="filter-off" id="wep-handguard-button" src={handguardIcon} alt="Handguard" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Headband")} arrow placement="top">
                <img className="filter-off" id="wep-headband-button" src={headbandIcon} alt="Headband" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Mask")} arrow placement="top">
                <img className="filter-off" id="wep-mask-button" src={maskIcon} alt="Mask" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Nectar")} arrow placement="top">
                <img className="filter-off" id="wep-nectar-button" src={nectarIcon} alt="Nectar" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Scroll")} arrow placement="top">
                <img className="filter-off" id="wep-scroll-button" src={scrollIcon} alt="Scroll" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Slime")} arrow placement="top">
                <img className="filter-off" id="wep-slime-button" src={slimeIcon} alt="Slime" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Specter")} arrow placement="top">
                <img className="filter-off" id="wep-specter-button" src={specterIcon} alt="Specter" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatCommonMats("Treasure Hoarder Insignia")} arrow placement="top">
                <img className="filter-off" id="wep-treasure hoarder insignia-button" src={thIcon} alt="Treasure Hoarder Insignia" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_COMMON_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponCommonMatFilter);