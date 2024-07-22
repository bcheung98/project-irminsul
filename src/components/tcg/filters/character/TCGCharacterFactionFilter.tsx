import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setNation } from "../../../../redux/reducers/TCGCharacterFilterReducer"
import { CustomTooltip } from "../../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage"

const Factions = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Eremite", "Fatui", "Hilichurl", "Monster", "Consecrated Beast"]

function TCGCharacterFactionFilter() {

    const dispatch = useDispatch()

    const handleClick = (faction: string) => {
        dispatch(setNation(faction))
    }

    return (
        <React.Fragment>
            {
                Factions.map((faction, index) => (
                    <CustomTooltip key={index} title={faction} arrow placement="top">
                        <img className="filter-off" id={`${faction.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/factions/${faction}.png`} alt={faction} onClick={() => handleClick(faction)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default TCGCharacterFactionFilter