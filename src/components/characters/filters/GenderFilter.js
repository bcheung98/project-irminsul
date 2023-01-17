import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

const GenderFilter = (props) => {

    return (
        <div style={{ display: "flex" }}>
            <FilterTooltip title="Male" arrow placement="top">
                <img className="filter-off" id="male-button" src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="Male" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title="Female" arrow placement="top">
                <img className="filter-off" id="female-button" src={(`${process.env.REACT_APP_URL}/icons/Lumine.png`)} alt="Female" onClick={(e) => props.setFilter(e.target.alt)} />
            </FilterTooltip>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_GENDER_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(GenderFilter);