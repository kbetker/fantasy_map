import React from "react";

function Vertex({props}) {
    const loc = props.location
    const setOpacity = () => (props.mapControl.scale >= loc.min_visible_scale * 0.01 && props.mapControl.scale <= loc.max_visible_scale * 0.01) ? 1 : 0

    function setSize(){
        if(loc.loc_vertex_size / props.mapControl.scale > loc.loc_vertex_size_max){
            return loc.loc_vertex_size_max
        } else if (loc.loc_vertex_size / props.mapControl.scale < loc.loc_vertex_size_min ){
            return loc.loc_vertex_size_min
        } else {
            return loc.loc_vertex_size / props.mapControl.scale
        }
    }

    function setStroke(){
        if(loc.loc_vertex_size / props.mapControl.scale > loc.loc_vertex_size_max){
            return (loc.loc_vertex_size_max) + Math.ceil(loc.loc_vertex_stroke / props.mapControl.scale)
        } else if (loc.loc_vertex_size / props.mapControl.scale < loc.loc_vertex_size_min ){
            return (loc.loc_vertex_size_min) + Math.ceil(loc.loc_vertex_stroke / props.mapControl.scale)
        } else {
            return (loc.loc_vertex_size / props.mapControl.scale) + Math.ceil(loc.loc_vertex_stroke / props.mapControl.scale)
        }
    }

    return (<>
        <div
            className="location"
            id={`loc-${loc.id}`}
            style={{
                left: `${loc.Vertex?.coord_x}px`,
                top: `${loc.Vertex?.coord_y}px`,
                width: `${setSize()}px`,
                height: `${setSize()}px`,
                opacity: `${setOpacity()}`,
                backgroundColor: `${loc.loc_vertex_color}`
            }}>
        </div>

        <div
            className="locationOutLine"
            id={`locOutLine-${loc.id}`}
            style={{
                left: `${loc.Vertex?.coord_x}px`,
                top: `${loc.Vertex?.coord_y}px`,
                width: `${setStroke()}px`,
                height: `${setStroke()}px`,
                opacity: `${setOpacity()}`,
                backgroundColor: `${loc.loc_vertex_stroke_color}`
            }}>
        </div>









    </>)
}

export default Vertex
