import * as React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../../helpers/CustomTooltip";
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage";

const Elements = ["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"];

const TCGCharacterElementFilter = (props) => {
    return (
        <React.Fragment>
            {
                Elements.map((element, index) => (
                    <CustomTooltip key={index} title={element} arrow placement="top">
                        <img className="filter-off" id={`${element.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${element}.png`} alt={element} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_TCGCHAR_ELEMENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TCGCharacterElementFilter);