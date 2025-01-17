import { NestedKeyOf } from "./_common";
import {
    characterXPMaterials,
    weaponXPMaterials,
} from "data/materials/xpMaterials";
import { talentBookNames } from "data/materials/talentMaterials";
import { commonMaterials } from "data/materials/commonMaterials";
import { localSpecialtyNames } from "data/materials/localMaterials";
import { bossMaterials } from "data/materials/bossMaterials";
import { weeklyBossMatNames } from "data/materials/weeklyBossMaterials";
import { gemstones } from "data/materials/gemstones";
import { eliteMaterials } from "data/materials/eliteMaterials";
import { weaponAscensionMaterials } from "data/materials/weaponAscensionMaterials";

export type CharacterXPMaterial = keyof typeof characterXPMaterials;
export type WeaponXPMaterial = keyof typeof weaponXPMaterials;

export type TalentMaterialKeys = (typeof talentBookNames)[number];
export type TalentMaterial = `${TalentMaterialKeys}${1 | 2 | 3 | ""}`;

export type CommonMaterialKeys = keyof typeof commonMaterials;
export type CommonMaterial = NestedKeyOf<typeof commonMaterials>;

export type LocalMaterial = (typeof localSpecialtyNames)[number];

export type BossMaterial = keyof typeof bossMaterials;
export type WeeklyBossMaterial = (typeof weeklyBossMatNames)[number];

export type Gemstone = NestedKeyOf<typeof gemstones>;

export type EliteMaterialKeys = keyof typeof eliteMaterials;
export type EliteMaterial = NestedKeyOf<typeof eliteMaterials>;

export type WeaponAscensionMaterialKeys = keyof typeof weaponAscensionMaterials;
export type WeaponAscensionMaterial = NestedKeyOf<
    typeof weaponAscensionMaterials
>;

export interface Materials {
    talentBook?: TalentMaterialKeys;
    commonMat?: CommonMaterialKeys;
    localMat?: LocalMaterial;
    bossMat?: BossMaterial;
    weeklyBossMat?: WeeklyBossMaterial;
    weaponAscensionMat?: WeaponAscensionMaterialKeys;
    eliteMat?: EliteMaterialKeys;
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
