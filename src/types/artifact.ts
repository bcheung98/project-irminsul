import { Version } from "./version"

export interface ArtifactProps {
    artifact: Artifact
}

export interface Artifact {
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
    release: Version
}