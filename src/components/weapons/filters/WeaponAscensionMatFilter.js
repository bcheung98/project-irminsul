import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { FilterTooltip } from "../../../helpers/FilterTooltip";
import { formatWeaponAscMats } from "../../../helpers/TooltipText";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const AscensionMaterials = {
    "Mondstadt": ["Decarabian", "Boreal Wolf", "Dandelion Gladiator"],
    "Liyue": ["Guyun", "Mist Veiled Elixir", "Aerosiderite"],
    "Inazuma": ["Sea Branch", "Narukami", "Oni Mask"],
    "Sumeru": ["Forest Dew", "Oasis Garden", "Scorching Might"]
}

const WeaponAscensionMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(AscensionMaterials).map((material, index) => (
                    <Box key={index}>
                        {
                            AscensionMaterials[material].map((material, index) => (
                                <FilterTooltip key={index} title={formatWeaponAscMats(`${material}`)} arrow placement="top">
                                    <img className="filter-off" id={`wep-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${material.split(" ").join("_")}4.png`} alt={material} onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
                                </FilterTooltip>
                            ))
                        }
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setWeaponFilter: (target) => dispatch({ type: "SET_WEP_ASCMAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(WeaponAscensionMatFilter);