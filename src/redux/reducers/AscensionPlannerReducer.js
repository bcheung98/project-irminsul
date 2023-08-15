const initialState = {
    totalCost: {},
    characters: [],
    characterCosts: [],
    weapons: [],
    weaponCosts: [],
}

const AscensionPlannerReducer = (state = initialState, action) => {
    let { payload, type } = action;
    switch (type) {
        case "SET_PLANNER_CHARS":
            let tempCharCosts = [];
            payload.map(char => {
                let costs;
                let currentCharacter = state.characterCosts.find(c => char.name === c.name);
                // If the character is not already in the list, initialize the material array
                if (currentCharacter === undefined) {
                    costs = {
                        // Source of each material:
                        // [Level, Normal Attack, Skill, Burst]
                        mora: [0, 0, 0, 0],
                        char_xp1: [0, 0, 0, 0],
                        char_xp2: [0, 0, 0, 0],
                        char_xp3: [0, 0, 0, 0],
                        bossMat: [0, 0, 0, 0],
                        localMat: [0, 0, 0, 0],
                        gemstone1: [0, 0, 0, 0],
                        gemstone2: [0, 0, 0, 0],
                        gemstone3: [0, 0, 0, 0],
                        gemstone4: [0, 0, 0, 0],
                        talent1: [0, 0, 0, 0],
                        talent2: [0, 0, 0, 0],
                        talent3: [0, 0, 0, 0],
                        common1: [0, 0, 0, 0],
                        common2: [0, 0, 0, 0],
                        common3: [0, 0, 0, 0],
                        weeklyBossMat: [0, 0, 0, 0],
                        crown: [0, 0, 0, 0]
                    };
                }
                else {
                    costs = currentCharacter.costs;
                }
                return (
                    tempCharCosts.push({
                        name: char.name,
                        costs: costs,
                    })
                )
            });
            return {
                ...state,
                characters: payload,
                characterCosts: tempCharCosts
            }
        case "UPDATE_CHAR_COSTS":
            let tempCharArr = [...state.characterCosts];
            let indexChar = tempCharArr.indexOf(tempCharArr.find(char => char.name === payload[0]));
            Object.keys(payload[1]).forEach(key => {
                switch (payload[2]) {
                    case "level":
                        tempCharArr[indexChar].costs[key][0] = payload[1][key];
                        break;
                    case "attack":
                        tempCharArr[indexChar].costs[key][1] = payload[1][key];
                        break;
                    case "skill":
                        tempCharArr[indexChar].costs[key][2] = payload[1][key];
                        break;
                    case "burst":
                        tempCharArr[indexChar].costs[key][3] = payload[1][key];
                        break;
                    default:
                        break;
                }
            })
            return {
                ...state,
                characterCosts: tempCharArr
            }
        case "SET_PLANNER_WEAPONS":
            let tempWeaponCosts = [];
            payload.map(weapon => {
                let costs;
                let currentWeapon = state.weaponCosts.find(wep => weapon.name === wep.name);
                // If the weapon is not already in the list, initialize the material array
                if (currentWeapon === undefined) {
                    costs = {
                        mora: 0,
                        wep_xp1: 0,
                        wep_xp2: 0,
                        wep_xp3: 0,
                        ascension1: 0,
                        ascension2: 0,
                        ascension3: 0,
                        ascension4: 0,
                        elite1: 0,
                        elite2: 0,
                        elite3: 0,
                        common1: 0,
                        common2: 0,
                        common3: 0
                    }
                }
                else {
                    costs = currentWeapon.costs;
                }
                return (
                    tempWeaponCosts.push({
                        name: weapon.name,
                        costs: costs,
                    })
                )
            });
            return {
                ...state,
                weapons: payload,
                weaponCosts: tempWeaponCosts
            }
        case "UPDATE_WEAPON_COSTS":
            let tempWeaponArr = [...state.weaponCosts];
            let indexWeapon = tempWeaponArr.indexOf(tempWeaponArr.find(wep => wep.name === payload[0]));
            Object.keys(payload[1]).forEach(key => {
                tempWeaponArr[indexWeapon].costs[key] = payload[1][key];
            })
            return {
                ...state,
                weaponCosts: tempWeaponArr
            }
        case "UPDATE_TOTAL_COSTS":
            let tempTotalCost = {};
            state.characterCosts.forEach(char => {
                Object.keys(char.costs).forEach(material => {
                    let char_mat = GetMaterial(state.characters.find(c => c.name === char.name), material);
                    if (!Object.keys(tempTotalCost).includes(char_mat)) {
                        tempTotalCost[char_mat] = 0;
                    }
                    tempTotalCost[char_mat] += char.costs[material].reduce((a, c) => a + c);
                })
            })
            state.weaponCosts.forEach(wep => {
                Object.keys(wep.costs).forEach(material => {
                    let wep_mat = GetMaterial(state.weapons.find(w => w.name === wep.name), material);
                    if (!Object.keys(tempTotalCost).includes(wep_mat)) {
                        tempTotalCost[wep_mat] = 0;
                    }
                    tempTotalCost[wep_mat] += wep.costs[material];
                })
            })
            return {
                ...state,
                totalCost: tempTotalCost
            }
        default:
            return state;
    }
}

export default AscensionPlannerReducer;

const GetMaterial = (unit, material) => {
    switch (material) {
        case "talent1":
            material = `${unit.materials.talentBook}1`;
            break;
        case "talent2":
            material = `${unit.materials.talentBook}2`;
            break;
        case "talent3":
            material = `${unit.materials.talentBook}3`;
            break;
        case "common1":
            material = `${unit.materials.commonMat}1`;
            break;
        case "common2":
            material = `${unit.materials.commonMat}2`;
            break;
        case "common3":
            material = `${unit.materials.commonMat}3`;
            break;
        case "bossMat":
            material = unit.materials.bossMat;
            break;
        case "localMat":
            material = unit.materials.localMat;
            break;
        case "weeklyBossMat":
            material = unit.materials.weeklyBossMat;
            break;
        case "gemstone1":
            material = `${unit.element}_Sliver`;
            break;
        case "gemstone2":
            material = `${unit.element}_Fragment`;
            break;
        case "gemstone3":
            material = `${unit.element}_Chunk`;
            break;
        case "gemstone4":
            material = `${unit.element}_Gemstone`;
            break;
        case "ascension1":
            material = `${unit.materials.ascensionMat}1`;
            break;
        case "ascension2":
            material = `${unit.materials.ascensionMat}2`;
            break;
        case "ascension3":
            material = `${unit.materials.ascensionMat}3`;
            break;
        case "ascension4":
            material = `${unit.materials.ascensionMat}4`;
            break;
        case "elite1":
            material = `${unit.materials.eliteMat}1`;
            break;
        case "elite2":
            material = `${unit.materials.eliteMat}2`;
            break;
        case "elite3":
            material = `${unit.materials.eliteMat}3`;
            break;
        default:
            break;
    }
    return material;
}