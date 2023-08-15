import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponSubstatFilter = (props) => {
    return (
        <React.Fragment>
            <CustomTooltip title="ATK%" arrow placement="top">
                <img className="filter-off" id="wep-atk-button" src={`${process.env.REACT_APP_URL}/icons/ATK.png`} alt="ATK" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="DEF%" arrow placement="top">
                <img className="filter-off" id="wep-def-button" src={`${process.env.REACT_APP_URL}/icons/DEF.png`} alt="DEF" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="HP%" arrow placement="top">
                <img className="filter-off" id="wep-hp-button" src={`${process.env.REACT_APP_URL}/icons/HP.png`} alt="HP" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="CRIT Rate" arrow placement="top">
                <img className="filter-off" id="wep-crit rate-button" src={`${process.env.REACT_APP_URL}/icons/CRIT_Rate.png`} alt="CRIT Rate" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="CRIT DMG" arrow placement="top">
                <img className="filter-off" id="wep-crit dmg-button" src={`${process.env.REACT_APP_URL}/icons/CRIT_DMG.png`} alt="CRIT DMG" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="Elemental Mastery" arrow placement="top">
                <img className="filter-off" id="wep-elemental mastery-button" src={`${process.env.REACT_APP_URL}/icons/Elemental Mastery.png`} alt="Elemental Mastery" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="Energy Recharge" arrow placement="top">
                <img className="filter-off" id="wep-energy recharge-button" src={`${process.env.REACT_APP_URL}/icons/Energy Recharge.png`} alt="Energy Recharge" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="Physical DMG Bonus" arrow placement="top">
                <img className="filter-off" id="wep-physical dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Physical DMG Bonus.png`} alt="Physical DMG Bonus" onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </CustomTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_SUBSTAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponSubstatFilter);