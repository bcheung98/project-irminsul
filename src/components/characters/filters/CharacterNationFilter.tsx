import React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setNation } from "../../../redux/reducers/CharacterFilterReducer"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

const Nations = ["Mondstadt", "Liyue", "Inazuma", "Sumeru", "Fontaine", "Natlan", "Snezhnaya"]

function CharacterNationFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Nations.map((nation, index) => (
                    <CustomTooltip key={index} title={nation} arrow placement="top">
                        <img className="filter-off" id={`${nation.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/nations/${nation}.png`} alt={nation} onClick={() => dispatch(setNation(nation))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default CharacterNationFilter