import { BannerPhaseData } from "./BannerPhaseData"
import { ChronicledWishPhaseData } from "../banner/ChronicledWishPhaseData"

export type BannerData = {
    version: string,
    phase1: BannerPhaseData,
    phase2?: BannerPhaseData,
    phase3?: BannerPhaseData
}

export type ChronicledWishBannerData = {
    version: string,
    phase1: ChronicledWishPhaseData,
    phase2?: ChronicledWishPhaseData
}