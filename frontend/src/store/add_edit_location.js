import { csrfFetch } from './csrf';
import { sendNewLoc } from './map';

//====================todo=====================\\
const LOCATION_DATA = 'location/LOCATION_DATA';
export const loadLocData = (locData) => {
    return {
        type: LOCATION_DATA,
        locData
    };
};
export const sendLocData = (locData) => async (dispatch) => {
    dispatch(loadLocData(locData));
};


//==================== send to store if creating or selecting existing vertex =====================\\
const VERTEX_SELECT = 'location/VERTEX_SELECT';
export const loadVertexData = (vertexData) => {
    return {
        type: VERTEX_SELECT,
        vertexData
    };
};
export const sendVertexData = (vertexData) => async (dispatch) => {
    dispatch(loadVertexData(vertexData));
};



//==================== send to store selected vertex =====================\\
const SELECTED_VERTEX = 'location/SELECTED_VERTEX';
export const loadSelectedVertex = (selectedVertex) => {
    return {
        type: SELECTED_VERTEX,
        selectedVertex
    };
};
export const sendSelectedVertex = (selectedVertex) => async (dispatch) => {
    dispatch(loadSelectedVertex(selectedVertex));
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

    let vertexId;
    if(newLocation.vertex_id === null){
       const vertexResponse = await csrfFetch('/api/vertex/new', {
           method: "POST",
           headers: {'Content-Type': 'application/json'},
           body: JSON.stringify({coord_x: newLocation.coord_x, coord_y: newLocation.coord_y})
       })
       if(vertexResponse.ok){
           const id = await vertexResponse.json()
           vertexId = id.newVertex.id

       } else {
           alert(vertexResponse)
       }
    } else {
        vertexId = newLocation.vertex_id
    }

    let new_location;
    const locResponse = await csrfFetch('/api/location/new', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: newLocation.name,
            location_description: newLocation.location_description,
            coord_x: newLocation.coord_x,
            coord_y: newLocation.coord_y,
            vertex_id: vertexId
        })
    })
    if(locResponse.ok){
        const newLoc = await locResponse.json()
        new_location = newLoc.newLoc
        new_location["Vertex"] = {id: vertexId, coord_x: newLocation.coord_x, coord_y: newLocation.coord_y}
    }

    const joinedResponse = await csrfFetch('/api/joined_location/new', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            parent_location: newLocation.parent_location,
            child_location: new_location.id
        })
    })
    if(joinedResponse.ok){
        const newJoinedLoc = await joinedResponse.json()
        console.log(newJoinedLoc)
    }


    dispatch(sendNewLoc(new_location))





    // if vertex_id is null, create new vertex with coordX & y
    // return id from api

    //else create location name, vertex_id


    // dispatch(loadCreateLocation(newLocation));
};





const initialState =
{
    campaign_id: null,
    name: null,
    show_on_map: null,
    discovered: null,
    vertex_id: null,
    image_url: null,
    thumbnail_url: null,
    min_visible_scale: null,
    max_visible_scale: null,
    name_offset_x: null,
    name_offset_y: null,
    name_font_size_min: null,
    name_font_size_max: null,
    name_font_family: null,
    loc_vertex_size_min: null,
    loc_vertex_size_max: null,
    loc_vertex_stroke: null,
    location_color: null,
    location_stroke_color: null,
    location_description: null,
    select_vertex: null,
    selected_vertex: {id: null, coord_x: null, coord_y: null}
}


const locationReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOCATION_DATA:
            newState = Object.assign({}, state);
            newState.Roads = action.mapData.Roads
            return newState
        case VERTEX_SELECT:
            newState = Object.assign({}, state);
            newState.select_vertex = action.vertexData
            return newState
        case SELECTED_VERTEX:
            newState = Object.assign({}, state);
            newState.selected_vertex = action.selectedVertex
            return newState
        case CREATE_LOCATION:
            // console.log(action.newLocation)
            newState = JSON.parse(JSON.stringify(state))
            // newState.selected_vertex = action.selectedVertex
            return newState

        default:
            return state;

    };
};



export default locationReducer
