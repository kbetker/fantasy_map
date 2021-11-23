import { csrfFetch } from './csrf';

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
            newState.id = action.locData.id
            newState.campaign_id = action.locData.campaign_id
            newState.name = action.locData.name
            newState.show_on_map = action.locData.show_on_map
            newState.discovered = action.locData.discovered
            newState.vertex_id = action.locData.vertex_id
            newState.image_url = action.locData.image_url
            newState.thumbnail_url = action.locData.thumbnail_url
            newState.min_visible_scale = action.locData.min_visible_scale
            newState.max_visible_scale = action.locData.max_visible_scale
            newState.name_offset_x = action.locData.name_offset_x
            newState.name_offset_y = action.locData.name_offset_y
            newState.name_font_size_min = action.locData.name_font_size_min
            newState.name_font_size_max = action.locData.name_font_size_max
            newState.name_font_family = action.locData.name_font_family
            newState.loc_vertex_size_min = action.locData.loc_vertex_size_min
            newState.loc_vertex_size_max = action.locData.loc_vertex_size_max
            newState.loc_vertex_stroke = action.locData.loc_vertex_stroke
            newState.location_color = action.locData.location_color
            newState.location_stroke_color = action.locData.location_stroke_color
            newState.location_description = action.locData.location_description
            newState.select_vertex = action.locData.select_vertex
            newState.selected_vertex = action.locData.selected_vertex

            return newState


        case VERTEX_SELECT:
            newState = Object.assign({}, state);
            newState.select_vertex = action.vertexData
            return newState
        case SELECTED_VERTEX:
            newState = Object.assign({}, state);
            newState.selected_vertex = action.selectedVertex
            return newState

        default:
            return state;

    };
};



export default locationReducer
