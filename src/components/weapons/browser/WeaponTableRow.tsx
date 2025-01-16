import parse from "html-react-parser";

// Component imports
import Image from "custom/Image";
import RouterLink from "components/nav/RouterLink";
import { StyledTableRow, StyledTableCell } from "styled/StyledTable";
import { TextStyled } from "styled/StyledTypography";
import { FlexBox } from "styled/StyledBox";

// MUI imports
import { useTheme } from "@mui/material";

// Helper imports
import { combineStyles } from "helpers/utils";

// Type imports
import { WeaponRow } from "./WeaponTable";

interface WeaponTableRowProps extends WeaponRow {
    baseATK: string;
    subStat: string;
}

function WeaponTableRow({ row }: { row: WeaponTableRowProps }) {
    const theme = useTheme();

    const columns = [
        {
            label: row.displayName,
            labelStyle: {
                cursor: "pointer",
                "&:hover": {
                    color: theme.text.selected,
                    textDecoration: "underline",
                },
            },
            img: `weapons/${row.name}`,
            imgStyle: {
                width: "48px",
                height: "auto",
                cursor: "pointer",
            },
            href: `/weapons/${row.name.split(" ").join("_").toLowerCase()}`,
        },
        {
            img: `stars/Icon_${row.rarity}_Stars`,
            imgStyle: {
                width: "auto",
                height: "20px",
            },
        },
        {
            label: row.type,
            img: `weapons/icons/${row.type}`,
            imgStyle: {
                backgroundColor: theme.icon.backgroundColor,
                borderRadius: "64px",
            },
        },
        {
            label: row.baseATK,
            labelStyle: { marginLeft: "0px" },
        },
        {
            label: row.subStat !== "_" ? row.subStat : "---",
            labelStyle: { marginLeft: "0px" },
            img:
                row.subStat !== "_" &&
                `icons/ascension_stats/${row.subStat
                    .split(" ")
                    .slice(0, -1)
                    .join(" ")}`,
            imgStyle: {
                backgroundColor: theme.icon.backgroundColor,
                borderRadius: "64px",
            },
        },
    ];

    return (
        <StyledTableRow color="secondary" hover>
            {columns.map((col, index) => (
                <StyledTableCell key={index}>
                    <FlexBox columnGap="16px">
                        {col.img &&
                            (col.href ? (
                                <RouterLink to={col.href}>
                                    <Image
                                        src={col.img}
                                        alt={col.label}
                                        style={combineStyles(
                                            {
                                                width: "32px",
                                                height: "32px",
                                            },
                                            col.imgStyle
                                        )}
                                    />
                                </RouterLink>
                            ) : (
                                <Image
                                    src={col.img}
                                    alt={col.label}
                                    style={combineStyles(
                                        {
                                            width: "32px",
                                            height: "32px",
                                        },
                                        col.imgStyle
                                    )}
                                />
                            ))}
                        {col.label &&
                            (col.href ? (
                                <RouterLink to={col.href}>
                                    <TextStyled
                                        sx={combineStyles(
                                            { textAlign: "left" },
                                            col.labelStyle
                                        )}
                                    >
                                        {parse(col.label)}
                                    </TextStyled>
                                </RouterLink>
                            ) : (
                                <TextStyled
                                    sx={combineStyles(
                                        { textAlign: "left" },
                                        col.labelStyle
                                    )}
                                >
                                    {parse(col.label)}
                                </TextStyled>
                            ))}
                    </FlexBox>
                </StyledTableCell>
            ))}
        </StyledTableRow>
    );
}

export default WeaponTableRow;
