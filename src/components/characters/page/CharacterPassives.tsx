// Component imports
import MainContentBox from "custom/MainContentBox";
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Stack, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { CharacterPassiveType, CharacterProps } from "types/character";

function CharacterPassives({ character }: CharacterProps) {
    const theme = useTheme();

    const { name, element, passives } = character;

    return (
        <MainContentBox title="Passive Talents">
            <Grid container spacing={3}>
                {passives.map((passive, index) => (
                    <Grid
                        key={index}
                        size={{ xs: 12, md: 6 }}
                        sx={{
                            p: 2,
                            backgroundColor: theme.background(1, "light"),
                            border: theme.mainContentBox.border,
                            borderRadius: theme.mainContentBox.borderRadius,
                        }}
                    >
                        <Stack
                            key={index}
                            spacing={2}
                            direction="row"
                            alignItems="center"
                            sx={{ mb: "8px" }}
                        >
                            <Image
                                src={`characters/talents/${name.toLowerCase()}_${
                                    passive.type
                                }passive`}
                                alt={passive.name}
                                style={theme.styles.skillIcon(element)}
                            />
                            <Box>
                                <TextStyled variant="h6-styled">
                                    {passive.name}
                                </TextStyled>
                                <TextStyled sx={{ fontStyle: "italic" }}>
                                    {formatPassiveKey(passive.type)}
                                </TextStyled>
                            </Box>
                        </Stack>
                        <Text
                            component="span"
                            sx={{ color: theme.text.description }}
                        >
                            {parseSkillDescription({
                                description: passive.description,
                            })}
                        </Text>
                    </Grid>
                ))}
            </Grid>
        </MainContentBox>
    );
}

export default CharacterPassives;

function formatPassiveKey(type: CharacterPassiveType) {
    switch (type) {
        case "a1":
            return "1st Ascension Passive";
        case "a4":
            return "4th Ascension Passive";
        case "nightsoul":
            return "Night Realm's Gift Passive";
        case "util":
            return "Utility Passive";
        case "":
        default:
            return "Passive Talent";
    }
}
