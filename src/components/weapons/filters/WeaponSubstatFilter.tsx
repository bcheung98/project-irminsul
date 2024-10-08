import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setSubstats } from "../../../redux/reducers/WeaponFilterReducer"
import { WeaponSubstats } from "../../../helpers/WeaponSubstats"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function WeaponSubstatFilters() {

    const dispatch = useDispatch()


    return (
        <React.Fragment>
            {
                Object.keys(WeaponSubstats).map((stat, index) => (
                    <CustomTooltip key={index} title={WeaponSubstats[stat as keyof {}]["title"]} arrow placement="top">
                        <img className="filter-off" id={`weapon-${stat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/icons/ascension_stats/${stat.split(" ").join("_")}.png`} alt={stat} onClick={() => dispatch(setSubstats(stat))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default WeaponSubstatFilters