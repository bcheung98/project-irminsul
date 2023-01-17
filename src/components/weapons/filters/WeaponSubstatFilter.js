import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let hpIcon = (`${process.env.REACT_APP_URL}/icons/HP.png`);
let atkIcon = (`${process.env.REACT_APP_URL}/icons/ATK.png`);
let defIcon = (`${process.env.REACT_APP_URL}/icons/DEF.png`);
let physicalIcon = (`${process.env.REACT_APP_URL}/icons/Physical DMG Bonus.png`);
let erIcon = (`${process.env.REACT_APP_URL}/icons/Energy Recharge.png`);
let crIcon = (`${process.env.REACT_APP_URL}/icons/CRIT_Rate.png`);
let cdIcon = (`${process.env.REACT_APP_URL}/icons/CRIT_DMG.png`);
let emIcon = (`${process.env.REACT_APP_URL}/icons/Elemental Mastery.png`);

const WeaponSubstatFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="HP%" arrow placement="top">
                <img className="filter-off" id="wep-hp-button" src={hpIcon} alt="HP" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="ATK%" arrow placement="top">
                <img className="filter-off" id="wep-atk-button" src={atkIcon} alt="ATK" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="DEF%" arrow placement="top">
                <img className="filter-off" id="wep-def-button" src={defIcon} alt="DEF" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Physical DMG Bonus" arrow placement="top">
                <img className="filter-off" id="wep-physical dmg bonus-button" src={physicalIcon} alt="Physical DMG Bonus" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Energy Recharge" arrow placement="top">
                <img className="filter-off" id="wep-energy recharge-button" src={erIcon} alt="Energy Recharge" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="CRIT Rate" arrow placement="top">
                <img className="filter-off" id="wep-crit rate-button" src={crIcon} alt="CRIT Rate" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="CRIT DMG" arrow placement="top">
                <img className="filter-off" id="wep-crit dmg-button" src={cdIcon} alt="CRIT DMG" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Elemental Mastery" arrow placement="top">
                <img className="filter-off" id="wep-elemental mastery-button" src={emIcon} alt="Elemental Mastery" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_SUBSTAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponSubstatFilter);