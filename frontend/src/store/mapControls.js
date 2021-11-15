const MAP_CONTROLS = 'mapdata/MAP_CONTROLS';

export const loadMapControls = (mapData) => {
    return {
        type: MAP_CONTROLS,
        mapData
    };
};

export const sendMapControls = (controlData) => async (dispatch) => {
        dispatch(loadMapControls(controlData));
};


const initialState = {
    previousScale: 0,
    scale: 0,
    positionX: 0,
    positionY: 0,
}




const mapControlsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case MAP_CONTROLS:
            newState = JSON.parse(JSON.stringify(state))

            newState.previousScale = action.mapData.previousScale
            newState.scale = action.mapData.scale
            newState.positionX = action.mapData.positionX
            newState.positionY = action.mapData.positionY
            console.log(newState, action.mapData, "WTFWTFWTFW")
            return newState

        default:
            return state;

    };
};



export default mapControlsReducer
