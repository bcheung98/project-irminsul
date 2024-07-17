import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setGender } from "../../../redux/reducers/CharacterFilterReducer"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterGenderFilter() {

    const dispatch = useDispatch()

    const handleClick = (gender: string) => {
        dispatch(setGender(gender))
    }

    return (
        <Box>
            <CustomTooltip title="Male" arrow placement="top">
                <img className="filter-off" id="male-button" src={(`${process.env.REACT_APP_URL}/icons/Aether.png`)} alt="Male" onClick={() => handleClick("Male")} onError={ErrorLoadingImage} />
            </CustomTooltip>
            <CustomTooltip title="Female" arrow placement="top">
                <img className="filter-off" id="female-button" src={(`${process.env.REACT_APP_URL}/icons/Lumine.png`)} alt="Female" onClick={() => handleClick("Female")} onError={ErrorLoadingImage} />
            </CustomTooltip>
        </Box>
    )
}

export default CharacterGenderFilter