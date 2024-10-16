import { createAsyncThunk } from "@reduxjs/toolkit"
import { CharacterData } from "../../types/character/CharacterData"
import { WeaponData } from "../../types/weapon/WeaponData"
import { TCGCardData } from "../../types/tcg/TCGData"
import { ArtifactData } from "../../types/artifact/ArtifactData"
import { BannerData, ChronicledWishBannerData } from "../../types/banner/BannerData"

// https://api.irminsul.gg/genshin/characters.json
const CharactersURL = "https://api.irminsul.gg/genshin/characters.json"

// https://api.irminsul.gg/genshin/weapons.json
const WeaponsURL = "https://api.irminsul.gg/genshin/weapons.json"

// https://api.irminsul.gg/genshin/cards.json
const CardsURL = "https://api.irminsul.gg/genshin/cards.json"

// https://api.irminsul.gg/genshin/artifacts.json
const ArtifactsURL = "https://api.irminsul.gg/genshin/artifacts.json"

const CharacterBannerURL = "https://api.irminsul.gg/genshin/character-banners-v2.json"
const WeaponBannerURL = "https://api.irminsul.gg/genshin/weapon-banners-v2.json"
const ChronicledWishURL = "https://api.irminsul.gg/genshin/chronicled-wish-v2.json"

export const fetchCharacters = createAsyncThunk("GET/characters", async (): Promise<[CharacterData]> => {
    const response = await fetch(CharactersURL)
    return await response.json()
})

export const fetchWeapons = createAsyncThunk("GET/weapons", async (): Promise<[WeaponData]> => {
    const response = await fetch(WeaponsURL)
    return await response.json()
})

export const fetchCards = createAsyncThunk("GET/cards", async (): Promise<[TCGCardData]> => {
    const response = await fetch(CardsURL)
    return await response.json()
})

export const fetchArtifacts = createAsyncThunk("GET/artifacts", async (): Promise<[ArtifactData]> => {
    const response = await fetch(ArtifactsURL)
    return await response.json()
})

export const fetchCharacterBanners = createAsyncThunk("GET/characterBanners", async (): Promise<[BannerData]> => {
    const response = await fetch(CharacterBannerURL)
    return await response.json()
})

export const fetchWeaponBanners = createAsyncThunk("GET/weaponBanners", async (): Promise<[BannerData]> => {
    const response = await fetch(WeaponBannerURL)
    return await response.json()
})

export const fetchChronicledWish = createAsyncThunk("GET/chronicledWish", async (): Promise<[ChronicledWishBannerData]> => {
    const response = await fetch(ChronicledWishURL)
    return await response.json()
})