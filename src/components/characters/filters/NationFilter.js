import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const Nations = ["Mondstadt", "Liyue", "Inazuma", "Sumeru"];

const NationFilter = (props) => {
    return (
        <React.Fragment>
            {
                Nations.map((nation, index) => (
                    <FilterTooltip key={index} title={nation} arrow placement="top">
                        <img className="filter-off" id={`${nation.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </FilterTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_NATION_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(NationFilter);