import { Rarity } from "./_common";
import { Version } from "./version";

export interface ArtifactProps {
    artifact: Artifact;
}

export interface Artifact {
    name: string;
    displayName: string;
    rarity: Rarity;
    setEffect: {
        onePiece?: string;
        twoPiece?: string;
        fourPiece?: string;
    };
    pieces: {
        type: ArtifactPiece;
        name: string;
        description: string;
    }[];
    release: Version;
}

export type ArtifactPiece =
    | "flower"
    | "feather"
    | "sands"
    | "goblet"
    | "circlet";
