import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setRarity } from "../../../redux/reducers/WeaponFilterReducer"

function WeaponRarityFilter() {

    const dispatch = useDispatch()

    const handleClick = (rarity: string) => {
        dispatch(setRarity(rarity))
    }

    return (
        <React.Fragment>
            <Box><img className="filter-off" id="weapon-5-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_5_Stars.png`)} alt="5" onClick={() => handleClick("5")} /></Box>
            <Box><img className="filter-off" id="weapon-4-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_4_Stars.png`)} alt="4" onClick={() => handleClick("4")} /></Box>
            <Box><img className="filter-off" id="weapon-3-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_3_Stars.png`)} alt="3" onClick={() => handleClick("3")} /></Box>
            <Box><img className="filter-off" id="weapon-2-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_2_Stars.png`)} alt="2" onClick={() => handleClick("2")} /></Box>
            <Box><img className="filter-off" id="weapon-1-button" src={(`${process.env.REACT_APP_URL}/stars/Icon_1_Stars.png`)} alt="1" onClick={() => handleClick("1")} /></Box>
        </React.Fragment>
    )

}

export default WeaponRarityFilter