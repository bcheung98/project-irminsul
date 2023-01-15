import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let swordIcon = require("../../../assets/weapons/icons/Weapon-class-sword-icon.png");
let claymoreIcon = require("../../../assets/weapons/icons/Weapon-class-claymore-icon.png");
let polearmIcon = require("../../../assets/weapons/icons/Weapon-class-polearm-icon.png");
let bowIcon = require("../../../assets/weapons/icons/Weapon-class-bow-icon.png");
let catalystIcon = require("../../../assets/weapons/icons/Weapon-class-catalyst-icon.png");

const WeaponFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Sword" arrow placement="top">
                <img className="filter-off" id="sword-button" src={swordIcon} alt="Sword" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Claymore" arrow placement="top">
                <img className="filter-off" id="claymore-button" src={claymoreIcon} alt="Claymore" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Polearm" arrow placement="top">
                <img className="filter-off" id="polearm-button" src={polearmIcon} alt="Polearm" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Bow" arrow placement="top">
                <img className="filter-off" id="bow-button" src={bowIcon} alt="Bow" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Catalyst" arrow placement="top">
                <img className="filter-off" id="catalyst-button" src={catalystIcon} alt="Catalyst" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponFilter);
