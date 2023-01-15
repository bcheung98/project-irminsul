import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let mondstadtIcon = (`${process.env.REACT_APP_URL}/nations/Mondstadt.png`);
let liyueIcon = (`${process.env.REACT_APP_URL}/nations/Liyue.png`);
let inazumaIcon = (`${process.env.REACT_APP_URL}/nations/Inazuma.png`);
let sumeruIcon = (`${process.env.REACT_APP_URL}/nations/Sumeru.png`);

const NationFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title="Mondstadt" arrow placement="top">
                <img className="filter-off" id="mondstadt-button" src={mondstadtIcon} alt="Mondstadt" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Liyue" arrow placement="top">
                <img className="filter-off" id="liyue-button" src={liyueIcon} alt="Liyue" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Inazuma" arrow placement="top">
                <img className="filter-off" id="inazuma-button" src={inazumaIcon} alt="Inazuma" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Sumeru" arrow placement="top">
                <img className="filter-off" id="sumeru-button" src={sumeruIcon} alt="Sumeru" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_NATION_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(NationFilter);