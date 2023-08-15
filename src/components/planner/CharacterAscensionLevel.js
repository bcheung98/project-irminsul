import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";
import { CustomSwitch } from "../../helpers/CustomSwitch";

const CharacterAscensionLevel = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, element } = props.character;

    const levels = ["1", "20", "20+", "40", "40+", "50", "50+", "60", "60+", "70", "70+", "80", "80+", "90"];
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
        if (selected) {
            let costArray = AscensionMaterials.map((material, index) => (AscensionMaterials[index].slice(start, stop).reduce((a, c) => a + c)));
            return {
                mora: costArray[0],
                char_xp1: costArray[1],
                char_xp2: costArray[2],
                char_xp3: costArray[3],
                bossMat: costArray[4],
                localMat: costArray[5],
                gemstone1: costArray[6],
                gemstone2: costArray[7],
                gemstone3: costArray[8],
                gemstone4: costArray[9],
                common1: costArray[10],
                common2: costArray[11],
                common3: costArray[12],
            }
        }
        else {
            return {
                mora: 0,
                char_xp1: 0,
                char_xp2: 0,
                char_xp3: 0,
                bossMat: 0,
                localMat: 0,
                gemstone1: 0,
                gemstone2: 0,
                gemstone3: 0,
                gemstone4: 0,
                common1: 0,
                common2: 0,
                common3: 0,
            }
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(sliderValue[0], sliderValue[1]), "level"])
        updateTotalCosts()
    })

    const [selected, setSelected] = React.useState(true);
    const handleSelect = () => {
        setSelected(!selected);
    }

    return (
        <Box
            sx={{
                mb: "15px",
                mx: "15px",
            }}
            style={selected ? { opacity: "1" } : { opacity: "0.35" }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} />
                <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "15px" }}>
                    Level
                </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, mr: "5px", width: "90px" }}>
                    Lv. {levels[sliderValue[0] - 1]}
                </Typography>
                <CustomSlider disabled={!selected} value={sliderValue} step={1} min={1} max={maxValue} onChange={handleSliderChange} element={element} disableSwap />
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, ml: "25px", width: "90px" }}>
                    Lv. {levels[sliderValue[1] - 1]}
                </Typography>
            </Box>
        </Box>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        updateCharacterCosts: (payload) => dispatch({ type: "UPDATE_CHAR_COSTS", payload }),
        updateTotalCosts: (payload) => dispatch({ type: "UPDATE_TOTAL_COSTS", payload })
    }
}

export default connect(null, mapDispatchToProps)(CharacterAscensionLevel);

const AscensionMaterials = [
    // Level [1, 20, 20+, 40, 40+, 50, 50+, 60, 60+, 70, 70+, 80, 80+, 90] (14)
    /*
        Mora
        T1 Character EXP Material
        T2 Character EXP Material
        T3 Character EXP Material
        Boss Material
        Local Specialty
        T1 Gemstone
        T2 Gemstone
        T3 Gemstone
        T4 Gemstone
        T1 Common Material
        T2 Common Material
        T3 Common Material
    */
    [0, 24200, 20000, 115800, 40000, 116000, 60000, 171000, 80000, 239200, 100000, 322400, 120000, 684800],
    [0, 1, 0, 4, 0, 0, 0, 0, 0, 1, 0, 2, 0, 4],
    [0, 0, 0, 3, 0, 0, 0, 3, 0, 3, 0, 2, 0, 0],
    [0, 6, 0, 28, 0, 29, 0, 42, 0, 59, 0, 80, 0, 171],
    [0, 0, 0, 0, 2, 0, 4, 0, 8, 0, 12, 0, 20, 0],
    [0, 0, 3, 0, 10, 0, 20, 0, 30, 0, 45, 0, 60, 0],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 6, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 6, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 3, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 12, 0, 18, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 0, 24, 0]
]