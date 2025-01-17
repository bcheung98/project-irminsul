// Component imports
import MainContentBox from "custom/MainContentBox";
import Image from "custom/Image";
import { Text, TextStyled } from "styled/StyledTypography";

// MUI imports
import { useTheme, Stack, Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import { objectKeys } from "helpers/utils";
import { parseSkillDescription } from "helpers/parseSkillDescription";

// Type imports
import { CharacterProps } from "types/character";

function CharacterConstellation({ character }: CharacterProps) {
    const theme = useTheme();

    const { name, element, constellation } = character;

    return (
        <MainContentBox title="Constellation">
            <Grid container spacing={3}>
                {objectKeys(constellation).map(
                    (key, index) =>
                        key !== "name" && (
                            <Grid
                                key={key}
                                size={{ xs: 12, md: 6 }}
                                sx={{
                                    p: 2,
                                    backgroundColor: theme.background(
                                        1,
                                        "light"
                                    ),
                                    border: theme.mainContentBox.border,
                                    borderRadius:
                                        theme.mainContentBox.borderRadius,
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
                                        src={`characters/constellations/${name.toLowerCase()}_${key}`}
                                        alt={key}
                                        style={theme.styles.skillIcon(element)}
                                    />
                                    <Box>
                                        <TextStyled variant="h6-styled">
                                            {constellation[key].name}
                                        </TextStyled>
                                        <TextStyled
                                            sx={{ fontStyle: "italic" }}
                                        >
                                            {key.toUpperCase()}
                                        </TextStyled>
                                    </Box>
                                </Stack>
                                <Text
                                    component="span"
                                    sx={{ color: theme.text.description }}
                                >
                                    {parseSkillDescription({
                                        description:
                                            constellation[key].description,
                                    })}
                                </Text>
                            </Grid>
                        )
                )}
            </Grid>
        </MainContentBox>
    );
}

export default CharacterConstellation;
