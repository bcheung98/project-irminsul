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
import { getBossMaterial } from "data/materials/bossMaterials";
import { getWeeklyBossMaterial } from "data/materials/weeklyBossMaterials";
import { getGemstone } from "data/materials/gemstones";
import { getLocalMaterial } from "data/materials/localMaterials";
import { getTalentMaterial } from "data/materials/talentMaterials";
import { getCommonMaterial } from "data/materials/commonMaterials";

// Type imports
import { Character } from "types/character";
import { CharacterCostObject } from "types/costs";

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
            disableClearable
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
            onChange={(
                event,
                newValue: CharacterCostObject[] | null,
                reason
            ) => {
                if (
                    event.type === "keydown" &&
                    ((event as React.KeyboardEvent).key === "Backspace" ||
                        (event as React.KeyboardEvent).key === "Delete") &&
                    reason === "removeOption"
                ) {
                    return;
                }
                dispatch(
                    setPlannerCharacters(newValue as CharacterCostObject[])
                );
            }}
            renderTags={() => null}
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
                id: `character_${char.id}`,
                name: char.name,
                fullName: char.fullName,
                rarity: char.rarity,
                element: char.element,
                weapon: char.weapon,
                release: char.release,
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
                        [getBossMaterial({ tag: char.materials.bossMat })?.id!]:
                            costArray,
                    },
                    weeklyBossMat: {
                        [getWeeklyBossMaterial({
                            tag: char.materials.weeklyBossMat,
                        })?.id!]: costArray,
                    },
                    crown: {
                        Crown: costArray,
                    },
                    gemstone: {
                        [getGemstone({ tag: `${char.element}1` })?.id!]:
                            costArray,
                        [getGemstone({ tag: `${char.element}2` })?.id!]:
                            costArray,
                        [getGemstone({ tag: `${char.element}3` })?.id!]:
                            costArray,
                        [getGemstone({ tag: `${char.element}4` })?.id!]:
                            costArray,
                    },
                    localMat: {
                        [getLocalMaterial({ tag: char.materials.localMat })
                            ?.id!]: costArray,
                    },
                    talentBook: {
                        [getTalentMaterial({
                            tag: `${char.materials.talentBook}1`,
                        })?.id!]: costArray,
                        [getTalentMaterial({
                            tag: `${char.materials.talentBook}2`,
                        })?.id!]: costArray,
                        [getTalentMaterial({
                            tag: `${char.materials.talentBook}3`,
                        })?.id!]: costArray,
                    },
                    commonMat: {
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}1`,
                        })?.id!]: costArray,
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}2`,
                        })?.id!]: costArray,
                        [getCommonMaterial({
                            tag: `${char.materials.commonMat}3`,
                        })?.id!]: costArray,
                    },
                },
                values: {
                    level: {},
                    attack: {},
                    skill: {},
                    burst: {},
                },
                dataFormat: "v2",
            } as CharacterCostObject)
    );
}
