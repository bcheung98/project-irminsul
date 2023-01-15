import React from "react";
import { connect } from "react-redux";

const RarityFilter = (props) => {

    return (
        <div style={{ display: "flex" }}>
            <img className="filter-off" id="5-button" src={require("../../../assets/stars/Icon_5_Stars.png")} alt="5" onClick={(e) => props.setFilter(e.target.alt)} />
            <img className="filter-off" id="4-button" src={require("../../../assets/stars/Icon_4_Stars.png")} alt="4" onClick={(e) => props.setFilter(e.target.alt)} />
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_RARITY_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(RarityFilter);