import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"];

const WeaponTypeFilter = (props) => {
    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <FilterTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`wep-${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/weapons/icons/Weapon-class-${weapon.toLowerCase()}-icon.png`} alt={weapon} onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </FilterTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponTypeFilter);
