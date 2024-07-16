import { createAsyncThunk } from "@reduxjs/toolkit"
import { CharacterData } from "../../types/CharacterData"
import { WeaponData } from "../../types/WeaponData"
import { TCGCharacterCardData, TCGActionCardData } from "../../types/TCGData"
import { ArtifactData } from "../../types/ArtifactData"
import { BannerData, ChronicledWishBannerData } from "../../types/BannerData"

// https://bcheung98.github.io/project-irminsul-db/characters.json
const CharactersURL = "https://bcheung98.github.io/project-irminsul-db/characters.json"

// https://bcheung98.github.io/project-irminsul-db/weapons.json
const WeaponsURL = "https://bcheung98.github.io/project-irminsul-db/weapons.json"

// https://bcheung98.github.io/project-irminsul-db/cards.json
const CardsURL = "https://bcheung98.github.io/project-irminsul-db/cards.json"

// https://bcheung98.github.io/project-irminsul-db/artifacts.json
const ArtifactsURL = "https://bcheung98.github.io/project-irminsul-db/artifacts.json"

const CharacterBannerURL = "https://bcheung98.github.io/project-irminsul-db/characterBanners.json"
const WeaponBannerURL = "https://bcheung98.github.io/project-irminsul-db/weaponBanners.json"
const ChronicledWishURL = "https://bcheung98.github.io/project-irminsul-db/chronicledWish.json"

export const fetchCharacters = createAsyncThunk("GET/characters", async (): Promise<[CharacterData]> => {
    const response = await fetch(CharactersURL)
    return await response.json()
})

export const fetchWeapons = createAsyncThunk("GET/weapons", async (): Promise<[WeaponData]> => {
    const response = await fetch(WeaponsURL)
    return await response.json()
})

export const fetchCards = createAsyncThunk("GET/cards", async (): Promise<[TCGCharacterCardData] | [TCGActionCardData]> => {
    const response = await fetch(CardsURL)
    return await response.json()
})

export const fetchArtifacts = createAsyncThunk("GET/artifacts", async (): Promise<[ArtifactData]> => {
    const response = await fetch(ArtifactsURL)
    return await response.json()
})

export const fetchBanners = createAsyncThunk("GET/characterBanners", async (): Promise<[BannerData]> => {
    const response = await fetch(CharacterBannerURL)
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