import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setAscensionStat } from "../../../redux/reducers/CharacterFilterReducer"
import { CharacterAscensionStats } from "../../../helpers/CharacterAscensionStats"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function AscensionStatFilter() {

    const dispatch = useDispatch()

    const handleClick = (stat: string) => {
        dispatch(setAscensionStat(stat))
    }

    return (
        <React.Fragment>
            {
                Object.keys(CharacterAscensionStats).map((stat, index) => (
                    <CustomTooltip key={index} title={CharacterAscensionStats[stat as keyof {}]["title"]} arrow placement="top">
                        <img className="filter-off" id={`${stat.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/icons/ascension_stats/${stat}.png`} alt={stat} onClick={() => handleClick(stat)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default AscensionStatFilter