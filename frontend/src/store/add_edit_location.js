//==================== Loads all locations by campaign id =====================\\
const LOCATION_DATA = 'mapdata/LOCATION_DATA';

export const loadLocData = (locData) => {
    return {
        type: LOCATION_DATA,
        locData
    };
};

export const sendLocData = (locData) => async (dispatch) => {
    dispatch(loadLocData(locData));
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
}


const locationReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case LOCATION_DATA:
            newState = Object.assign({}, state);
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

        default:
            return state;

    };
};



export default locationReducer
