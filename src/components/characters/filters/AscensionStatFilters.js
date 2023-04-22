import * as React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const AscensionStatFilters = (props) => {

    return (
        <React.Fragment>
            <FilterTooltip title="ATK%" arrow placement="top">
                <img className="filter-off" id="atk-button" src={`${process.env.REACT_APP_URL}/icons/ATK.png`} alt="ATK" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="DEF%" arrow placement="top">
                <img className="filter-off" id="def-button" src={`${process.env.REACT_APP_URL}/icons/DEF.png`} alt="DEF" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="HP%" arrow placement="top">
                <img className="filter-off" id="hp-button" src={`${process.env.REACT_APP_URL}/icons/HP.png`} alt="HP" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="CRIT Rate" arrow placement="top">
                <img className="filter-off" id="crit rate-button" src={`${process.env.REACT_APP_URL}/icons/CRIT_Rate.png`} alt="CRIT Rate" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="CRIT DMG" arrow placement="top">
                <img className="filter-off" id="crit dmg-button" src={`${process.env.REACT_APP_URL}/icons/CRIT_DMG.png`} alt="CRIT DMG" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Elemental Mastery" arrow placement="top">
                <img className="filter-off" id="elemental mastery-button" src={`${process.env.REACT_APP_URL}/icons/Elemental Mastery.png`} alt="Elemental Mastery" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Energy Recharge" arrow placement="top">
                <img className="filter-off" id="energy recharge-button" src={`${process.env.REACT_APP_URL}/icons/Energy Recharge.png`} alt="Energy Recharge" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Healing Bonus" arrow placement="top">
                <img className="filter-off" id="healing bonus-button" src={`${process.env.REACT_APP_URL}/icons/Healing Bonus.png`} alt="Healing Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Physical DMG Bonus" arrow placement="top">
                <img className="filter-off" id="physical dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Physical DMG Bonus.png`} alt="Physical DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Pyro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="pyro dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Pyro.png`} alt="Pyro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Hydro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="hydro dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Hydro.png`} alt="Hydro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Electro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="electro dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Electro.png`} alt="Electro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Cryo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="cryo dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Cryo.png`} alt="Cryo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Anemo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="anemo dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Anemo.png`} alt="Anemo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Geo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="geo dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Geo.png`} alt="Geo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
            <FilterTooltip title="Dendro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="dendro dmg bonus-button" src={`${process.env.REACT_APP_URL}/icons/Dendro.png`} alt="Dendro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_ASCSTAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(AscensionStatFilters);