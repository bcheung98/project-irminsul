import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage";

const Factions = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Eremite", "Fatui", "Hilichurl", "Monster"];

const TCGCharacterFactionFilter = (props) => {
    return (
        <React.Fragment>
            {
                Factions.map((faction, index) => (
                    <CustomTooltip key={index} title={faction} arrow placement="top">
                        <img className="filter-off" id={`${faction.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${faction}.png`} alt={faction} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TCG_faction_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TCGCharacterFactionFilter);