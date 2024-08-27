import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setSubType } from "../../../../redux/reducers/TCGActionFilterReducer"
import { CustomTooltip } from "../../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage"

const SubTypes = ["Arcane Legend", "Artifact", "Companion", "Elemental Resonance", "Food", "Item", "Location", "Talent", "Technique", "Weapon"]

function TCGActionSubTypeFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                SubTypes.map((subType, index) => (
                    <CustomTooltip key={index} title={subType} arrow placement="top">
                        <img className="filter-off" id={`tcg-action-${subType.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/subtypes/${subType.split(" ").join("_")}.png`} alt={subType} onClick={() => dispatch(setSubType(subType))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default TCGActionSubTypeFilter