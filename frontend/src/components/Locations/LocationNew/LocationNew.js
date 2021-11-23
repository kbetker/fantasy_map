import React, { useState } from "react"
import "./LocationNew.css"
import { sendVertexData, sendSelectedVertex, sendCreateLocation } from "../../../store/add_edit_location"
import { useDispatch, useSelector } from "react-redux"

function LocationNew() {
    const addEditLocation = useSelector(state => state.add_edit_location)
    const mapControls = useSelector(state => state.map_controls)
    const mapData = useSelector(state => state.map_data)
    const dispatch = useDispatch()


    // const [campaign_id, setcampaign_id] = useState()
    const [name, setName] = useState("")
    const [location_description, setlocation_description] = useState()
    // const [show_on_map, setshow_on_map] = useState()
    // const [discovered, setdiscovered] = useState()
    // const [vertex_id, setvertex_id] = useState()
    // const [image_url, setimage_url] = useState()
    // const [thumbnail_url, setthumbnail_url] = useState()
    // const [min_visible_scale, setmin_visible_scale] = useState()
    // const [max_visible_scale, setmax_visible_scale] = useState()
    // const [name_offset_x, setname_offset_x] = useState()
    // const [name_offset_y, setname_offset_y] = useState()
    // const [name_font_size_min, setname_font_size_min] = useState()
    // const [name_font_size_max, setname_font_size_max] = useState()
    // const [name_font_family, setname_font_family] = useState()
    // const [loc_vertex_size_min, setloc_vertex_size_min] = useState()
    // const [loc_vertex_size_max, setloc_vertex_size_max] = useState()
    // const [loc_vertex_stroke, setloc_vertex_stroke] = useState()
    // const [location_color, setlocation_color] = useState()
    // const [location_stroke_color, setlocation_stroke_color] = useState()


    function handleSubmit(){
        let payload = {
        vertex_id: addEditLocation.selected_vertex?.id,
        name,
        location_description,
        coord_x: mapControls.coordX,
        coord_y: mapControls.coordY,
        parent_location: mapData.id
        }

        dispatch(sendCreateLocation(payload))

    }


    return (
        <div className="locationNewContainer">
            <h2>New Location</h2>
            <input
                type="text"
                placeholder="Name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="newLocInput"
            ></input>

               <textarea
                type="text"
                placeholder="Description..."
                value={location_description}
                onChange={(e) => setlocation_description(e.target.value)}
                className="newLocTextarea"
            ></textarea>

            <div
            className={`${addEditLocation.select_vertex === "newVertex" ? "newLocButtonSelected" : "newLocButton"}`}
            onClick={()=> [dispatch(sendVertexData("newVertex")), dispatch(sendSelectedVertex({id: null, coord_x: null, coord_y:null}))]}>
                Add new vertex
            </div>

            <div
            className={`${addEditLocation.select_vertex === "selectExisting" ? "newLocButtonSelected" : "newLocButton"}`}
            onClick={()=> dispatch(sendVertexData("selectExisting"))}>
               Select Existing Vertex
            </div>

          { addEditLocation.select_vertex === "selectExisting" && <div className="vertexContainer">
                <div>Vertex id: {addEditLocation.selected_vertex.id}</div>
                <div>Coordinate X: {addEditLocation.selected_vertex.coord_x}</div>
                <div>Coordinate Y: {addEditLocation.selected_vertex.coord_y}</div>
            </div>}

            { addEditLocation.select_vertex === "newVertex" && <div className="vertexContainer">
                <div>Coordinate X: {mapControls.coordX}</div>
                <div>Coordinate Y: {mapControls.coordY}</div>
            </div>}

            <div
            className="newLocButton"
            onClick={()=> handleSubmit()}>
              Submit
            </div>


        </div>
    )
}

export default LocationNew
