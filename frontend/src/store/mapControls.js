
// ==================== Handles the scale, position of the map ==================== \\
const MAP_CONTROLS = 'mapControls/MAP_CONTROLS';

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
const SIDEBAR_NAME = 'mapControls/SIDEBAR_NAME';

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
const SIDEBAR_EXPAND = 'mapControls/SIDEBAR_EXPAND';

export const loadSidebarExpand = (sideBarExpand) => {
    return {
        type: SIDEBAR_EXPAND,
        sideBarExpand
    };
};
export const sendSidebarExpand = (sidebarExpand) => async (dispatch) => {
    dispatch(loadSidebarExpand(sidebarExpand));
};




// ==================== Handles Location Information ==================== \\
const LOCATION_INFORMATION = 'mapControls/LOCATION_INFORMATION';

export const loadLocationInformation = (locationInformation) => {
    return {
        type: LOCATION_INFORMATION,
        locationInformation
    };
};
export const sendLocationInformation = (locationInformation) => async (dispatch) => {
    dispatch(loadLocationInformation(locationInformation));
};



// ==================== Handles X & Y Coord clickin on map ==================== \\
const XY_COORDINATES = 'mapControls/XY_COORDINATES';

export const loadXY_coordinates = (xy_coordinates) => {
    return {
        type: XY_COORDINATES,
        xy_coordinates
    };
};
export const sendXY_coordinates = (xy_coordinates) => async (dispatch) => {
    dispatch(loadXY_coordinates(xy_coordinates));
};




const initialState = {
    previousScale: 0,
    scale: 0,
    positionX: 0,
    positionY: 0,
    sideBarExpand: true,
    sideBarName: 'List Locations',
    location_id: null,
    name: 'Select a Location',
    thumbnail_url: '',
    location_description: "No location selected",
    coordX: 0,
    coordY: 0,

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
            newState.sideBarExpand = action.sideBarExpand
            return newState
        case LOCATION_INFORMATION:
            newState = Object.assign({}, state);
            newState.name = action.locationInformation.name
            newState.location_id = action.locationInformation.location_id
            newState.location_description = action.locationInformation.location_description
            newState.thumbnail_url = action.locationInformation.thumbnail_url
            return newState
        case XY_COORDINATES:
            newState = Object.assign({}, state);
            newState.coordX = action.xy_coordinates.coordX
            newState.coordY = action.xy_coordinates.coordY
            return newState

        default:
            return state;

    };
};



export default mapControlsReducer
