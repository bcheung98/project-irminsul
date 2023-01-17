import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatTalents } from "../../../helpers/TooltipText";

let freedomIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Freedom3.png`);
let resistanceIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Resistance3.png`);
let balladIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Ballad3.png`);

let prosperityIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Prosperity3.png`);
let diligenceIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Diligence3.png`);
let goldIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Gold3.png`);

let transienceIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Transience3.png`);
let eleganceIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Elegance3.png`);
let lightIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Light3.png`);

let admonitionIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Admonition3.png`);
let ingenuityIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Ingenuity3.png`);
let praxisIcon = (`${process.env.REACT_APP_URL}/materials/talent_mats/Praxis3.png`);

const TalentFilter = (props) => {
    return (
        <React.Fragment>

            {/* MONDSTADT MATERIALS */}
            <div>
                <FilterTooltip title={formatTalents("Freedom")} arrow placement="top">
                    <img className="filter-off" id="freedom-button" src={freedomIcon} alt="Freedom" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Resistance")} arrow placement="top">
                    <img className="filter-off" id="resistance-button" src={resistanceIcon} alt="Resistance" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Ballad")} arrow placement="top">
                    <img className="filter-off" id="ballad-button" src={balladIcon} alt="Ballad" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>

            {/* LIYUE MATERIALS */}
            <div>
                <FilterTooltip title={formatTalents("Prosperity")} arrow placement="top">
                    <img className="filter-off" id="prosperity-button" src={prosperityIcon} alt="Prosperity" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Diligence")} arrow placement="top">
                    <img className="filter-off" id="diligence-button" src={diligenceIcon} alt="Diligence" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Gold")} arrow placement="top">
                    <img className="filter-off" id="gold-button" src={goldIcon} alt="Gold" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>

            {/* INAZUMA MATERIALS */}
            <div>
                <FilterTooltip title={formatTalents("Transience")} arrow placement="top">
                    <img className="filter-off" id="transience-button" src={transienceIcon} alt="Transience" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Elegance")} arrow placement="top">
                    <img className="filter-off" id="elegance-button" src={eleganceIcon} alt="Elegance" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Light")} arrow placement="top">
                    <img className="filter-off" id="light-button" src={lightIcon} alt="Light" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>

            {/* SUMERU MATERIALS */}
            <div>
                <FilterTooltip title={formatTalents("Admonition")} arrow placement="top">
                    <img className="filter-off" id="admonition-button" src={admonitionIcon} alt="Admonition" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Ingenuity")} arrow placement="top">
                    <img className="filter-off" id="ingenuity-button" src={ingenuityIcon} alt="Ingenuity" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatTalents("Praxis")} arrow placement="top">
                    <img className="filter-off" id="praxis-button" src={praxisIcon} alt="Praxis" onClick={(e) => props.setFilter(e.target.alt)} />
                </FilterTooltip>
            </div>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_TALENT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(TalentFilter);