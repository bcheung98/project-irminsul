import { connect } from "react-redux"

// MUI imports
import { useTheme } from "@mui/material/styles"
import { Box, Typography } from "@mui/material"
import Grid from "@mui/material/Unstable_Grid2"

// Helper imports
import { CustomTooltip } from "../../helpers/CustomTooltip"
import { formatWeaponAscMats, formatEliteMats, formatCommonMats } from "../../helpers/TooltipText"
import { Backgrounds } from "../../helpers/Backgrounds"
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage"

// Type imports
import { RootState } from "../../redux/store"
import { WeaponCosts } from "../../types/weapon/WeaponCosts"

function WeaponAscensionCardMaterials(props: any) {

    const theme = useTheme()

    let { name } = props.weapon
    let { ascensionMat, eliteMat, commonMat } = props.weapon.materials
    let costs = props.costs.find((wep: WeaponCosts) => wep.name === name).costs

    const MaterialStyle = {
        mx: "15px",
        my: "10px",
        display: "flex",
    }

    const MaterialImageRootBig = {
        width: "72px",
        mr: "15px",
        mb: "15px",
        backgroundColor: "rgb(233, 229, 220)",
        border: `1px solid ${theme.border.color}`,
        borderRadius: "5px",
    }

    const MaterialTextContainer = {
        textAlign: "center",
        mt: "-5px",
    }

    const MaterialText = {
        fontFamily: "Genshin, sans-serif",
        color: "rgb(32, 32, 32)",
        fontSize: "11.5px"
    }

    return (
        <Grid container sx={MaterialStyle}>
            {
                /* Mora */
                costs["mora"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Mora" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/Item_Mora.png`} alt="Mora" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["mora"].toLocaleString()}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Weapon EXP Material */
                costs["wep_xp1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Enhancement Ore" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/wep_xp1.png`} alt="Enhancement Ore" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["wep_xp1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Weapon EXP Material */
                costs["wep_xp2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Fine Enhancement Ore" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/wep_xp2.png`} alt="Fine Enhancement Ore" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["wep_xp2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Weapon EXP Material */
                costs["wep_xp3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title="Mystic Enhancement Ore" arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/xp_mats/wep_xp3.png`} alt="Mystic Enhancement Ore" onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["wep_xp3"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Ascension Material */
                costs["ascension1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}1.png`} alt={formatWeaponAscMats(`${ascensionMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["ascension1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Ascension Material */
                costs["ascension2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}2.png`} alt={formatWeaponAscMats(`${ascensionMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["ascension2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Ascension Material */
                costs["ascension3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}3.png`} alt={formatWeaponAscMats(`${ascensionMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["ascension3"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T4 Ascension Material */
                costs["ascension4"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatWeaponAscMats(`${ascensionMat}4`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["5"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/weapon_ascension_mats/${ascensionMat.split(" ").join("_")}4.png`} alt={formatWeaponAscMats(`${ascensionMat}4`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["ascension4"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Elite Material */
                costs["elite1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}1.png`} alt={formatEliteMats(`${eliteMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["elite1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Elite Material */
                costs["elite2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}2.png`} alt={formatEliteMats(`${eliteMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["elite2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Elite Material */
                costs["elite3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatEliteMats(`${eliteMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["4"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/elite_mats/${eliteMat.split(" ").join("_")}3.png`} alt={formatEliteMats(`${eliteMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["elite3"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T1 Common Material */
                costs["common1"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}1`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["1"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}1.png`} alt={formatCommonMats(`${commonMat}1`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common1"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T2 Common Material */
                costs["common2"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}2`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["2"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}2.png`} alt={formatCommonMats(`${commonMat}2`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common2"]}
                        </Typography>
                    </Box>
                </Box>
            }
            {
                /* T3 Common Material */
                costs["common3"] !== 0 &&
                <Box sx={MaterialImageRootBig}>
                    <CustomTooltip title={formatCommonMats(`${commonMat}3`)} arrow placement="top">
                        <img className="material-image-big" style={{ backgroundImage: "url(" + Backgrounds["3"] + ")" }} src={`${process.env.REACT_APP_URL}/materials/common_mats/${commonMat.split(" ").join("_")}3.png`} alt={formatCommonMats(`${commonMat}3`)} onError={ErrorLoadingImage} />
                    </CustomTooltip>
                    <Box sx={MaterialTextContainer}>
                        <Typography variant="subtitle2" sx={MaterialText}>
                            {costs["common3"]}
                        </Typography>
                    </Box>
                </Box>
            }
        </Grid>
    )

}

const mapStateToProps = (state: RootState) => ({
    costs: state.ascensionPlanner.weaponCosts
})

export default connect(mapStateToProps)(WeaponAscensionCardMaterials)