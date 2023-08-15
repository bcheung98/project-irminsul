import React from "react";
import { connect } from "react-redux";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatBossMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const BossMaterials = ["Basalt Pillar", "Cleansing Heart", "Everflame Seed", "Hoarfrost Core", "Hurricane Seed", "Lightning Prism", "Juvenile Jade", "Crystalline Bloom", "Marionette Core", "Perpetual Heart", "Smoldering Pearl", "Dew of Repudiation", "Storm Beads", "Riftborn Regalia", "Dragonheir's False Fin", "Runic Fang", "Majestic Hooked Beak", "Thunderclap Fruitcore", "Light Guiding Tetrahedron", "Perpetual Caliber", "Quelled Creeper", "Pseudo-Stamens", "Evergloom Ring", "Clockwork Coppelius", "Clockwork Geppelia", "Emperor's Resolution"];

const BossMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                BossMaterials.map((material, index) => (
                    <CustomTooltip key={index} title={formatBossMats(`${material}`)} arrow placement="top">
                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${material.split(" ").join("_")}.png`} alt={material} onClick={(e) => props.setFilter(e.target.alt)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_BOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);