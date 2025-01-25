import { useMemo } from "react";

// Component imports
import Image from "custom/Image";
import SearchBar from "custom/SearchBar";
import { StyledMenuItem } from "styled/StyledMenu";
import { TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Autocomplete, Stack } from "@mui/material";

// Helper imports
import { range } from "helpers/utils";
import { useAppDispatch, useAppSelector } from "helpers/hooks";
import { selectCharacters } from "reducers/character";
import { getSelectedCharacters, setPlannerCharacters } from "reducers/planner";
import { getBackgroundColor, getRarityColor } from "helpers/rarityColors";

// Type imports
import { Character } from "types/character";
import { CharacterCostObject } from "types/costs";
import {
    BossMaterial,
    CommonMaterial,
    Gemstone,
    LocalMaterial,
    TalentMaterial,
    WeeklyBossMaterial,
} from "types/materials";

function CharacterSelector() {
    const theme = useTheme();

    const dispatch = useAppDispatch();

    const characters = [...useAppSelector(selectCharacters)].sort((a, b) =>
        a.fullName.localeCompare(b.fullName)
    );
    const options = useMemo(
        () => createOptions(characters),
        [JSON.stringify(characters)]
    );
    const values = useAppSelector(getSelectedCharacters);

    const smallIconStyle = { width: "16px", height: "16px" };

    return (
        <Autocomplete
            multiple
            autoComplete
            filterSelectedOptions
            options={options}
            getOptionLabel={(option) => option.fullName}
            filterOptions={(options, { inputValue }) =>
                options.filter(
                    (option) =>
                        option.name
                            .toLocaleLowerCase()
                            .includes(inputValue.toLocaleLowerCase()) ||
                        option.fullName
                            .toLocaleLowerCase()
                            .includes(inputValue.toLocaleLowerCase())
                )
            }
            noOptionsText="No Characters"
            value={values}
            isOptionEqualToValue={(option, value) => option.name === value.name}
            onChange={(_: any, newValue: CharacterCostObject[] | null) =>
                dispatch(
                    setPlannerCharacters(newValue as CharacterCostObject[])
                )
            }
            renderInput={(params) => (
                <SearchBar
                    params={params}
                    placeholder="Characters"
                    inputIcon={
                        <Image
                            src="icons/Aether"
                            alt="Characters"
                            style={{
                                width: "32px",
                                marginLeft: "4px",
                                backgroundColor: theme.appbar.backgroundColor,
                                borderRadius: "64px",
                            }}
                        />
                    }
                />
            )}
            renderOption={(props, option) => (
                <StyledMenuItem
                    {...props}
                    key={option.fullName}
                    sx={{
                        "&:hover": {
                            backgroundColor: theme.menu.selectedHover,
                        },
                        "&:not(:last-child)": {
                            borderBottom: `1px solid ${theme.border.color.primary}`,
                        },
                    }}
                >
                    <Stack spacing={2} direction="row" alignItems="center">
                        <Stack
                            spacing={1}
                            sx={{
                                p: "4px",
                                borderRadius: "16px",
                                backgroundColor: theme.appbar.backgroundColor,
                            }}
                        >
                            <Image
                                src={`elements/${option.element}`}
                                alt={option.element}
                                style={smallIconStyle}
                                tooltip={option.element}
                            />
                            <Image
                                src={`weapons/icons/${option.weapon}`}
                                alt={option.weapon}
                                style={smallIconStyle}
                                tooltip={option.weapon}
                            />
                        </Stack>
                        <Image
                            src={`characters/avatars/${option.name}`}
                            alt={option.name}
                            style={{
                                width: "48px",
                                height: "48px",
                                border: `2px solid ${getRarityColor(
                                    option.rarity
                                )}`,
                                borderRadius: theme.mainContentBox.borderRadius,
                                backgroundColor: theme.background(2),
                                boxShadow: `inset 0 0 24px 16px ${getBackgroundColor(
                                    option.rarity
                                )}`,
                            }}
                        />
                        <TextStyled noWrap>{option.fullName}</TextStyled>
                    </Stack>
                </StyledMenuItem>
            )}
        />
    );
}

export default CharacterSelector;

function createOptions(characters: Character[]) {
    const costArray = range(0, 4, 0);
    return characters.map(
        (char) =>
            ({
                name: char.name,
                fullName: char.fullName,
                rarity: char.rarity,
                element: char.element,
                weapon: char.weapon,
                costs: {
                    // Source of each material is mapped to a specific index in the array:
                    // [Level, Attack, Skill, Burst]
                    credits: {
                        Credit: costArray,
                    },
                    characterXP: {
                        CharacterXP1: costArray,
                        CharacterXP2: costArray,
                        CharacterXP3: costArray,
                    },
                    bossMat: {
                        [`${char.materials.bossMat}` as BossMaterial]:
                            costArray,
                    },
                    weeklyBossMat: {
                        [`${char.materials.weeklyBossMat}` as WeeklyBossMaterial]:
                            costArray,
                    },
                    crown: {
                        Crown: costArray,
                    },
                    gemstone: {
                        [`${char.element}1` as Gemstone]: costArray,
                        [`${char.element}2` as Gemstone]: costArray,
                        [`${char.element}3` as Gemstone]: costArray,
                        [`${char.element}4` as Gemstone]: costArray,
                    },
                    localMat: {
                        [`${char.materials.localMat}` as LocalMaterial]:
                            costArray,
                    },
                    talentBook: {
                        [`${char.materials.talentBook}1` as TalentMaterial]:
                            costArray,
                        [`${char.materials.talentBook}2` as TalentMaterial]:
                            costArray,
                        [`${char.materials.talentBook}3` as TalentMaterial]:
                            costArray,
                    },
                    commonMat: {
                        [`${char.materials.commonMat}1` as CommonMaterial]:
                            costArray,
                        [`${char.materials.commonMat}2` as CommonMaterial]:
                            costArray,
                        [`${char.materials.commonMat}3` as CommonMaterial]:
                            costArray,
                    },
                },
            } as CharacterCostObject)
    );
}
