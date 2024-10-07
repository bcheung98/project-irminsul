import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setTalentBook } from "../../../redux/reducers/CharacterFilterReducer"
import { formatTalents } from "../../../helpers/TooltipText"
import { TalentBooks } from "../../../helpers/MaterialList"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterTalentFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Object.keys(TalentBooks).map((nation, index) => (
                    <Box key={index}>
                        {
                            (TalentBooks[nation as keyof {}] as []).map((talent: string, index) => (
                                <CustomTooltip key={index} title={formatTalents(`${talent}`)} arrow placement="top">
                                    <img className="filter-off" id={`${talent.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/talent_mats/${talent}3.png`} alt={talent} onClick={() => dispatch(setTalentBook(talent))} onError={ErrorLoadingImage} />
                                </CustomTooltip>
                            ))
                        }
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

export default CharacterTalentFilter