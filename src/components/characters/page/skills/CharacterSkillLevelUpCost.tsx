// Component imports
import Dropdown from "custom/Dropdown";
import LevelUpCosts from "custom/LevelUpCosts";

// MUI imports
import { useTheme } from "@mui/material";

// Type imports
import { CharacterSkillLevelUpProps } from "./CharacterSkillTab";

function CharacterSkillLevelUpCost({
    skillKey,
    element,
    materials,
}: CharacterSkillLevelUpProps) {
    const theme = useTheme();

    return (
        <Dropdown
            title="Level Up Cost"
            iconColor={theme.elementColor(element)}
            contentPadding="16px 24px 0px 24px"
        >
            <LevelUpCosts
                type="character"
                skillKey={skillKey}
                element={element}
                mats={materials}
                threshold="@250"
            />
        </Dropdown>
    );
}

export default CharacterSkillLevelUpCost;
