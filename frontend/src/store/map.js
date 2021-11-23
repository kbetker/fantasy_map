import { csrfFetch } from './csrf';

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



//==================== Create new Location - name description and vertex_id =====================\\
const CREATE_LOCATION = 'location/CREATE_LOCATION';
export const loadCreateLocation = (newLocation) => {
    return {
        type: CREATE_LOCATION,
        newLocation
    };
};
export const sendCreateLocation = (newLocation) => async (dispatch) => {
    const locResponse = await csrfFetch('/api/location/new', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: newLocation.name,
            location_description: newLocation.location_description,
            coord_x: newLocation.coord_x,
            coord_y: newLocation.coord_y,
            vertex_id: newLocation.vertex_id,
            parent_location_id: Number(newLocation.parent_location_id),
        })
    })
    if(locResponse.ok){
        const newLoc = await locResponse.json()
        newLoc.newLoc["Vertex"] = newLoc.newVertex
        dispatch(loadCreateLocation(newLoc.newLoc))
        return {ok: true, location: newLoc.newLoc}
    } else {
        return {ok: false}
    }
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
        case CREATE_LOCATION:
            newState = JSON.parse(JSON.stringify(state))
            newState.child_locations.push(action.newLocation)
            return newState

        default:
            return state;

    };
};



export default mapDataReducer
