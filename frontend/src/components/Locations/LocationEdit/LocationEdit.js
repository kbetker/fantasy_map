import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./LocationEdit.css"
import "./RangeStyles.css"
import { sendLocData } from "../../../store/add_edit_location";
import Colors from "../../ColorPicker/Colors";
import { send_color } from "../../../store/add_edit_location";
import locEdit from "./edit.svg"

function LocationEdit() {

    const location = useSelector(state => state.add_edit_location)
    const mapControls = useSelector(state => state.map_controls)
    const dispatch = useDispatch();
    const locForm = useRef()
    const [currentLoc, setCurrentLoc] = useState("")
    const [colorAttribute, setColorAttribute] = useState("")
    const updateMapTimeOut = useRef('')
    const updateMapTimeOut2 = useRef('')
    const updateColorTimeout = useRef('')


    const [name, setName] = useState("") // ******
    const [campaign_id, setCampaign_id] = useState(0)
    const [location_description, setLocation_description] = useState("") // ******
    const [show_on_map, setShow_on_map] = useState(true)
    const [discovered, setDiscovered] = useState(true)
    const [vertex_id, setVertex_id] = useState(0)
    const [image_url, setImage_url] = useState("") // ******
    const [thumbnail_url, setThumbnail_url] = useState("") // ******
    const [min_visible_scale, setMin_visible_scale] = useState(25) // ******
    const [max_visible_scale, setMax_visible_scale] = useState(500) // ******
    const [name_offset_x, setName_offset_x] = useState(0) // ******
    const [name_offset_y, setName_offset_y] = useState(0) // ******
    const [name_font_size_min, setName_font_size_min] = useState(20)
    const [name_font_size, setName_font_size] = useState(30)
    const [name_font_size_max, setName_font_size_max] = useState(20)
    const [name_font_family, setName_font_family] = useState("Verdana")
    const [loc_vertex_size_min, setLoc_vertex_size_min] = useState(8)
    const [loc_vertex_size, setLoc_vertex_size] = useState(8)
    const [loc_vertex_size_max, setLoc_vertex_size_max] = useState(8)
    const [loc_vertex_stroke, setLoc_vertex_stroke] = useState(4)
    const [location_color, setLocation_color] = useState("black") // ******
    const [location_stroke_color, setLocation_stroke_color] = useState("white") // ******
    const [id, setId] = useState() // ******  NA




    useEffect(() => {
        setId(location.id)
        // setSelect_vertex(location.select_vertex)
        // setSelected_vertex(location.selected_vertex)
        setCampaign_id(location.campaign_id || "")
        setDiscovered(location.discovered || true)
        setImage_url(location.image_url || "")
        setLoc_vertex_size_max(location.loc_vertex_size_max || "")
        setLoc_vertex_size(location.loc_vertex_size_max || "")
        setLoc_vertex_size_min(location.loc_vertex_size_min || "")
        setLoc_vertex_stroke(location.loc_vertex_stroke || "")
        setLocation_color(location.location_color || "")
        setLocation_description(location.location_description || "")
        setLocation_stroke_color(location.location_stroke_color || "")
        setMax_visible_scale(location.max_visible_scale || "")
        setMin_visible_scale(location.min_visible_scale || "")
        setName(location.name || "")
        setName_font_family(location.name_font_family || "")
        setName_font_size_max(location.name_font_size_max || "")
        setName_font_size(location.name_font_size || "")
        setName_font_size_min(location.name_font_size_min || "")
        setName_offset_x(location.name_offset_x || "")
        setName_offset_y(location.name_offset_y || "")
        setShow_on_map(location.show_on_map || "")
        setThumbnail_url(location.thumbnail_url || "")
        setVertex_id(location.vertex_id || "")

        // srolls to top when selecting new location
        if (currentLoc === location.name) {
            return
        } else {

            locForm.current.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
            setCurrentLoc(location.name)
        }


    }, [location])


    let payload = {
        id: id,
        name: name,
        campaign_id: campaign_id,
        location_description: location_description,
        show_on_map: show_on_map,
        discovered: discovered,
        vertex_id: vertex_id,
        image_url: image_url,
        thumbnail_url: thumbnail_url,
        min_visible_scale: min_visible_scale,
        max_visible_scale: max_visible_scale,
        name_offset_x: Number(name_offset_x),
        name_offset_y: Number(name_offset_y),
        name_font_size_min: name_font_size_min,
        name_font_size: name_font_size,
        name_font_size_max: name_font_size_max,
        name_font_family: name_font_family,
        loc_vertex_size_min: loc_vertex_size_min,
        loc_vertex_size: loc_vertex_size,
        loc_vertex_size_max: loc_vertex_size_max,
        loc_vertex_stroke: loc_vertex_stroke,
        location_color: location_color,
        location_stroke_color: location_stroke_color,
    }



    // updates afte a second instead of with every change
    function updateMapDelay(id, value) {
        clearInterval(updateMapTimeOut.current)
        payload[id] = value
        updateMapTimeOut.current = setTimeout(() => {
            dispatch(sendLocData(payload))
        }, 1000);
    }

    function updateMapDelay2() {
        clearInterval(updateMapTimeOut2.current)
        updateMapTimeOut2.current = setTimeout(() => {
            dispatch(sendLocData(payload))
        }, 100);
    }

    function updateColor(color, attribute) {
        clearInterval(updateColorTimeout.current)
        updateColorTimeout.current = setTimeout(() => {
            dispatch(send_color(color, attribute))
        }, 100);
    }

    function closeColorPicker() {
        setColorAttribute("")
    }



    return (

        <div className="locationEditContainer">

            {colorAttribute === "location_color" && <Colors props={{ color: location_color, updateColor, updateMapDelay, attribute: "location_color", closeColorPicker }} />}
            {colorAttribute === "location_stroke_color" && <Colors props={{ color: location_stroke_color, updateColor, updateMapDelay, attribute: "location_stroke_color", closeColorPicker }} />}

            <div className="locationEditForm" ref={locForm}>
                <h2>Edit Location</h2>


                <div className="colorDiv">

                    <input
                        type="text"
                        id="name"
                        placeholder="Name..."
                        value={name}
                        onChange={(e) => [setName(e.target.value), setCurrentLoc(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                        className="colorSwatch"
                        style={{
                            color: location_color,

                            textShadow: `-1px -1px  0px ${location_stroke_color},
                                      0px -1px  0px ${location_stroke_color},
                                      1px -1px  0px ${location_stroke_color},
                                      1px  0px  0px ${location_stroke_color},
                                      1px  1px  0px ${location_stroke_color},
                                      0px  1px  0px ${location_stroke_color},
                                     -1px  1px  0px ${location_stroke_color},
                                     -1px  0px  0px ${location_stroke_color}`
                        }}
                    ></input>


                    <div className="colorEditButtons">
                        <button
                            onClick={() => setColorAttribute("location_color")}
                            className="colorButton"
                        >
                            <img src={locEdit}></img>
                            <div>Color</div>
                        </button>

                        <button
                            onClick={() => setColorAttribute("location_stroke_color")}
                            className="colorButton"
                        >
                            <img src={locEdit}></img>
                            <div>Stroke</div>

                        </button>
                    </div>
                </div>





                {thumbnail_url ?
                    <img className="locationThumbnail" src={`${thumbnail_url}`} alt="Location Thumbnail" />
                    : <img className="locationThumbnail" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" alt="Not Thumbnail" />
                }

                <input
                    type="text"
                    placeholder="Thumbnail URL..."
                    value={thumbnail_url}
                    onChange={(e) => [setThumbnail_url(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                    className="editLocInput imgUrl"
                    id="thumbnail_url"
                ></input>


                <textarea
                    type="text"
                    placeholder="Description..."
                    value={location_description}
                    onChange={(e) => [setLocation_description(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                    className="editLocTextarea"
                    id="location_description"
                ></textarea>



                <div className="scaleDiv">
                    <h2>Visible Scale</h2>
                    <div className="currentScale">Current Scale: {(mapControls.scale * 100).toFixed(1)}</div>

                    <div className="scaleInputs">
                        <div>Min:</div>
                        <input
                            type="number"
                            placeholder="0"
                            value={min_visible_scale}
                            onChange={(e) => [setMin_visible_scale(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                            className="scaleInput"
                            id="min_visible_scale"
                        ></input>

                        <div>Max:</div>
                        <input
                            type="number"
                            placeholder="0"
                            value={max_visible_scale}
                            onChange={(e) => [setMax_visible_scale(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                            className="scaleInput"
                            id="max_visible_scale"
                        ></input>
                    </div>
                </div>

                <div className="nameOffsetDiv">

                    <h2 style={{ alignSelf: "flex-start" }}>Name Offset</h2>

                    <div className="offsetDiv">
                        <div>X: {name_offset_x}</div>
                        <input
                            type="range"
                            placeholder="0"
                            min="-600"
                            max="400"
                            value={name_offset_x}
                            onChange={(e) => [setName_offset_x(e.target.value), updateMapDelay2()]}
                            className="editLocInput"
                        ></input>
                    </div>

                    <div>
                        <div>Y: {name_offset_y}</div>
                        <input
                            type="range"
                            placeholder="0"
                            min="-100"
                            max="50"
                            value={name_offset_y}
                            onChange={(e) => [setName_offset_y(e.target.value), updateMapDelay2()]}
                            className="editLocInput"
                        ></input>
                    </div>
                </div>



                <div className="booleans nameOffsetDiv">
                    <div>
                        <label htmlFor="show on map">Show on map?:</label>
                        <input
                            name="show on map"
                            type="checkbox"
                            checked={show_on_map}
                            onChange={(e) => { setShow_on_map(e.target.checked) }} /
                        >
                    </div>


                    <div>
                        <label htmlFor="Discovered">Discovered?:</label>
                        <input
                            name="Discovered"
                            type="checkbox"
                            checked={discovered}
                            onChange={(e) => { setDiscovered(e.target.checked) }} /
                        >
                    </div>

                </div>



                <div className="fontSizes nameOffsetDiv">
                    <div className="currFontSize">Current actual font size: {(name_font_size / mapControls.scale).toFixed(2)}</div>

                    <div className="fontSize">
                        <div>Target font size:</div>
                        <input
                            type="font size"
                            value={name_font_size}
                            onChange={(e) => { setName_font_size(e.target.checked) }} /
                        >
                    </div>

                    <div className="fontSize">
                        <div>Minimum font size:</div>
                        <input
                            type="font size"
                            value={name_font_size_min}
                            onChange={(e) => { setName_font_size_min(e.target.checked) }} /
                        >
                    </div>

                    <div className="fontSize">
                        <div>Maximum font size:</div>
                        <input
                            type="font size"
                            value={name_font_size_max}
                            onChange={(e) => { setName_font_size_max(e.target.checked) }} /
                        >
                    </div>
                </div>






                {image_url ?
                    <img className="locationThumbnail" src={`${image_url}`} alt="Location Thumbnail" />
                    : <img className="locationThumbnail" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" alt="Not Thumbnail" />
                }
                <input
                    type="text"
                    placeholder="Map Image URL..."
                    value={image_url}
                    onChange={(e) => [setImage_url(e.target.value), updateMapDelay(e.target.id, e.target.value)]}
                    className="editLocInput imgUrl"
                    id="image_url"
                ></input>



            </div>

            <div className="updateMap">
                {/* <button
                    className="updateMapButton"
                    onClick={() => updateMapDelay()}
                >
                    Update Map
                </button> */}
                <button className="updateMapButton">Save Changes</button>
            </div>


        </div>



    )
}

export default LocationEdit
