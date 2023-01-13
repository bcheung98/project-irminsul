import React from "react";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Avatar, CardHeader, Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let stormterrorIcon = require("../../../assets/bosses/Stormterror_Icon.png");
let clawIcon = require("../../../assets/materials/weekly_boss_mats/Dvalin's_Claw.png");
let plumeIcon = require("../../../assets/materials/weekly_boss_mats/Dvalin's_Plume.png");
let sighIcon = require("../../../assets/materials/weekly_boss_mats/Dvalin's_Sigh.png");

let andriusIcon = require("../../../assets/bosses/Andrius_Icon.png");
let ringIcon = require("../../../assets/materials/weekly_boss_mats/Ring_of_Boreas.png");
let locketIcon = require("../../../assets/materials/weekly_boss_mats/Spirit_Locket_of_Boreas.png");
let tailIcon = require("../../../assets/materials/weekly_boss_mats/Tail_of_Boreas.png");

let childeIcon = require("../../../assets/bosses/Childe_Icon.png");
let shadowIcon = require("../../../assets/materials/weekly_boss_mats/Shadow_of_the_Warrior.png");
let shardIcon = require("../../../assets/materials/weekly_boss_mats/Shard_of_a_Foul_Legacy.png");
let tuskIcon = require("../../../assets/materials/weekly_boss_mats/Tusk_of_Monoceros_Caeli.png");

let azhdahaIcon = require("../../../assets/bosses/Azhdaha_Icon.png");
let branchIcon = require("../../../assets/materials/weekly_boss_mats/Bloodjade_Branch.png");
let crownIcon = require("../../../assets/materials/weekly_boss_mats/Dragon_Lord's_Crown.png");
let scaleIcon = require("../../../assets/materials/weekly_boss_mats/Gilded_Scale.png");

let signoraIcon = require("../../../assets/bosses/La_Signora_Icon.png");
let heartIcon = require("../../../assets/materials/weekly_boss_mats/Ashen_Heart.png");
let butterflyIcon = require("../../../assets/materials/weekly_boss_mats/Hellfire_Butterfly.png");
let momentIcon = require("../../../assets/materials/weekly_boss_mats/Molten_Moment.png");

let raidenIcon = require("../../../assets/bosses/Narukami_no_Mikoto_Icon.png");
let mudraIcon = require("../../../assets/materials/weekly_boss_mats/Mudra_of_the_Malefic_General.png");
let tearsIcon = require("../../../assets/materials/weekly_boss_mats/Tears_of_the_Calamitous_God.png");
let aeonsIcon = require("../../../assets/materials/weekly_boss_mats/The_Meaning_of_Aeons.png");

let balladeerIcon = require("../../../assets/bosses/Shouki_no_Kami.png");
let dakaIcon = require("../../../assets/materials/weekly_boss_mats/Daka's_Bell.png");
let mirrorMushinIcon = require("../../../assets/materials/weekly_boss_mats/Mirror_of_Mushin.png");
let puppetStringsIcon = require("../../../assets/materials/weekly_boss_mats/Puppet_Strings.png");

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
    border: `1px solid rgb(30, 73, 118)`,
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "dodgerblue" }} />}
        {...props}
    />
))(() => ({
    height: "32px",
    backgroundColor: "rgb(9, 24, 39)",
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: "-5px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(() => ({
    backgroundColor: "rgb(9, 24, 39)",
    padding: "10px",
    marginTop: "-5px",
}));

