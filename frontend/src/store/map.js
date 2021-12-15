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
            //todo - add
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


//====================   Edit Location   =====================\\
const EDIT_LOCATION = 'location/EDIT_LOCATION';
export const editLocation = (mapData) => {
    return {
        type: EDIT_LOCATION,
        mapData
    };
};
export const sendEditLocation = (mapData) => async (dispatch) => {
    const response = await csrfFetch(`/api/location/edit/${mapData.id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(mapData)

    });

    if(response.ok){
        let data = await response.json()
        let newObj = Object.assign({}, data.response);
        newObj["Vertex"] = data.vertex
        dispatch(editLocation(newObj));
        return newObj
    } else {
        return response
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
    location_description: '',
    map_scale_start_x: null,
    map_scale_start_y: null,
    map_scale_end_x: null,
    map_scale_end_y: null,
    map_scale_measurement: null,
    map_scale_measurement_name: "",
    interface_scale_min: null,
    interface_scale_max: null,
}




const mapDataReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOAD_MAP_DATA:
            newState = JSON.parse(JSON.stringify(state))
            for (let key in newState) { newState[key] = action.mapData[key] }
            return newState
        case EDIT_LOCATION:
            newState = JSON.parse(JSON.stringify(state))
            let index = -1
            for( let i = 0; i < newState.child_locations.length; i++){
                let loc = newState.child_locations[i]
                if(loc.id === action.mapData.id){
                    index = i
                    break
                }
            }
            newState.child_locations[index] = action.mapData
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



// newState.Roads = action.mapData.Roads
// newState.campaign_id = action.mapData.campaign_id
// newState.child_locations = action.mapData.child_locations
// newState.id = action.mapData.id
// newState.image_url = action.mapData.image_url
// newState.name = action.mapData.name
// newState.parent_locations = action.mapData.parent_locations
// newState.show_on_map = action.mapData.show_on_map
// newState.vertex_id = action.mapData.vertex_id
// newState.thumbnail_url = action.mapData.thumbnail_url
// newState.location_description = action.mapData.location_description
// newState.map_scale_start_x = action.mapData.map_scale_start_x
// newState.map_scale_start_y = action.mapData.map_scale_start_y
// newState.map_scale_end_x = action.mapData.map_scale_end_x
// newState.map_scale_end_y = action.mapData.map_scale_end_y
// newState.map_scale_measurement = action.mapData.map_scale_measurement
// newState.map_scale_measurement_name = action.mapData.map_scale_measurement_name
// newState.interface_scale_min = action.mapData.interface_scale_min
// newState.interface_scale_max = action.mapData.interface_scale_max
