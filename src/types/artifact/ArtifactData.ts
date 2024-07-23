export interface ArtifactData {
    name: string,
    rarity: number,
    setEffect: {
        onePiece?: string,
        twoPiece?: string,
        fourPiece?: string
    },
    pieces: {
        type: string,
        name: string,
        description: string
    }[],
    release: {
        version: string
    }
}