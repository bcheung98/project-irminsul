import parse from "html-react-parser";

// Component imports
import Image from "custom/Image";
import { TextStyled } from "styled/StyledTypography";
import { FlexBox } from "styled/StyledBox";

// MUI imports
import { useTheme, Box, Divider, Card, Stack } from "@mui/material";

// Type imports
import { WeaponProps } from "types/weapon";

function WeaponInfo({ weapon }: WeaponProps) {
    const theme = useTheme();

    const { displayName, rarity, type, description } = weapon;

    return (
        <Card
            sx={{
                p: "16px",
                backgroundColor: theme.background(2),
            }}
        >
            <Stack spacing={2} divider={<Divider />}>
                <FlexBox
                    sx={{ flexWrap: "wrap", columnGap: "16px", rowGap: "8px" }}
                >
                    <Image
                        src={`weapons/icons/${type}`}
                        alt={type}
                        style={{
                            width: "64px",
                            height: "64px",
                            backgroundColor: theme.appbar.backgroundColor,
                            borderRadius: "64px",
                        }}
                        tooltip={type}
                    />
                    <Box>
                        <Box sx={{ mb: "8px" }}>
                            <TextStyled variant="h4-styled">
                                {displayName}
                            </TextStyled>
                        </Box>
                        <FlexBox sx={{ flexWrap: "wrap", gap: "8px" }}>
                            <Image
                                src={`stars/Icon_${rarity}_Stars`}
                                alt={rarity}
                                style={{
                                    padding: "4px 8px",
                                    height: "32px",
                                    backgroundColor:
                                        theme.palette.tertiary.main,
                                    borderRadius: "64px",
                                }}
                            />
                        </FlexBox>
                    </Box>
                </FlexBox>
                {description && (
                    <TextStyled
                        variant="subtitle1-styled"
                        sx={{ fontStyle: "italic" }}
                    >
                        {parse(description)}
                    </TextStyled>
                )}
            </Stack>
        </Card>
    );
}

export default WeaponInfo;
