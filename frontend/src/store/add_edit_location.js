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
    return locData
};



//==================== send to store if creating or selecting existing vertex =====================\\
const VERTEX_SELECT = 'addEditLocation/VERTEX_SELECT';
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
const SELECTED_VERTEX = 'addEditLocation/SELECTED_VERTEX';
export const loadSelectedVertex = (selectedVertex) => {
    return {
        type: SELECTED_VERTEX,
        selectedVertex
    };
};
export const sendSelectedVertex = (selectedVertex) => async (dispatch) => {
    dispatch(loadSelectedVertex(selectedVertex));
};


//==================== send to store starting vertex =====================\\
const START_VERTEX_SCALE = 'addEditLocation/START_VERTEX_SCALE';
export const loadStartVertexScale = (startVertexScale) => {
    return {
        type: START_VERTEX_SCALE,
        startVertexScale
    };
};
export const sendStartVertexScale = (startVertexScale) => async (dispatch) => {
    dispatch(loadStartVertexScale(startVertexScale));
};


//==================== send to store selected vertex =====================\\
const END_VERTEX_SCALE = 'addEditLocation/END_VERTEX_SCALE';
export const loadEndVertexScale = (endVertexScale) => {
    return {
        type: END_VERTEX_SCALE,
        endVertexScale
    };
};
export const sendEndVertexScale = (endVertexScale) => async (dispatch) => {
    dispatch(loadEndVertexScale(endVertexScale));
};


//    location_stroke_color
//==================== Update Color =====================\\
const LOCATION_COLOR = 'addEditLocation/LOCATION_COLOR';
const LOCATION_STROKE_COLOR = 'addEditLocation/LOCATION_STROKE_COLOR';
const VERTEX_COLOR = 'addEditLocation/VERTEX_COLOR';
const VERTEX_STROKE_COLOR = 'location/VERTEX_STROKE_COLOR';


export const location_color = (color) => { return { type: LOCATION_COLOR, color } };
export const location_stroke_color = (color) => { return { type: LOCATION_STROKE_COLOR, color } };
export const loc_vertex_color = (color) => { return { type: VERTEX_COLOR, color } };
export const loc_vertex_stroke_color = (color) => { return { type: VERTEX_STROKE_COLOR, color } };


export const send_color = (value, attribute) => async (dispatch) => {
    switch (attribute) {
        case "location_color":
            dispatch(location_color(value));
            break;
        case "location_stroke_color":
            dispatch(location_stroke_color(value));
            break;
        case "loc_vertex_color":
            dispatch(loc_vertex_color(value));
            break;
        case "loc_vertex_stroke_color":
            dispatch(loc_vertex_stroke_color(value));
            break;
        default:
            break;
    }
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
    name_font_size: null,
    name_font_size_max: null,
    name_font_family: null,
    loc_vertex_size_min: null,
    loc_vertex_size: null,
    loc_vertex_size_max: null,
    loc_vertex_stroke: null,
    location_color: null,
    location_stroke_color: null,
    location_description: null,
    loc_vertex_color: null,
    loc_vertex_stroke_color: null,
    select_vertex: null,
    selected_vertex: { id: null, coord_x: null, coord_y: null },
    id: null,
    map_scale_start_x: null,
    map_scale_start_y: null,
    map_scale_end_x: null,
    map_scale_end_y: null,
    map_scale_measurement: null,
    map_scale_measurement_name: null,
    interface_scale_min: null,
    interface_scale_max: null,
    map_scale_pixes: null,
}

function measurement(x1,x2,y1,y2){
    let A = Math.pow(Math.abs(x2-x1), 2)
    let B = Math.pow(Math.abs(y2-y1), 2)
    // console.log(A,B, "WTFWTFW")
    // let C = Math.abs(A+B)
    return Math.sqrt(A+B)

}


const locationReducer = (state = initialState, action) => {
    let newState;
    let m;
    switch (action.type) {
        case LOCATION_DATA:
            newState = Object.assign({}, state);
            for (let key in state) { newState[key] = action.locData[key] }
            return newState

        case VERTEX_SELECT:
            newState = Object.assign({}, state);
            newState.select_vertex = action.vertexData
            return newState
        case SELECTED_VERTEX:
            newState = Object.assign({}, state);
            newState.selected_vertex = action.selectedVertex
            return newState
        case LOCATION_COLOR:
            newState = Object.assign({}, state);
            newState.location_color = action.color
            return newState
        case LOCATION_STROKE_COLOR:
            newState = Object.assign({}, state);
            newState.location_stroke_color = action.color
            return newState
        case VERTEX_COLOR:
            newState = Object.assign({}, state);
            newState.loc_vertex_color = action.color
            return newState
        case VERTEX_STROKE_COLOR:
            newState = Object.assign({}, state);
            newState.loc_vertex_stroke_color = action.color
            return newState
        case START_VERTEX_SCALE:
            newState = Object.assign({}, state);
            newState.map_scale_start_x = action.startVertexScale.coordX
            newState.map_scale_start_y = action.startVertexScale.coordY
            m = measurement(action.startVertexScale.coordX, newState.map_scale_end_x, action.startVertexScale.coordY, newState.map_scale_end_y)
            newState.map_scale_pixels = Math.round(m)
            return newState
        case END_VERTEX_SCALE:
            newState = Object.assign({}, state);
            newState.map_scale_end_x = action.endVertexScale.coordX
            newState.map_scale_end_y = action.endVertexScale.coordY
            m = measurement(newState.map_scale_start_x, action.endVertexScale.coordX, newState.map_scale_start_y, action.endVertexScale.coordY)
            newState.map_scale_pixels = Math.round(m)
            return newState



        default:
            return state;

    };
};



export default locationReducer


 // newState.id = action.locData.id
            // newState.campaign_id = action.locData.campaign_id
            // newState.name = action.locData.name
            // newState.show_on_map = action.locData.show_on_map
            // newState.discovered = action.locData.discovered
            // newState.vertex_id = action.locData.vertex_id
            // newState.image_url = action.locData.image_url
            // newState.thumbnail_url = action.locData.thumbnail_url
            // newState.min_visible_scale = action.locData.min_visible_scale
            // newState.max_visible_scale = action.locData.max_visible_scale
            // newState.name_offset_x = action.locData.name_offset_x
            // newState.name_offset_y = action.locData.name_offset_y
            // newState.name_font_size_min = action.locData.name_font_size_min
            // newState.loc_vertex_size = action.locData.loc_vertex_size
            // newState.name_font_size_max = action.locData.name_font_size_max
            // newState.name_font_family = action.locData.name_font_family
            // newState.loc_vertex_size_min = action.locData.loc_vertex_size_min
            // newState.loc_vertex_size_max = action.locData.loc_vertex_size_max
            // newState.loc_vertex_stroke = action.locData.loc_vertex_stroke
            // newState.location_color = action.locData.location_color
            // newState.location_stroke_color = action.locData.location_stroke_color
            // newState.location_description = action.locData.location_description
            // newState.select_vertex = action.locData.select_vertex
            // newState.selected_vertex = action.locData.selected_vertex
            // newState.name_font_size = action.locData.name_font_size
            // newState.loc_vertex_stroke_color = action.locData.loc_vertex_stroke_color
            // newState.loc_vertex_color = action.locData.loc_vertex_color
