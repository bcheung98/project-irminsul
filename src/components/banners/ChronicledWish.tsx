import { BaseSyntheticEvent, useEffect, useState } from "react";

// Component imports
import SortTableHead, {
    getComparator,
    HeadColumn,
    Order,
} from "custom/SortTableHead";

// MUI imports
import { Card, TableContainer, Table, TableBody } from "@mui/material";

// Helper imports
import store from "rtk/store";
import { useAppSelector } from "helpers/hooks";
import { selectCharacters } from "reducers/character";
import { selectWeapons } from "reducers/weapon";
import { selectChronicledWish } from "reducers/banner";
import { objectKeys } from "helpers/utils";

// Type imports
import { ChronicledWishBanner } from "types/banner";
import ChronicledWishRow from "./ChronicledWishRow";

function ChronicledWish() {
    const banners = useAppSelector(selectChronicledWish);

    const characters = useAppSelector(selectCharacters);
    const weapons = useAppSelector(selectWeapons);

    const [rows, setRows] = useState<ChronicledBannerRow[]>([]);

    const [order, setOrder] = useState<Order>("desc");
    const [orderBy, setOrderBy] = useState("subVersion");

    const handleRequestSort = (_: BaseSyntheticEvent, property: string) => {
        const isAsc = orderBy === property && order === "asc";
        setOrder(isAsc ? "desc" : "asc");
        setOrderBy(property);
    };

    const headColumns: HeadColumn[] = [{ id: "subVersion", label: "Version" }];

    useEffect(() => {}, [characters, weapons]);

    useEffect(() => {
        setRows(createBannerRows(banners));
    }, [banners]);

    return (
        <TableContainer component={Card} sx={{ width: "100%" }}>
            <Table>
                <SortTableHead
                    order={order}
                    orderBy={orderBy}
                    onRequestSort={handleRequestSort}
                    headColumns={headColumns}
                />
                <TableBody>
                    {(rows as unknown as { [x: string]: string | number }[])
                        .sort(getComparator(order, orderBy))
                        .map((row, index) => (
                            <ChronicledWishRow
                                key={index}
                                loading={
                                    [...characters, ...weapons].length === 0
                                }
                                row={row as unknown as ChronicledBannerRow}
                            />
                        ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default ChronicledWish;

export interface ChronicledBannerRow {
    version: string;
    subVersion: string;
    start: string;
    end: string;
    characters: string;
    weapons: string;
}

function createBannerRows(
    banners: ChronicledWishBanner[]
): ChronicledBannerRow[] {
    const characters = store.getState().characters.characters;
    const weapons = store.getState().weapons.weapons;

    const rows = banners.map((banner) => {
        return {
            version: banner.version,
            subVersion: banner.subVersion,
            start: banner.start,
            end: banner.end,
            characters: JSON.stringify(
                objectKeys(banner.characters).map((rarity) =>
                    banner.characters[rarity].map((char) => {
                        const character = characters.find(
                            (c) => c.name === char
                        );
                        return {
                            name: character?.name || "TBA",
                            displayName: character?.fullName || "TBA",
                            rarity: character?.rarity || 1,
                            element: character?.element,
                            weapon: character?.weapon,
                        };
                    })
                )
            ),
            weapons: JSON.stringify(
                objectKeys(banner.weapons).map((rarity) =>
                    banner.weapons[rarity].map((wep) => {
                        const weapon = weapons.find((w) => w.name === wep);
                        return {
                            name: weapon?.name || "TBA",
                            displayName: weapon?.displayName || "TBA",
                            rarity: weapon?.rarity || 1,
                            weapon: weapon?.type,
                        };
                    })
                )
            ),
        };
    });
    return rows;
}
