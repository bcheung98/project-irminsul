export interface Banner {
    version: string;
    subVersion: string;
    start: string;
    end: string;
    fiveStars: string[];
    fourStars: string[];
}

export interface ChronicledWishBanner {
    version: string;
    subVersion: string;
    start: string;
    end: string;
    characters: {
        fiveStars: string[];
        fourStars: string[];
    };
    weapons: {
        fiveStars: string[];
        fourStars: string[];
    };
}
