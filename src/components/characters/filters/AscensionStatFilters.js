import * as React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let atkIcon = (`${process.env.REACT_APP_URL}/icons/ATK.png`);
let defIcon = (`${process.env.REACT_APP_URL}/icons/DEF.png`);
let hpIcon = (`${process.env.REACT_APP_URL}/icons/HP.png`);
let crIcon = (`${process.env.REACT_APP_URL}/icons/CRIT_Rate.png`);
let cdIcon = (`${process.env.REACT_APP_URL}/icons/CRIT_DMG.png`);
let emIcon = (`${process.env.REACT_APP_URL}/icons/Elemental Mastery.png`);
let erIcon = (`${process.env.REACT_APP_URL}/icons/Energy Recharge.png`);
let hbIcon = (`${process.env.REACT_APP_URL}/icons/Healing Bonus.png`);
let physicalIcon = (`${process.env.REACT_APP_URL}/icons/Physical DMG Bonus.png`);
let pyroIcon = (`${process.env.REACT_APP_URL}/icons/Pyro.png`);
let hydroIcon = (`${process.env.REACT_APP_URL}/icons/Hydro.png`);
let electroIcon = (`${process.env.REACT_APP_URL}/icons/Electro.png`);
let cryoIcon = (`${process.env.REACT_APP_URL}/icons/Cryo.png`);
let anemoIcon = (`${process.env.REACT_APP_URL}/icons/Anemo.png`);
let geoIcon = (`${process.env.REACT_APP_URL}/icons/Geo.png`);
let dendroIcon = (`${process.env.REACT_APP_URL}/icons/Dendro.png`);

const AscensionStatFilters = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="ATK%" arrow placement="top">
                <img className="filter-off" id="atk-button" src={atkIcon} alt="ATK" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="DEF%" arrow placement="top">
                <img className="filter-off" id="def-button" src={defIcon} alt="DEF" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="HP%" arrow placement="top">
                <img className="filter-off" id="hp-button" src={hpIcon} alt="HP" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="CRIT Rate" arrow placement="top">
                <img className="filter-off" id="crit rate-button" src={crIcon} alt="CRIT Rate" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="CRIT DMG" arrow placement="top">
                <img className="filter-off" id="crit dmg-button" src={cdIcon} alt="CRIT DMG" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Elemental Mastery" arrow placement="top">
                <img className="filter-off" id="elemental mastery-button" src={emIcon} alt="Elemental Mastery" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Energy Recharge" arrow placement="top">
                <img className="filter-off" id="energy recharge-button" src={erIcon} alt="Energy Recharge" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Healing Bonus" arrow placement="top">
                <img className="filter-off" id="healing bonus-button" src={hbIcon} alt="Healing Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Physical DMG Bonus" arrow placement="top">
                <img className="filter-off" id="physical dmg bonus-button" src={physicalIcon} alt="Physical DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Pyro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="pyro dmg bonus-button" src={pyroIcon} alt="Pyro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Hydro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="hydro dmg bonus-button" src={hydroIcon} alt="Hydro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Electro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="electro dmg bonus-button" src={electroIcon} alt="Electro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Cryo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="cryo dmg bonus-button" src={cryoIcon} alt="Cryo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Anemo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="anemo dmg bonus-button" src={anemoIcon} alt="Anemo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Geo DMG Bonus" arrow placement="top">
                <img className="filter-off" id="geo dmg bonus-button" src={geoIcon} alt="Geo DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dendro DMG Bonus" arrow placement="top">
                <img className="filter-off" id="dendro dmg bonus-button" src={dendroIcon} alt="Dendro DMG Bonus" onClick={(e) => props.setFilter(e.target.alt)} />
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