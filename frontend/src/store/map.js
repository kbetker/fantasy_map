const LOAD_ONE = 'session/LOAD_ONE';


export const loadEditSpot = ( spot ) => {
    return {
        type: EDIT_SPOT,
        spot
    };
};




export const fetchSpotById = (id) => async (dispatch) => {
    const response = await fetch(`/api/spot/${id}`);
    if(response.ok){
        const spot = await response.json();
        dispatch(loadOneSpot(spot));
    };
  };


  const initialState = {
    campaign: {id: null, owner_id: null, name: null},
    locations: {id: null, campaign_id: null, name: null, show_on_map: null, vertex_id: null, image_url: null},
    roads: {id: null, location_id, name: null},
    vertices: {},
    neigbors: {},



    }

  const spotReducer = (state = initialState, action) => {
    let newState;
    switch( action.type ){
        case LOAD_ONE:
            newState = Object.assign({}, state);
            newState.spot = action.spot;

        default:
            return state;

    };
};



export default spotReducer
