import * as React from "react";
import { connect } from "react-redux";
import { useTheme } from "@mui/material/styles";
import { Box, Typography, CardHeader } from "@mui/material";
import { CustomSlider } from "../../helpers/CustomSlider";
import { CustomSwitch } from "../../helpers/CustomSwitch";
import ErrorLoadingImage from "../../helpers/ErrorLoadingImage";

const CharacterAscensionBurst = (props) => {

    const theme = useTheme();

    let { updateCharacterCosts, updateTotalCosts } = props;
    let { name, element } = props.character;

    const minDistance = 1;
    let maxValue = 10;
    const levels = [...Array(maxValue).keys()].map((i) => i + 1);
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
            let costArray = LevelUpMaterials.map((material, index) => (LevelUpMaterials[index].slice(start, stop).reduce((a, c) => a + c)));
            return {
                mora: costArray[0],
                talent1: costArray[1],
                talent2: costArray[2],
                talent3: costArray[3],
                common1: costArray[4],
                common2: costArray[5],
                common3: costArray[6],
                weeklyBossMat: costArray[7],
                crown: costArray[8]
            }
        }
        else {
            return {
                mora: 0,
                talent1: 0,
                talent2: 0,
                talent3: 0,
                common1: 0,
                common2: 0,
                common3: 0,
                weeklyBossMat: 0,
                crown: 0
            }
        }
    }

    React.useEffect(() => {
        updateCharacterCosts([name, GetCost(sliderValue[0], sliderValue[1]), "burst"])
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
                width: "350px",
            }}
            style={selected ? { opacity: "1" } : { opacity: "0.35" }}
        >
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <CustomSwitch checked={selected} onChange={handleSelect} element={element} />
                <CardHeader
                    avatar={
                        <img alt={name} src={(`${process.env.REACT_APP_URL}/characters/talents/${name.split(" ").join("_").toLowerCase()}_burst.png`)} style={{ width: "48px", height: "48px", border: `1px solid ${theme.border.color}`, borderRadius: "48px" }} onError={ErrorLoadingImage} />
                    }
                    title={
                        <Typography variant="h6" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}` }}>
                            Elemental Burst
                        </Typography>
                    }
                    sx={{ ml: "-5px" }}
                />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2 }}>
                <Typography variant="body1" sx={{ fontFamily: "Genshin, sans-serif", color: `${theme.text.color}`, mr: "25px", width: "90px" }}>
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

export default connect(null, mapDispatchToProps)(CharacterAscensionBurst);

const LevelUpMaterials = [
    // Level [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] (10)
    /*
        Mora
        T1 Talent Book
        T2 Talent Book
        T3 Talent Book
        T1 Common Material
        T2 Common Material
        T3 Common Material
        Weekly Boss Material
        Crown
    */
    [0, 12500, 17500, 25000, 30000, 37500, 120000, 260000, 450000, 700000],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 4, 6, 9, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 6, 12, 16],
    [0, 6, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 4, 6, 9, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 6, 9, 12],
    [0, 0, 0, 0, 0, 0, 1, 1, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
]