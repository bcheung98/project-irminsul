import React from "react";
import { connect } from "react-redux";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatEliteMats } from "../../../helpers/TooltipText";

let hornIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Horn3.png`);
let leyLineBranchIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Ley_Line_Branch3.png`);
let chaosPartIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Chaos_Part3.png`);
let mistGrassIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Mist_Grass3.png`);
let sacKnifeIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Sacrificial_Knife3.png`);
let boneShardIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Bone_Shard3.png`);
let sentinelPartIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Sentinel_Chaos_Part3.png`);
let mirrorMaidenPrismIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Mirror_Maiden_Prism3.png`);
let riftwolfClawIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Riftwolf_Claw3.png`);
let statuetteIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Statuette3.png`);
let fungalNucleusIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Fungal_Nucleus3.png`);
let drakeChaosPart = (`${process.env.REACT_APP_URL}/materials/elite_mats/Drake_Chaos_Part3.png`);
let primalConstructPrismIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Primal_Construct_Prism3.png`);
let shellIcon = (`${process.env.REACT_APP_URL}/materials/elite_mats/Shell3.png`);

const WeaponEliteMatFilter = (props) => {
    return (
        <React.Fragment>
            <FilterTooltip title={formatEliteMats("Horn")} arrow placement="top">
                <img className="filter-off" id="wep-horn-button" src={hornIcon} alt="Horn" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Ley Line Branch")} arrow placement="top">
                <img className="filter-off" id="wep-ley line branch-button" src={leyLineBranchIcon} alt="Ley Line Branch" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Chaos Part")} arrow placement="top">
                <img className="filter-off" id="wep-chaos part-button" src={chaosPartIcon} alt="Chaos Part" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Mist Grass")} arrow placement="top">
                <img className="filter-off" id="wep-mist grass-button" src={mistGrassIcon} alt="Mist Grass" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Sacrificial Knife")} arrow placement="top">
                <img className="filter-off" id="wep-sacrificial knife-button" src={sacKnifeIcon} alt="Sacrificial Knife" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Bone Shard")} arrow placement="top">
                <img className="filter-off" id="wep-bone shard-button" src={boneShardIcon} alt="Bone Shard" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Sentinel Chaos Part")} arrow placement="top">
                <img className="filter-off" id="wep-sentinel chaos part-button" src={sentinelPartIcon} alt="Sentinel Chaos Part" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Mirror Maiden Prism")} arrow placement="top">
                <img className="filter-off" id="wep-mirror maiden prism-button" src={mirrorMaidenPrismIcon} alt="Mirror Maiden Prism" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Riftwolf Claw")} arrow placement="top">
                <img className="filter-off" id="wep-riftwolf claw-button" src={riftwolfClawIcon} alt="Riftwolf Claw" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Statuette")} arrow placement="top">
                <img className="filter-off" id="wep-statuette-button" src={statuetteIcon} alt="Statuette" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Fungal Nucleus")} arrow placement="top">
                <img className="filter-off" id="wep-fungal nucleus-button" src={fungalNucleusIcon} alt="Fungal Nucleus" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Drake Chaos Part")} arrow placement="top">
                <img className="filter-off" id="wep-drake chaos part-button" src={drakeChaosPart} alt="Drake Chaos Part" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Primal Construct Prism")} arrow placement="top">
                <img className="filter-off" id="wep-primal construct prism-button" src={primalConstructPrismIcon} alt="Primal Construct Prism" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
            <FilterTooltip title={formatEliteMats("Shell")} arrow placement="top">
                <img className="filter-off" id="wep-shell-button" src={shellIcon} alt="Shell" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
            </FilterTooltip>
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_ELITEMAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponEliteMatFilter);