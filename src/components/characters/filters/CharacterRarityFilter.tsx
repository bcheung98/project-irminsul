import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setRarity } from "../../../redux/reducers/CharacterFilterReducer"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterRarityFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            <Box><img className="filter-off" id="5-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_5_Stars.png`)} alt="5" onClick={() => dispatch(setRarity("5"))} onError={ErrorLoadingImage} /></Box>
            <Box><img className="filter-off" id="4-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_4_Stars.png`)} alt="4" onClick={() => dispatch(setRarity("4"))} onError={ErrorLoadingImage} /></Box>
        </React.Fragment>
    )

}

export default CharacterRarityFilter