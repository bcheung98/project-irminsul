import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"];

const WeaponFilter = (props) => {
    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <CustomTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/weapons/icons/Icon_${weapon}.png`} alt={weapon} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_WEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponFilter);
