import React from "react";
import { connect } from "react-redux";
import { Box } from "@mui/system";
import { CustomTooltip } from "../../../helpers/CustomTooltip";
import { formatWeaponAscMats } from "../../../helpers/TooltipText";
import { WepAscensionMats } from "../../../helpers/MaterialList";
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage";

const WeaponAscensionMatFilter = (props) => {
    return (
        <React.Fragment>
            {
                Object.keys(WepAscensionMats).map((material, index) => (
                    <Box key={index}>
                        {
                            WepAscensionMats[material].map((material, index) => (
                                <CustomTooltip key={index} title={formatWeaponAscMats(`${material}`)} arrow placement="top">
                                    <img className="filter-off" id={`wep-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${material.split(" ").join("_")}4.png`} alt={material} onClick={(e) => props.setWeaponFilter(e.target.alt)} onError={ErrorLoadingImage} />
                                </CustomTooltip>
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