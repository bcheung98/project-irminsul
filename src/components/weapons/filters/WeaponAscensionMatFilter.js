import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatWeaponAscMats } from "../../../helpers/TooltipText";

let decarabianIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Decarabian4.png`);
let borealWolfIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Boreal_Wolf4.png`);
let gladiatorIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Dandelion_Gladiator4.png`);

let guyunIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Guyun4.png`);
let elixirIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Mist_Veiled_Elixir4.png`);
let aerosideriteIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Aerosiderite4.png`);

let seaBranchIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Sea_Branch4.png`);
let narukamiIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Narukami4.png`);
let oniMaskIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Oni_Mask4.png`);

let forestDewIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Forest_Dew4.png`);
let oasisGardenIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Oasis_Garden4.png`);
let scorchingMightIcon = (`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/Scorching_Might4.png`);

const WeaponAscensionMatFilter = (props) => {
    return (
        <React.Fragment>

            {/* MONDSTADT MATERIALS */}
            <Box>
                <FilterTooltip title={formatWeaponAscMats("Decarabian")} arrow placement="top">
                    <img className="filter-off" id="wep-decarabian-button" src={decarabianIcon} alt="Decarabian" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Boreal Wolf")} arrow placement="top">
                    <img className="filter-off" id="wep-boreal wolf-button" src={borealWolfIcon} alt="Boreal Wolf" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Dandelion Gladiator")} arrow placement="top">
                    <img className="filter-off" id="wep-dandelion gladiator-button" src={gladiatorIcon} alt="Dandelion Gladiator" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
            </Box>

            {/* LIYUE MATERIALS */}
            <Box>
                <FilterTooltip title={formatWeaponAscMats("Guyun")} arrow placement="top">
                    <img className="filter-off" id="wep-guyun-button" src={guyunIcon} alt="Guyun" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Mist Veiled Elixir")} arrow placement="top">
                    <img className="filter-off" id="wep-mist veiled elixir-button" src={elixirIcon} alt="Mist Veiled Elixir" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Aerosiderite")} arrow placement="top">
                    <img className="filter-off" id="wep-aerosiderite-button" src={aerosideriteIcon} alt="Aerosiderite" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
            </Box>

            {/* INAZUMA MATERIALS */}
            <Box>
                <FilterTooltip title={formatWeaponAscMats("Sea Branch")} arrow placement="top">
                    <img className="filter-off" id="wep-sea branch-button" src={seaBranchIcon} alt="Sea Branch" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Narukami")} arrow placement="top">
                    <img className="filter-off" id="wep-narukami-button" src={narukamiIcon} alt="Narukami" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Oni Mask")} arrow placement="top">
                    <img className="filter-off" id="wep-oni mask-button" src={oniMaskIcon} alt="Oni Mask" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
            </Box>

            {/* SUMERU MATERIALS */}
            <Box>
                <FilterTooltip title={formatWeaponAscMats("Forest Dew")} arrow placement="top">
                    <img className="filter-off" id="wep-forest dew-button" src={forestDewIcon} alt="Forest Dew" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Oasis Garden")} arrow placement="top">
                    <img className="filter-off" id="wep-oasis garden-button" src={oasisGardenIcon} alt="Oasis Garden" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
                <FilterTooltip title={formatWeaponAscMats("Scorching Might")} arrow placement="top">
                    <img className="filter-off" id="wep-scorching might-button" src={scorchingMightIcon} alt="Scorching Might" onClick={(e) => props.setWeaponFilter(e.target.alt)} />
                </FilterTooltip>
            </Box>

        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_ASCMAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponAscensionMatFilter);