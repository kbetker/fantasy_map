import React, { useState } from "react"
import "./LocationNew.css"
import { sendVertexData, sendSelectedVertex } from "../../../store/add_edit_location"
import { sendCreateLocation } from "../../../store/map"
import { useDispatch, useSelector } from "react-redux"
import { sendLocData } from "../../../store/add_edit_location"
import { sendSidebarName } from "../../../store/mapControls"

function LocationNew() {
    const addEditLocation = useSelector(state => state.add_edit_location)
    const mapControls = useSelector(state => state.map_controls)
    const mapData = useSelector(state => state.map_data)
    const dispatch = useDispatch()

    const [name, setName] = useState("")
    const [location_description, setlocation_description] = useState()



    async function handleSubmit() {
        let payload = {
            vertex_id: addEditLocation.selected_vertex?.id,
            name,
            location_description,
            coord_x: mapControls.coordX,
            coord_y: mapControls.coordY,
            parent_location_id: mapData.id
        }
        let response = await dispatch(sendCreateLocation(payload))
        if (response.ok) {
            dispatch(sendLocData(response.location))
            dispatch(sendSidebarName( "Location Edit"))
        } else {
            alert("Well, something went wrong")
        }
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
                onClick={() => [dispatch(sendVertexData("newVertex")), dispatch(sendSelectedVertex({ id: null, coord_x: null, coord_y: null }))]}>
                 {addEditLocation.select_vertex === "newVertex" && <>&bull;</>}   Create new location
            </div>

            <div
                className={`${addEditLocation.select_vertex === "selectExisting" ? "newLocButtonSelected" : "newLocButton"}`}
                onClick={() => dispatch(sendVertexData("selectExisting"))}>
                 {addEditLocation.select_vertex === "selectExisting" && <>&bull;</>} Select existing vertex
            </div>

            {addEditLocation.select_vertex === "selectExisting" && <div className="vertexContainer">
                <div>Vertex id: {addEditLocation.selected_vertex?.id}</div>
                <div>Coordinate X: {addEditLocation.selected_vertex?.coord_x}</div>
                <div>Coordinate Y: {addEditLocation.selected_vertex?.coord_y}</div>
            </div>}

            {addEditLocation.select_vertex === "newVertex" && <div className="vertexContainer">
                <div>Click anywhere on the map</div>
                <br></br>
                <div>Coordinate X: {mapControls.coordX}</div>
                <div>Coordinate Y: {mapControls.coordY}</div>
            </div>}

            <div
                className="newLocButton"
                onClick={() => handleSubmit()}>
                Submit
            </div>


        </div>
    )
}

export default LocationNew