const BossMatFilter = (props) => {

    return (
        <div style={{ margin: "auto", width: "99%" }}>

            {/* Stormterror */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={stormterrorIcon} alt="Stormterror" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Stormterror
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Dvalin's Claw" arrow placement="top">
                            <img className="filter-off" id="dvalin's claw-button" src={clawIcon} alt="Dvalin's Claw" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dvalin's Plume" arrow placement="top">
                            <img className="filter-off" id="dvalin's plume-button" src={plumeIcon} alt="Dvalin's Plume" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dvalin's Sigh" arrow placement="top">
                            <img className="filter-off" id="dvalin's sigh-button" src={sighIcon} alt="Dvalin's Sigh" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Lupus Boreas */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={andriusIcon} alt="Lupus Boreas" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Lupus Boreas
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Ring of Boreas" arrow placement="top">
                            <img className="filter-off" id="ring of boreas-button" src={ringIcon} alt="Ring of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Spirit Locket of Boreas" arrow placement="top">
                            <img className="filter-off" id="spirit locket of boreas-button" src={locketIcon} alt="Spirit Locket of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Tail of Boreas" arrow placement="top">
                            <img className="filter-off" id="tail of boreas-button" src={tailIcon} alt="Tail of Boreas" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Childe */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={childeIcon} alt="Childe" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Childe
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Shadow of the Warrior" arrow placement="top">
                            <img className="filter-off" id="shadow of the warrior-button" src={shadowIcon} alt="Shadow of the Warrior" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Shard of a Foul Legacy" arrow placement="top">
                            <img className="filter-off" id="shard of a foul legacy-button" src={shardIcon} alt="Shard of a Foul Legacy" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Tusk of Monoceros Caeli" arrow placement="top">
                            <img className="filter-off" id="tusk of monoceros caeli-button" src={tuskIcon} alt="Tusk of Monoceros Caeli" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Azhdaha */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={azhdahaIcon} alt="Azhdaha" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Azhdaha
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Bloodjade Branch" arrow placement="top">
                            <img className="filter-off" id="bloodjade branch-button" src={branchIcon} alt="Bloodjade Branch" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dragon Lord's Crown" arrow placement="top">
                            <img className="filter-off" id="dragon lord's crown-button" src={crownIcon} alt="Dragon Lord's Crown" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Gilded Scale" arrow placement="top">
                            <img className="filter-off" id="gilded scale-button" src={scaleIcon} alt="Gilded Scale" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* La Signora */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={signoraIcon} alt="La Signora" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                La Signora
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Ashen Heart" arrow placement="top">
                            <img className="filter-off" id="ashen heart-button" src={heartIcon} alt="Ashen Heart" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Hellfire Butterfly" arrow placement="top">
                            <img className="filter-off" id="hellfire butterfly-button" src={butterflyIcon} alt="Hellfire Butterfly" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Molten Moment" arrow placement="top">
                            <img className="filter-off" id="molten moment-button" src={momentIcon} alt="Molten Moment" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Narukami no Mikoto */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={raidenIcon} alt="Narukami no Mikoto" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Narukami no Mikoto
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Mudra of the Malefic General" arrow placement="top">
                            <img className="filter-off" id="mudra of the malefic general-button" src={mudraIcon} alt="Mudra of the Malefic General" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Tears of the Calamitous God" arrow placement="top">
                            <img className="filter-off" id="tears of the calamitous god-button" src={tearsIcon} alt="Tears of the Calamitous God" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="The Meaning of Aeons" arrow placement="top">
                            <img className="filter-off" id="the meaning of aeons-button" src={aeonsIcon} alt="The Meaning of Aeons" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Shouki no Kami */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={balladeerIcon} alt="Shouki no Kami" sx={{ height: "32px", width: "32px", border: "1px solid rgb(30, 73, 118)", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: "white",
                                    textDecoration: "none",
                                }}
                            >
                                Shouki no Kami
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Daka's Bell" arrow placement="top">
                            <img className="filter-off" id="daka's bell-button" src={dakaIcon} alt="Daka's Bell" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Mirror of Mushin" arrow placement="top">
                            <img className="filter-off" id="mirror of mushin-button" src={mirrorMushinIcon} alt="Mirror of Mushin" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Puppet Strings" arrow placement="top">
                            <img className="filter-off" id="puppet strings-button" src={puppetStringsIcon} alt="Puppet Strings" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_WEEKLYBOSS_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(BossMatFilter);