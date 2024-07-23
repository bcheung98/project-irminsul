import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setBossMats } from "../../../redux/reducers/CharacterFilterReducer"
import { BossMats } from "../../../helpers/MaterialList"
import { formatBossMats } from "../../../helpers/TooltipText"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

function CharacterBossMatFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                BossMats.map((material, index) => (
                    <CustomTooltip key={index} title={formatBossMats(material)} arrow placement="top">
                        <img className="filter-off" id={`${material.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/materials/boss_mats/${material}.png`} alt={material} onClick={() => dispatch(setBossMats(material))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

export default CharacterBossMatFilter