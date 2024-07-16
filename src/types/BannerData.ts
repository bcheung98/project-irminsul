export interface BannerData {
    version: string,
    phase1: {
        startDate: string,
        endDate: string,
        banner: string[]
    },
    phase2?: {
        startDate: string,
        endDate: string,
        banner: string[]
    },
    phase3?: {
        startDate: string,
        endDate: string,
        banner: string[]
    }
}

export interface ChronicledWishBannerData {
    version: string,
    phase1: {
        startDate: string,
        endDate: string,
        banner: {
            characters: {
                fiveStars: string[],
                fourStars: string[]
            },
            weapons: {
                fiveStars: string[],
                fourStars: string[]
            }
        }
    },
    phase2?: {
        startDate: string,
        endDate: string,
        banner: {
            characters: {
                fiveStars: string[],
                fourStars: string[]
            },
            weapons: {
                fiveStars: string[],
                fourStars: string[]
            }
        }
    }
}