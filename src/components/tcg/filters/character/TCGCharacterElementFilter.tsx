import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setElement } from "../../../../redux/reducers/TCGCharacterFilterReducer"
import { CustomTooltip } from "../../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage"

const Elements = ["Pyro", "Hydro", "Electro", "Cryo", "Anemo", "Geo", "Dendro"]

function TCGCharacterElementFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Elements.map((element, index) => (
                    <CustomTooltip key={index} title={element} arrow placement="top">
                        <img className="filter-off" id={`${element.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/elements/${element}.png`} alt={element} onClick={() => dispatch(setElement(element))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default TCGCharacterElementFilter