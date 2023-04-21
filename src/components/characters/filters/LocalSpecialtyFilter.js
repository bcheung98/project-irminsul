import React from "react";
import { useTheme } from "@mui/material/styles";
import { styled } from '@mui/material/styles';
import { connect } from "react-redux";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { Avatar, CardHeader, Typography } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { FilterTooltip } from "../../../helpers/FilterTooltip";

let mondstadtIcon = (`${process.env.REACT_APP_URL}/nations/Mondstadt.png`);
let callaLilyIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Calla_Lily.png`);
let ceciliaIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Cecilia.png`);
let dandelionIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Dandelion_Seed.png`);
let philanemoIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Philanemo_Mushroom.png`);
let lampGrassIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Small_Lamp_Grass.png`);
let valberryIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Valberry.png`);
let asterIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Windwheel_Aster.png`);
let wolfhookIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Wolfhook.png`);

let liyueIcon = (`${process.env.REACT_APP_URL}/nations/Liyue.png`);
let corLapisIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Cor_Lapis.png`);
let glazeLilyIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Glaze_Lily.png`);
let chiliIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Jueyun_Chili.png`);
let jadeIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Noctilucous_Jade.png`);
let qingxinIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Qingxin.png`);
let silkIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Silk_Flower.png`);
let starconchIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Starconch.png`);
let violetgrassIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Violetgrass.png`);

