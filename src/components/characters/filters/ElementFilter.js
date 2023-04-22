import * as React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";

const elements = ["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"];

const ElementFilter = (props) => {
    return (
        <React.Fragment>
            {
                elements.map((element, index) => (
                    <FilterTooltip key={index} title={element} arrow placement="top">
                        <img className="filter-off" id={`${element.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/elements/Element_${element}.png`} alt={element} onClick={(e) => props.setFilter(e.target.alt)} />
                    </FilterTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(ElementFilter);