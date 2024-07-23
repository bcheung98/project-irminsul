import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setCommonMats } from "../../../redux/reducers/WeaponFilterReducer"
import { CommonMats } from "../../../helpers/MaterialList"
import { formatCommonMats } from "../../../helpers/TooltipText"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function WeaponCommonMatFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                CommonMats.map((material, index) => (
                    <CustomTooltip key={index} title={formatCommonMats(material)} arrow placement="top">
                        <img className="filter-off" id={`weapon-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/common_mats/${material.split(" ").join("_")}3.png`} alt={material} onClick={() => dispatch(setCommonMats(material))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

export default WeaponCommonMatFilter