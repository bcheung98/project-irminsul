import { elements, weaponTypes, rarity, nations } from "../data/common"

export type Element = typeof elements[number]
export type WeaponType = typeof weaponTypes[number]
export type Rarity = typeof rarity[number]
export type Nation = typeof nations[number]