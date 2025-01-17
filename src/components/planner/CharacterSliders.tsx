// Component imports
import LevelSlider from "components/planner/LevelSlider";

// MUI imports
import { useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { range } from "helpers/utils";
import {
    getCharacterLevelCost,
    getCharacterSkillCost,
} from "helpers/getLevelUpCosts";

// Type imports
import { CharacterCostObject, UpdateCostsPayload } from "types/costs";
import { CardMode } from "./PlannerCard";

function CharacterSliders({
    character,
    mode,
}: {
    character: CharacterCostObject;
    mode: CardMode;
}) {
    const theme = useTheme();

    const name = character.name.toLowerCase();

    const sliders: {
        title: string;
        icon?: string;
        levels: (string | number)[];
        type: UpdateCostsPayload["type"];
        fn: Function;
    }[] = [
        {
            title: "Level",
            levels: charLevel,
            type: "level",
            fn: getCharacterLevelCost,
        },
        {
            title: "Normal Attack",
            icon: `weapons/icons/${character.weapon}`,
            levels: skillLevel,
            type: "attack",
            fn: getCharacterSkillCost,
        },
        {
            title: "Elemental Skill",
            icon: `characters/talents/${name}_skill`,
            levels: skillLevel,
            type: "skill",
            fn: getCharacterSkillCost,
        },
        {
            title: "Elemental Burst",
            icon: `characters/talents/${name}_burst`,
            levels: skillLevel,
            type: "burst",
            fn: getCharacterSkillCost,
        },
    ];

    const [Level, Attack, Skill, Burst] = sliders.map((slider) => (
        <LevelSlider
            mode={mode}
            key={slider.type}
            name={character.name}
            variant="character"
            title={slider.title}
            icon={slider.icon}
            levels={slider.levels}
            color={theme.elementColor(character.element)}
            dispatchProps={{
                type: slider.type,
                getCost: slider.fn,
            }}
        />
    ));

    return (
        <Grid container rowSpacing={1} columnSpacing={mode === "view" ? 2 : 6}>
            <Grid size={12}>{Level}</Grid>
            {[Attack, Skill, Burst].map((slider, index) => (
                <Grid
                    key={index}
                    size={
                        mode === "view" ? { xs: 12, sm: 4 } : { xs: 12, md: 6 }
                    }
                >
                    {slider}
                </Grid>
            ))}
        </Grid>
    );
}

export default CharacterSliders;

const charLevel = [
    "1",
    "20",
    "20+",
    "40",
    "40+",
    "50",
    "50+",
    "60",
    "60+",
    "70",
    "70+",
    "80",
    "80+",
    "90",
];

const skillLevel = range(1, 10);
