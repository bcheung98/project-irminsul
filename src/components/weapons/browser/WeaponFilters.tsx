import { BaseSyntheticEvent } from "react";

// Component imports
import Dropdown from "custom/Dropdown";
import Image from "custom/Image";
import ToggleButtons from "custom/ToggleButtons";

// MUI imports
import { useTheme, List, IconButton, Toolbar, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

// Helper imports
import { objectKeys } from "helpers/utils";
import { useAppDispatch, useAppSelector } from "helpers/hooks";
import { selectUnreleasedContent } from "reducers/settings";
import {
    activeWeaponFilters,
    clearFilters,
    selectWeaponFilters,
    setCommonMat,
    setWeaponType,
    setRarity,
    setEliteMat,
    setAscensionMat,
    setSubstat,
} from "reducers/weaponFilters";
import { rarities, weapons } from "data/common";
import { WeaponSubStat, weaponSubStats } from "data/weaponStats";
import {
    getWeaponAscensionMaterial,
    weaponAscensionMaterials,
} from "data/materials/weaponAscensionMaterials";
import {
    eliteMaterials,
    getEliteMaterial,
} from "data/materials/eliteMaterials";
import {
    commonMaterials,
    getCommonMaterial,
} from "data/materials/commonMaterials";
import { formatMaterialName, getMaterialKeyNames } from "helpers/materials";

// Type imports
import { WeaponType, Rarity } from "types/_common";
import {
    CommonMaterial,
    EliteMaterial,
    WeaponAscensionMaterial,
} from "types/materials";

function WeaponFilters({ handleClose }: { handleClose: (arg0: any) => void }) {
    const theme = useTheme();

    const filters = useAppSelector(selectWeaponFilters);
    const dispatch = useAppDispatch();

    const showUnrelased = useAppSelector(selectUnreleasedContent);

    const filterGroups = [
        {
            name: "Weapon",
            value: filters.weaponType,
            onChange: (_: BaseSyntheticEvent, newValues: WeaponType[]) =>
                dispatch(setWeaponType(newValues)),
            buttons: createButtons(weapons, "weapons/icons"),
        },
        {
            name: "Rarity",
            value: filters.rarity,
            onChange: (_: BaseSyntheticEvent, newValues: Rarity[]) =>
                dispatch(setRarity(newValues)),
            buttons: rarities.map((rarity) => ({
                value: rarity,
                icon: (
                    <Image
                        src={`stars/Icon_${rarity}_Stars`}
                        style={{ height: "32px", padding: "6px" }}
                    />
                ),
            })),
            width: "32px",
        },
        {
            name: "Substat",
            value: filters.substats,
            onChange: (_: BaseSyntheticEvent, newValues: WeaponSubStat[]) =>
                dispatch(setSubstat(newValues)),
            buttons: createButtons(
                objectKeys(weaponSubStats).slice(1),
                "icons/ascension_stats"
            ),
        },
        {
            name: "Ascension Material",
            value: filters.ascensionMat,
            onChange: (
                _: BaseSyntheticEvent,
                newValues: WeaponAscensionMaterial[]
            ) => dispatch(setAscensionMat(newValues)),
            buttons: createButtons(
                getMaterialKeyNames(
                    [...weaponAscensionMaterials],
                    showUnrelased
                ),
                "materials/weapon"
            ),
            width: "128px",
        },
        {
            name: "Elite Material",
            value: filters.eliteMat,
            onChange: (_: BaseSyntheticEvent, newValues: EliteMaterial[]) =>
                dispatch(setEliteMat(newValues)),
            buttons: createButtons(
                getMaterialKeyNames([...eliteMaterials], showUnrelased),
                "materials/elite"
            ),
        },
        {
            name: "Common Material",
            value: filters.commonMat,
            onChange: (_: BaseSyntheticEvent, newValues: CommonMaterial[]) =>
                dispatch(setCommonMat(newValues)),
            buttons: createButtons(
                getMaterialKeyNames([...commonMaterials], showUnrelased),
                "materials/common"
            ),
        },
    ];

    return (
        <>
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Button
                    onClick={() => dispatch(clearFilters())}
                    disabled={!useAppSelector(activeWeaponFilters)}
                    variant="contained"
                    color="secondary"
                    disableElevation
                    startIcon={<RestartAltIcon />}
                    sx={{
                        height: "32px",
                        "&.Mui-disabled": {
                            opacity: 0.35,
                            color: theme.appbar.color,
                        },
                    }}
                >
                    Reset
                </Button>
                <IconButton
                    onClick={handleClose}
                    sx={{ color: theme.appbar.color }}
                >
                    <CloseIcon />
                </IconButton>
            </Toolbar>
            <List sx={{ px: "16px" }}>
                {filterGroups.map((filter, index) => (
                    <Dropdown
                        key={index}
                        title={filter.name}
                        titleColor={
                            filter.value.length > 0
                                ? theme.text.selected
                                : theme.appbar.color
                        }
                        contentPadding="4px 0px 4px 24px"
                    >
                        <ToggleButtons
                            color="secondary"
                            buttons={filter.buttons}
                            value={filter.value}
                            onChange={filter.onChange}
                            width={filter.width || undefined}
                            spacing={4}
                            padding={"label" in filter.buttons[0] ? "0 8px" : 0}
                        />
                    </Dropdown>
                ))}
            </List>
        </>
    );
}

export default WeaponFilters;

function createButtons<T extends string>(items: readonly T[], url: string) {
    return items.map((item) => ({
        value: item,
        icon: (
            <Image
                src={`${url}/${item}${
                    ["materials/elite", "materials/common"].includes(url)
                        ? "3"
                        : ["materials/weapon"].includes(url)
                        ? "4"
                        : ""
                }`}
                alt={`${item}`}
                style={{ width: "32px", padding: "4px", borderRadius: "4px" }}
                tooltip={getTooltip(item, url)}
            />
        ),
    }));
}

function getTooltip<T extends string>(item: T, url: string) {
    let tooltip;
    if (url.startsWith("materials/weapon")) {
        tooltip = formatMaterialName(getWeaponAscensionMaterial({ tag: item }));
    } else if (url.startsWith("materials/elite")) {
        tooltip = formatMaterialName(getEliteMaterial({ tag: item }));
    } else if (url.startsWith("materials/common")) {
        tooltip = formatMaterialName(getCommonMaterial({ tag: item }));
    } else if (url.startsWith("icons/ascension_stat")) {
        tooltip = `${weaponSubStats[item as WeaponSubStat].title}`;
    } else {
        tooltip = `${item}`;
    }
    return tooltip;
}
