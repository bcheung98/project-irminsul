import * as React from "react"
import { useDispatch } from "react-redux"

// MUI imports
import { Box } from "@mui/material"

// Helper imports
import { setType } from "../../../../redux/reducers/TCGActionFilterReducer"
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage"

const Types = ["Event", "Equipment", "Support"]

function TCGActionTypeFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Types.map((type, index) => (
                    <Box sx={{ display: "inline-flex", mr: "5px" }} key={index}>
                        {/* This is intentionally a <p> */}
                        <p className="filter-button-off" id={`tcg-action-${type.toLowerCase()}-button`} onClick={() => dispatch(setType(type))} onError={ErrorLoadingImage}>
                            {type}
                        </p>
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

export default TCGActionTypeFilter