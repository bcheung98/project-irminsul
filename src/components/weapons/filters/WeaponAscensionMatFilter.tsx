import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setAscensionMats } from "../../../redux/reducers/WeaponFilterReducer"
import { WepAscensionMats } from "../../../helpers/MaterialList"
import { formatWeaponAscMats } from "../../../helpers/TooltipText"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function WeaponAscensionMatFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Object.keys(WepAscensionMats).map((material, index) => (
                    <Box key={index}>
                        {
                            WepAscensionMats[material as keyof typeof WepAscensionMats].map((material, index) => (
                                <CustomTooltip key={index} title={formatWeaponAscMats(`${material}`)} arrow placement="top">
                                    <img className="filter-off" id={`weapon-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${material.split(" ").join("_")}4.png`} alt={material} onClick={() => dispatch(setAscensionMats(material))} onError={ErrorLoadingImage} />
                                </CustomTooltip>
                            ))
                        }
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

export default WeaponAscensionMatFilter