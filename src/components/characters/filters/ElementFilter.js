import * as React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Elements = ["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"];

const ElementFilter = (props) => {
    return (
        <React.Fragment>
            {
                Elements.map((element, index) => (
                    <FilterTooltip key={index} title={element} arrow placement="top">
                        <img className="filter-off" id={`${element.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/elements/Element_${element}.png`} alt={element} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
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