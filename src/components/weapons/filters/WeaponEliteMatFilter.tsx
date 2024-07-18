import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setEliteMats } from "../../../redux/reducers/WeaponFilterReducer"
import { EliteMats } from "../../../helpers/MaterialList"
import { formatEliteMats } from "../../../helpers/TooltipText"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function WeaponEliteMatFilter() {

    const dispatch = useDispatch()

    const handleClick = (material: string) => {
        dispatch(setEliteMats(material))
    }

    return (
        <React.Fragment>
            {
                EliteMats.map((material, index) => (
                    <CustomTooltip key={index} title={formatEliteMats(`${material}`)} arrow placement="top">
                        <img className="filter-off" id={`weapon-${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${material.split(" ").join("_")}3.png`} alt={material} onClick={() => handleClick(material)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default WeaponEliteMatFilter