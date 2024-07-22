import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setWeapon } from "../../../../redux/reducers/TCGCharacterFilterReducer"
import { CustomTooltip } from "../../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../../helpers/ErrorLoadingImage"

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst", "Other Weapons"]

function TCGCharacterWeaponFilter() {

    const dispatch = useDispatch()

    const handleClick = (weapon: string) => {
        dispatch(setWeapon(weapon))
    }

    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <CustomTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/tcg/icons/weapons/${weapon}.png`} alt={weapon} onClick={() => handleClick(weapon)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )
}

export default TCGCharacterWeaponFilter