import * as React from "react"
import { useDispatch } from "react-redux"

// Helper imports
import { setWeaponType } from "../../../redux/reducers/WeaponFilterReducer"
import { CustomTooltip } from "../../../helpers/CustomTooltip"
import ErrorLoadingImage from "../../../helpers/ErrorLoadingImage"

const Weapons = ["Sword", "Claymore", "Polearm", "Bow", "Catalyst"]

function WeaponTypeFilter() {

    const dispatch = useDispatch()

    const handleClick = (weapon: string) => {
        dispatch(setWeaponType(weapon))
    }

    return (
        <React.Fragment>
            {
                Weapons.map((weapon, index) => (
                    <CustomTooltip key={index} title={weapon} arrow placement="top">
                        <img className="filter-off" id={`weapon-${weapon.toLowerCase()}-button`} src={`${process.env.REACT_APP_URL}/weapons/icons/Icon_${weapon}.png`} alt={weapon} onClick={() => handleClick(weapon)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                ))
            }
        </React.Fragment>
    )

}

export default WeaponTypeFilter