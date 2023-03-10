import * as React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let pyroIcon = (`${process.env.REACT_APP_URL}/elements/Element_Pyro.png`);
let hydroIcon = (`${process.env.REACT_APP_URL}/elements/Element_Hydro.png`);
let electroIcon = (`${process.env.REACT_APP_URL}/elements/Element_Electro.png`);
let cryoIcon = (`${process.env.REACT_APP_URL}/elements/Element_Cryo.png`);
let anemoIcon = (`${process.env.REACT_APP_URL}/elements/Element_Anemo.png`);
let geoIcon = (`${process.env.REACT_APP_URL}/elements/Element_Geo.png`);
let dendroIcon = (`${process.env.REACT_APP_URL}/elements/Element_Dendro.png`);

const ElementFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Pyro" arrow placement="top">
                <img className="filter-off" id="pyro-button" src={pyroIcon} alt="Pyro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Hydro" arrow placement="top">
                <img className="filter-off" id="hydro-button" src={hydroIcon} alt="Hydro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Electro" arrow placement="top">
                <img className="filter-off" id="electro-button" src={electroIcon} alt="Electro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Cryo" arrow placement="top">
                <img className="filter-off" id="cryo-button" src={cryoIcon} alt="Cryo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Anemo" arrow placement="top">
                <img className="filter-off" id="anemo-button" src={anemoIcon} alt="Anemo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Geo" arrow placement="top">
                <img className="filter-off" id="geo-button" src={geoIcon} alt="Geo" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Dendro" arrow placement="top">
                <img className="filter-off" id="dendro-button" src={dendroIcon} alt="Dendro" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(ElementFilter);