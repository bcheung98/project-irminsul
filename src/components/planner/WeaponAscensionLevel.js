import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";

const WeaponAscencsionLevel = (props) => {

    const theme = useTheme();

    let { updateWeaponCosts, updateTotalCosts } = props;
    let { name, rarity } = props.weapon;

    let levels;
    rarity > 2 ? levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"] : levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70"]
    const minDistance = 1;
    let maxValue = levels.length;
    const [sliderValue, setSliderValue] = React.useState([1, maxValue]);
    const handleSliderChange = (event, newValue, activeThumb) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        if (newValue[1] - newValue[0] < minDistance) {
            if (activeThumb === 0) {
                const clamped = Math.min(newValue[0], maxValue - minDistance);
                setSliderValue([clamped, clamped + minDistance]);
            }
            else {
                const clamped = Math.max(newValue[1], minDistance + 1);
                setSliderValue([clamped - minDistance, clamped]);
            }
        }
        else {
            setSliderValue(newValue);
        }
    }

    const GetCost = (start, stop) => {
        let costArray = AscensionMaterials[rarity.toString()].map((material, index) => (AscensionMaterials[rarity.toString()][index].slice(start, stop).reduce((a, c) => a + c)));
        return {
            mora: costArray[0],
            wep_xp1: costArray[1],
            wep_xp2: costArray[2],
            wep_xp3: costArray[3],
            ascension1: costArray[4],
            ascension2: costArray[5],
            ascension3: costArray[6],
            ascension4: costArray[7],
            elite1: costArray[8],
            elite2: costArray[9],
            elite3: costArray[10],
            common1: costArray[11],
            common2: costArray[12],
            common3: costArray[13],
        }
    }

    React.useEffect(() => {
        updateWeaponCosts([name, GetCost(sliderValue[0], sliderValue[1]), "level"])
        updateTotalCosts()
    })

    return (
        <Box
            sx={{
                mb: "15px",
                mx: "15px",
            }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "15px" }}>
                    Level
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, mr: "5px", width: "90px" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} disableSwap />
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "25px", width: "90px" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateWeaponCosts: (payload) => dispatch({ type: "UPDATE_WEAPON_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(WeaponAscencsionLevel);

const AscensionMaterials = {
    // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80, 80+, 90] (14) (For 3-5 Stars)
    // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70] (10) (For 1-2 Stars)
    /*
        Mora
        T1 Weapon EXP Material
        T2 Weapon EXP Material
        T3 Weapon EXP Material
        T1 Ascension Material
        T2 Ascension Material
        T3 Ascension Material
        T4 Ascension Material
        T1 Elite Material
        T2 Elite Material
        T3 Elite Material
        T1 Common Material
        T2 Common Material
        T3 Common Material
    */
    "5": [
        [0, 12160, 10000, 62280, 20000, 62820, 30000, 92780, 45000, 129920, 55000, 175040, 65000, 371480],
        [0, 3, 0, 2, 0, 0, 0, 2, 0, 3, 0, 0, 0, 4],
        [0, 0, 0, 3, 0, 4, 0, 0, 0, 4, 0, 0, 0, 2],
        [0, 12, 0, 60, 0, 57, 0, 85, 0, 118, 0, 160, 0, 351],
        [0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 5, 0, 9, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
        [0, 0, 5, 0, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 0, 18, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 0, 27, 0],
        [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 0, 14, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0]
    ],
    "4": [
        [0, 8100, 5000, 41520, 15000, 41880, 20000, 61840, 30000, 86620, 35000, 116700, 45000, 247660],
        [0, 2, 0, 1, 0, 3, 0, 3, 0, 2, 0, 2, 0, 4],
        [0, 0, 0, 2, 0, 2, 0, 3, 0, 1, 0, 3, 0, 1],
        [0, 8, 0, 40, 0, 38, 0, 56, 0, 79, 0, 106, 0, 234],
        [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
        [0, 0, 3, 0, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 12, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 18, 0],
        [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0, 9, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0]
    ],
    "3": [
        [0, 5360, 5000, 27400, 10000, 27640, 15000, 40820, 20000, 57180, 25000, 77020, 30000, 163460],
        [0, 3, 0, 2, 0, 0, 0, 1, 0, 3, 0, 0, 0, 2],
        [0, 1, 0, 3, 0, 2, 0, 2, 0, 1, 0, 2, 0, 3],
        [0, 5, 0, 26, 0, 25, 0, 37, 0, 52, 0, 70, 0, 154],
        [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 2, 0, 4, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 4, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
        [0, 0, 2, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 8, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 12, 0],
        [0, 0, 1, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 4, 0, 6, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 8, 0]
    ],
    "2": [
        [0, 3640, 5000, 18700, 5000, 18860, 10000, 27840, 15000, 38980],
        [0, 1, 0, 0, 0, 3, 0, 3, 0, 2],
        [0, 3, 0, 1, 0, 1, 0, 2, 0, 3],
        [0, 3, 0, 18, 0, 17, 0, 25, 0, 35],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 3, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 5, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 5, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 3, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    "1": [
        [0, 2440, 0, 12460, 5000, 12580, 5000, 18560, 10000, 26000],
        [0, 0, 0, 3, 0, 4, 0, 0, 0, 4],
        [0, 2, 0, 0, 0, 2, 0, 0, 0, 3],
        [0, 2, 0, 12, 0, 11, 0, 17, 0, 23],
        [0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1, 0, 2, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 4, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 0, 2, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 2, 0, 3, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
}