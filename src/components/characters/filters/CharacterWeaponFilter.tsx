import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setWeapon } from "../../../redux/reducers/CharacterFilterReducer"
import { CustomTooltip } from "../../_custom/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"]

function CharacterWeaponFilter() {

    const dispatch = useDispatch()

    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <CustomTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/weapons/icons/${weapon}.png`} alt={weapon} onClick={() => dispatch(setWeapon(weapon))} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

export default CharacterWeaponFilter