import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage";

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"];

const TCGCharacterWeaponFilter = (props) => {
    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <CustomTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weapon}.png`} alt={weapon} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TCG_CHARACTERWEAPON_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TCGCharacterWeaponFilter);