let inazumaIcon = (`${process.env.REACT_APP_URL}/nations/Inazuma.png`);
let amakumoIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Amakumo_Fruit.png`);
let marrowIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Crystal_Marrow.png`);
let dendrobiumIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Dendrobium.png`);
let fluoFungusIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Fluorescent_Fungus.png`);
let nakuIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Naku_Weed.png`);
let onikabutoIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Onikabuto.png`);
let sakuraIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Sakura_Bloom.png`);
let pearlIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Sango_Pearl.png`);
let ganodermaIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Sea_Ganoderma.png`);

let sumeruIcon = (`${process.env.REACT_APP_URL}/nations/Sumeru.png`);
let hennaBerryIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Henna_Berry.png`);
let kalpalataLotusIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Kalpalata_Lotus.png`);
let nilotpalaLotusIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Nilotpala_Lotus.png`);
let padisarahIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Padisarah.png`);
let rukkhashavaIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Rukkhashava_Mushrooms.png`);
let scarabIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Scarab.png`);
let sgpIcon = (`${process.env.REACT_APP_URL}/materials/local_specialties/Sand_Grease_Pupa.png`);

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    backgroundColor: `${theme.paper.backgroundColor}`,
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
))(({ theme }) => ({
    height: "32px",
    backgroundColor: `${theme.paper.backgroundColor}`,
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: "-5px",
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    backgroundColor: `${theme.paper.backgroundColor}`,
    padding: "10px",
    marginTop: "-5px",
}));

const LocalMatFilter = (props) => {

    const theme = useTheme();

    return (
        <div style={{ margin: "auto", width: "99%" }}>

            {/* Mondstadt */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={mondstadtIcon} alt="Mondstadt" sx={{ height: "32px", width: "32px", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: `${theme.text.color}`,
                                    textDecoration: "none",
                                }}
                            >
                                Mondstadt
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Calla Lily" arrow placement="top">
                            <img className="filter-off" id="calla lily-button" src={callaLilyIcon} alt="Calla Lily" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Cecilia" arrow placement="top">
                            <img className="filter-off" id="cecilia-button" src={ceciliaIcon} alt="Cecilia" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dandelion Seed" arrow placement="top">
                            <img className="filter-off" id="dandelion seed-button" src={dandelionIcon} alt="Dandelion Seed" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Philanemo Mushroom" arrow placement="top">
                            <img className="filter-off" id="philanemo mushroom-button" src={philanemoIcon} alt="Philanemo Mushroom" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Small Lamp Grass" arrow placement="top">
                            <img className="filter-off" id="small lamp grass-button" src={lampGrassIcon} alt="Small Lamp Grass" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Valberry" arrow placement="top">
                            <img className="filter-off" id="valberry-button" src={valberryIcon} alt="Valberry" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Windwheel Aster" arrow placement="top">
                            <img className="filter-off" id="windwheel aster-button" src={asterIcon} alt="Windwheel Aster" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Wolfhook" arrow placement="top">
                            <img className="filter-off" id="wolfhook-button" src={wolfhookIcon} alt="Wolfhook" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Liyue */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={liyueIcon} alt="Liyue" sx={{ height: "32px", width: "32px", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: `${theme.text.color}`,
                                    textDecoration: "none",
                                }}
                            >
                                Liyue
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Cor Lapis" arrow placement="top">
                            <img className="filter-off" id="cor lapis-button" src={corLapisIcon} alt="Cor Lapis" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Glaze Lily" arrow placement="top">
                            <img className="filter-off" id="glaze lily-button" src={glazeLilyIcon} alt="Glaze Lily" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Jueyun Chili" arrow placement="top">
                            <img className="filter-off" id="jueyun chili-button" src={chiliIcon} alt="Jueyun Chili" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Noctilucous Jade" arrow placement="top">
                            <img className="filter-off" id="noctilucous jade-button" src={jadeIcon} alt="Noctilucous Jade" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Qingxin" arrow placement="top">
                            <img className="filter-off" id="qingxin-button" src={qingxinIcon} alt="Qingxin" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Silk Flower" arrow placement="top">
                            <img className="filter-off" id="silk flower-button" src={silkIcon} alt="Silk Flower" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Starconch" arrow placement="top">
                            <img className="filter-off" id="starconch-button" src={starconchIcon} alt="Starconch" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Violetgrass" arrow placement="top">
                            <img className="filter-off" id="violetgrass-button" src={violetgrassIcon} alt="Violetgrass" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Inazuma */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={inazumaIcon} alt="Inazuma" sx={{ height: "32px", width: "32px", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: `${theme.text.color}`,
                                    textDecoration: "none",
                                }}
                            >
                                Inazuma
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Amakumo Fruit" arrow placement="top">
                            <img className="filter-off" id="amakumo fruit-button" src={amakumoIcon} alt="Amakumo Fruit" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Crystal Marrow" arrow placement="top">
                            <img className="filter-off" id="crystal marrow-button" src={marrowIcon} alt="Crystal Marrow" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Dendrobium" arrow placement="top">
                            <img className="filter-off" id="dendrobium-button" src={dendrobiumIcon} alt="Dendrobium" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Fluorescent Fungus" arrow placement="top">
                            <img className="filter-off" id="fluorescent fungus-button" src={fluoFungusIcon} alt="Fluorescent Fungus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Naku Weed" arrow placement="top">
                            <img className="filter-off" id="naku weed-button" src={nakuIcon} alt="Naku Weed" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Onikabuto" arrow placement="top">
                            <img className="filter-off" id="onikabuto-button" src={onikabutoIcon} alt="Onikabuto" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sakura Bloom" arrow placement="top">
                            <img className="filter-off" id="sakura bloom-button" src={sakuraIcon} alt="Sakura Bloom" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sango Pearl" arrow placement="top">
                            <img className="filter-off" id="sango pearl-button" src={pearlIcon} alt="Sango Pearl" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sea Ganoderma" arrow placement="top">
                            <img className="filter-off" id="sea ganoderma-button" src={ganodermaIcon} alt="Sea Ganoderma" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>

            {/* Sumeru */}
            <Accordion>
                <AccordionSummary>
                    <CardHeader
                        avatar={
                            <Avatar src={sumeruIcon} alt="Sumeru" sx={{ height: "32px", width: "32px", borderRadius: "5px" }} />
                        }
                        title={
                            <Typography variant="body1"
                                sx={{
                                    fontFamily: "Genshin, monospace",
                                    color: `${theme.text.color}`,
                                    textDecoration: "none",
                                }}
                            >
                                Sumeru
                            </Typography>
                        }
                    />
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        <FilterTooltip title="Henna Berry" arrow placement="top">
                            <img className="filter-off" id="henna berry-button" src={hennaBerryIcon} alt="Henna Berry" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Kalpalata Lotus" arrow placement="top">
                            <img className="filter-off" id="kalpalata lotus-button" src={kalpalataLotusIcon} alt="Kalpalata Lotus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Nilotpala Lotus" arrow placement="top">
                            <img className="filter-off" id="nilotpala lotus-button" src={nilotpalaLotusIcon} alt="Nilotpala Lotus" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Padisarah" arrow placement="top">
                            <img className="filter-off" id="padisarah-button" src={padisarahIcon} alt="Padisarah" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Rukkhashava Mushrooms" arrow placement="top">
                            <img className="filter-off" id="rukkhashava mushrooms-button" src={rukkhashavaIcon} alt="Rukkhashava Mushrooms" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Scarab" arrow placement="top">
                            <img className="filter-off" id="scarab-button" src={scarabIcon} alt="Scarab" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                        <FilterTooltip title="Sand Grease Pupa" arrow placement="top">
                            <img className="filter-off" id="sand grease pupa-button" src={sgpIcon} alt="Sand Grease Pupa" onClick={(e) => props.setFilter(e.target.alt)} />
                        </FilterTooltip>
                    </div>
                </AccordionDetails>
            </Accordion>


        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setFilter: (target) => dispatch({ type: "SET_CHAR_LOCAL_MAT_FILTERS", target })
    }
}

export default connect(null, mapDispatchToProps)(LocalMatFilter);