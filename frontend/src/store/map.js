
//========================= Loads Data by Location ======================\\
const LOAD_MAP_DATA = 'mapdata/LOAD_MAP_DATA';

export const loadMapData = (mapData) => {
    return {
        type: LOAD_MAP_DATA,
        mapData
    };
};

export const fetchMapData = (id) => async (dispatch) => {
    const response = await fetch(`/api/map_data/location/${id}`);
    if (response.ok) {
        const mapData = await response.json();
        dispatch(loadMapData(mapData));
        return mapData
    };
};


//==================== Loads all locations by campaign id =====================\\
const LOAD_ALL_LOCATIONS = 'mapdata/LOAD_ALL_LOCATIONS';

export const loadAllLocations = (allLocations) => {
    return {
        type: LOAD_ALL_LOCATIONS,
        allLocations
    };
};

export const fetchAllLocations = (id) => async (dispatch) => {
    const response = await fetch(`/api/map_data/all/${id}`);
    if (response.ok) {
        const allLocations = await response.json();
        dispatch(loadAllLocations(allLocations));
        return allLocations
    };
};


//========================= Loads Data by Location ======================\\
const LOAD_NEW_LOCATION = 'mapdata/LOAD_NEW_LOCATION';

export const loadNewLocatiom = (newLoc) => {
    return {
        type: LOAD_NEW_LOCATION,
        newLoc
    };
};

export const sendNewLoc = (newLoc) => async (dispatch) => {
    console.log("SendNewLoc?!?!?!?!?", newLoc)
        dispatch(loadNewLocatiom(newLoc));
};








const initialState = {
    allLocations: [],
    Roads: [],
    campaign_id: null,
    child_locations: [],
    id: null,
    image_url: "",
    name: "",
    parent_locations: [],
    show_on_map: true,
    vertex_id: null,
    thumbnail_url: '',
    location_description: ''
}




const mapDataReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_MAP_DATA:
            newState = JSON.parse(JSON.stringify(state))
            newState.Roads = action.mapData.Roads
            newState.campaign_id = action.mapData.campaign_id
            newState.child_locations = action.mapData.child_locations
            newState.id = action.mapData.id
            newState.image_url = action.mapData.image_url
            newState.name = action.mapData.name
            newState.parent_locations = action.mapData.parent_locations
            newState.show_on_map = action.mapData.show_on_map
            newState.vertex_id = action.mapData.vertex_id
            newState.thumbnail_url = action.mapData.thumbnail_url
            newState.location_description = action.mapData.location_description
            return newState
        case LOAD_NEW_LOCATION:
            newState = JSON.parse(JSON.stringify(state))
            newState.child_locations.push(action.newLoc)
            // console.log(newState.child_locations, "NEWSTATE!?!?!??!?")
            return newState

        default:
            return state;

    };
};



export default mapDataReducer
