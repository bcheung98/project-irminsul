import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let swordIcon = (`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-sword-icon.png`);
let claymoreIcon = (`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-claymore-icon.png`);
let polearmIcon = (`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-polearm-icon.png`);
let bowIcon = (`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-bow-icon.png`);
let catalystIcon = (`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-catalyst-icon.png`);

const WeaponTypeFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Sword" arrow placement="top">
                <img className="filter-off" id="wep-sword-button" src={swordIcon} alt="Sword" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Claymore" arrow placement="top">
                <img className="filter-off" id="wep-claymore-button" src={claymoreIcon} alt="Claymore" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Polearm" arrow placement="top">
                <img className="filter-off" id="wep-polearm-button" src={polearmIcon} alt="Polearm" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Bow" arrow placement="top">
                <img className="filter-off" id="wep-bow-button" src={bowIcon} alt="Bow" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Catalyst" arrow placement="top">
                <img className="filter-off" id="wep-catalyst-button" src={catalystIcon} alt="Catalyst" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponTypeFilter);
