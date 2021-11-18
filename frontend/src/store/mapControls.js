
// ==================== Handles the scale, position of the map ==================== \\
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

// ==================== Handles the current name of the sidebar tab ==================== \\
const SIDEBAR_NAME = 'mapdata/SIDEBAR_NAME';

export const loadSidebarName = (sidebarName) => {
    return {
        type: SIDEBAR_NAME,
        sidebarName
    };
};
export const sendSidebarName = (sidebarName) => async (dispatch) => {
        dispatch(loadSidebarName(sidebarName));
};

// ==================== Handles if the sidebar is expanded ==================== \\
const SIDEBAR_EXPAND = 'mapdata/SIDEBAR_EXPAND';

export const loadSidebarExpand = (sideBarExpand) => {
    return {
        type: SIDEBAR_EXPAND,
        sideBarExpand
    };
};
export const sendSidebarExpand = (sidebarExpand) => async (dispatch) => {
        dispatch(loadSidebarExpand(sidebarExpand));
};




const initialState = {
    previousScale: 0,
    scale: 0,
    positionX: 0,
    positionY: 0,
    sideBarExpand: true,
    sideBarName: 'Location List',
    locationName: "",
    locationId: 0,
    locationDescription: '',

}




const mapControlsReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case MAP_CONTROLS:
            newState = Object.assign({}, state);
            newState.previousScale = action.mapData.previousScale
            newState.scale = action.mapData.scale
            newState.positionX = action.mapData.positionX
            newState.positionY = action.mapData.positionY
            return newState
        case SIDEBAR_NAME:
            newState = Object.assign({}, state);
            newState.sideBarName = action.sidebarName
            return newState
        case SIDEBAR_EXPAND:
            newState = Object.assign({}, state);
            newState.sideBarExpand = action.sideBarExpand //shrink
            return newState

        default:
            return state;

    };
};



export default mapControlsReducer
