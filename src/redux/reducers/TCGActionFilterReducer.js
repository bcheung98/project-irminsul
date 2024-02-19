const initialState = {

}

const TCGActionFilterReducer = (state = initialState, action) => {
    let { target, type } = action;
    if (target !== undefined && type.startsWith("SET_TCGACTION")) {
        let targetButton = document.getElementById(`${target.toLowerCase()}-button`);
        targetButton.className === "filter-off" ? targetButton.className = "filter-on" : targetButton.className = "filter-off";
    }
    switch (type) {
        default:
            return state;
    }
}

export default TCGActionFilterReducer;