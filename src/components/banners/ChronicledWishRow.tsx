// Component imports
import InfoCard from "custom/InfoCard";
import { StyledTableCell, StyledTableRow } from "styled/StyledTable";
import { TextStyled } from "styled/StyledTypography";

// MUI imports
import { getContrastRatio, Stack, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";

// Helper imports
import store from "rtk/store";
import { useAppSelector } from "helpers/hooks";
import { selectServer } from "reducers/settings";
import { createDateObject, isCurrentBanner } from "helpers/dates";
import { isTBA } from "helpers/utils";

// Type imports
import { ChronicledBannerRow } from "./ChronicledWish";
import { Character } from "types/character";
import { Weapon } from "types/weapon";

function ChronicledWishRow({
    loading,
    row,
}: {
    loading: boolean;
    row: ChronicledBannerRow;
}) {
    const theme = useTheme();

    const region = useAppSelector(selectServer);

    const { version, subVersion } = row;

    const characters = JSON.parse(row.characters).flat();
    const weapons = JSON.parse(row.weapons).flat();
    const start = createDateObject({ date: row.start, region: region });
    const end = createDateObject({ date: row.end, region: region });

    const backgroundColor = isCurrentBanner(start.obj, end.obj)
        ? theme.palette.info.dark
        : theme.palette.background.paper;

    return (
        <StyledTableRow sx={{ backgroundColor: backgroundColor }}>
            <StyledTableCell>
                <TextStyled
                    sx={{
                        mb: "8px",
                        color:
                            getContrastRatio(
                                backgroundColor,
                                theme.text.primary
                            ) > 4.5
                                ? theme.text.primary
                                : theme.text.contrast,
                    }}
                >
                    {`${version} Phase ${subVersion.split(".")[2]}: ${
                        start.date
                    } — ${end.date}`}
                </TextStyled>
                <Stack spacing={1}>
                    <Grid container spacing={1}>
                        {characters.map((item: Character, index: number) => (
                            <InfoCard
                                key={index}
                                id={`${item.displayName}-${subVersion}-CW-${index}`}
                                variant="icon"
                                type="character"
                                name={item.name}
                                displayName={item.displayName}
                                rarity={!isTBA(item.name) ? item.rarity : 1}
                                disableLink={isTBA(item.name)}
                                disableZoomOnHover={isTBA(item.name)}
                                loading={loading}
                                imgLoad="lazy"
                            />
                        ))}
                    </Grid>
                    <Grid container spacing={1}>
                        {weapons.map((item: Weapon, index: number) => (
                            <InfoCard
                                key={index}
                                id={`${item.displayName}-${subVersion}-CW-${index}`}
                                variant="icon"
                                type="weapon"
                                name={item.name}
                                displayName={item.displayName}
                                rarity={!isTBA(item.name) ? item.rarity : 1}
                                disableLink={isTBA(item.name)}
                                disableZoomOnHover={isTBA(item.name)}
                                loading={loading}
                                imgLoad="lazy"
                            />
                        ))}
                    </Grid>
                </Stack>
            </StyledTableCell>
        </StyledTableRow>
    );
}

export default ChronicledWishRow;

interface BannerItem {
    name: string;
    displayName: string;
}

export function createBannerItems(
    items: string[],
    type: "character" | "weapon"
): BannerItem[] {
    const characters = store.getState().characters.characters;
    const weapons = store.getState().weapons.weapons;
    console.log(items);
    return items.map((item: string) => {
        if (isTBA(item)) {
            return {
                name: "",
                displayName: "",
            };
        } else {
            if (type === "character") {
                const character = characters.find((char) => char.name === item);
                return {
                    name: character?.name || "TBA",
                    displayName: character?.fullName || "TBA",
                };
            } else {
                const weapon = weapons.find((wep) => wep.name === item);
                return {
                    name: weapon?.name || "TBA",
                    displayName: weapon?.displayName || "TBA",
                };
            }
        }
    });
}
