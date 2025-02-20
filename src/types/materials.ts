import { Version } from "./version";
import { Rarity } from "./_common";
import {
    characterXPMatNames,
    weaponXPMatNames,
} from "data/materials/xpMaterials";
import { talentMatNames } from "data/materials/talentMaterials";
import { commonMatNames } from "data/materials/commonMaterials";
import { localMatNames } from "data/materials/localMaterials";
import { bossMatNames } from "data/materials/bossMaterials";
import { weeklyBossMatNames } from "data/materials/weeklyBossMaterials";
import { gemstoneNames } from "data/materials/gemstones";
import { eliteMatNames } from "data/materials/eliteMaterials";
import { weaponAscensionMatNames } from "data/materials/weaponAscensionMaterials";

export type MaterialCategory =
    | "credits"
    | "characterXP"
    | "weaponXP"
    | "bossMat"
    | "weeklyBossMat"
    | "crown"
    | "gemstone"
    | "localMat"
    | "talentBook"
    | "commonMat"
    | "weaponAscensionMat"
    | "eliteMat";

export interface Material {
    id: string;
    category: MaterialCategory;
    tag: string;
    name: string;
    displayName: string;
    source?: string;
    rarity?: Rarity;
    release: Version;
}

export type CharacterXPMaterial = (typeof characterXPMatNames)[number];
export type WeaponXPMaterial = (typeof weaponXPMatNames)[number];

export type TalentMaterial = (typeof talentMatNames)[number];
export type CommonMaterial = (typeof commonMatNames)[number];
export type LocalMaterial = (typeof localMatNames)[number];
export type BossMaterial = (typeof bossMatNames)[number];
export type WeeklyBossMaterial = (typeof weeklyBossMatNames)[number];
export type Gemstone = (typeof gemstoneNames)[number];

export type EliteMaterial = (typeof eliteMatNames)[number];
export type WeaponAscensionMaterial = (typeof weaponAscensionMatNames)[number];

export interface Materials {
    talentBook?: TalentMaterial;
    commonMat?: CommonMaterial;
    localMat?: LocalMaterial;
    bossMat?: BossMaterial;
    weeklyBossMat?: WeeklyBossMaterial;
    weaponAscensionMat?: WeaponAscensionMaterial;
    eliteMat?: EliteMaterial;
}

export type CharacterMaterials = Required<
    Pick<
        Materials,
        "talentBook" | "commonMat" | "localMat" | "bossMat" | "weeklyBossMat"
    >
>;
export type WeaponMaterials = Required<
    Pick<Materials, "weaponAscensionMat" | "eliteMat" | "commonMat">
>;
