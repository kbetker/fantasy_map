import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"
import downArrow from "./downArrow.svg"
import { sendLocationInformation } from "../../store/mapControls"
import { sendSidebarName } from "../../store/mapControls"
import { sendXY_coordinates } from "../../store/mapControls"
import { sendSelectedVertex, sendLocData } from "../../store/add_edit_location"


function Map() {

    const mapData = useSelector(state => state.map_data)
    const [handsDown, setHandsDown] = useState(false)
    const addEditLocation = useSelector(state => state.add_edit_location)
    const [imageSize, setImageSize] = useState({ imageX: '3000px', imageY: '3000px' })
    const [isLoaded, setIsLoaded] = useState(false)
    const [selectedVertex, setSelectedVertex] = useState(0)
    const mapImage = useRef()
    const mapContainer = useRef()
    const mapControl = useSelector(state => state.map_controls)
    const stroke = useRef('')
    const dispatch = useDispatch()



    useEffect(() => {
        mapImage.current.addEventListener("load", (e) => {
            let mapX = mapImage.current?.clientWidth
            let mapY = mapImage.current?.clientHeight
            setImageSize({ imageX: mapX, imageY: mapY })
            setIsLoaded(true)
        })

        window.addEventListener("keydown", (e) => {
            if (e.code === "Space") {
                mapContainer.current.classList.add("handCursor")
                mapContainer.current.focus()
                setHandsDown(true)
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.code === "Space") {
                mapContainer.current.classList.remove("handCursor")
                setHandsDown(false)
            }
        })

    }, [])

    function handleClick(e) {
        if (handsDown) return;
        let xPos = Math.round(((e.clientX) / mapControl.scale) - (mapControl.positionX / mapControl.scale))
        let yPos = Math.round((e.clientY / mapControl.scale) - ((mapControl.positionY + 50) / mapControl.scale))
        dispatch(sendXY_coordinates({ coordX: xPos, coordY: yPos }))
    }

    useEffect(() => {
        stroke.current = Math.ceil(1 / mapControl.scale)
    }, [mapControl.scale])

    function showVertices() {
        if (addEditLocation.select_vertex === "selectExisting") {
            return true
        } else {
            return false
        }
    }

    function locationNameClick(location) {
        if (handsDown) return;
        if (mapControl.sideBarName === "Location List" || mapControl.sideBarName === "Location Information") {
            dispatch(sendLocationInformation({
                name: location.name,
                location_id: location.id,
                location_description: location.location_description,
                thumbnail_url: location.thumbnail_url,
            }))
            dispatch(sendSidebarName('Location Information'))
        }  if (mapControl.sideBarName ===  "Edit Location") {
            dispatch(sendLocData(location))
            // console.log(location)

        }
    }

    function isVisible(loc) {
        if (mapControl.scale >= loc.min_visible_scale * 0.01 && mapControl.scale <= loc.max_visible_scale * 0.01) {
            if (mapControl.sideBarName === "Add Location") {
                return 0.4
            } else {
                return 1
            }
        } else {
            return 0
        }
    }

    function vertexClick(e) {
        dispatch(sendSelectedVertex({ id: e.id, coord_x: e.coord_x, coord_y: e.coord_y }))
    }


    function textShadow(loc){
    return  ` -${stroke.current}px   -${stroke.current}px 0 ${loc.location_stroke_color},
      0  -${stroke.current}px 0 ${loc.location_stroke_color},
          ${stroke.current}px -${stroke.current}px 0 ${loc.location_stroke_color},
          ${stroke.current}px  0   0 ${loc.location_stroke_color},
          ${stroke.current}px  ${stroke.current}px 0 ${loc.location_stroke_color},
      0   ${stroke.current}px 0 ${loc.location_stroke_color},
         -${stroke.current}px  ${stroke.current}px 0 ${loc.location_stroke_color},
         -${stroke.current}px  0   0 ${loc.location_stroke_color}`
    }





    return (

        <div className="mapContainer" ref={mapContainer} onClick={((e) => handleClick(e))}>


            {(mapData.Roads.length > 0 && isLoaded) && <>
                {mapData.Roads.map(road =>
                    <div key={`key-${road.id}`}>
                        <Roads props={{ "mapData": road, "imageSize": imageSize }} />
                    </div>
                )}
            </>
            }

            {mapData.child_locations.map(location =>
                <div className="locationContainer" key={`locKey-${location.id}`}>

                    {location.id === addEditLocation.id ?

                        <div
                            className="locationName"
                            key={`dude-${location.id}`}
                            onClick={(e) => locationNameClick(location)}
                            style={{
                                left: `${location.Vertex?.coord_x}px`,
                                top: `${location.Vertex?.coord_y}px`,
                                opacity: `${isVisible(location)}`,
                                fontSize: `${Math.ceil(addEditLocation.name_font_size_max / mapControl.scale)}px`,
                                color: `${addEditLocation.location_color}`,
                                transform: `translate(${addEditLocation.name_offset_x / mapControl.scale}px, ${addEditLocation.name_offset_y / mapControl.scale}px)`,
                                textShadow: textShadow(addEditLocation),
                            }}

                        >
                            {location.name} ?????
                        </div>




                        : <div
                            className="locationName"
                            key={`dude-${location.id}`}
                            onClick={(e) => locationNameClick(location)}
                            style={{
                                left: `${location.Vertex?.coord_x}px`,
                                top: `${location.Vertex?.coord_y}px`,
                                opacity: `${isVisible(location)}`,
                                fontSize: `${Math.ceil(location.name_font_size_max / mapControl.scale)}px`,
                                color: `${location.location_color}`,
                                transform: `translate(${location.name_offset_x / mapControl.scale}px, ${location.name_offset_y / mapControl.scale}px)`,
                                textShadow: textShadow(location),
                                pointerEvents: `${mapControl.sideBarName === "Add Location" ? "none" : "initial"}`,
                            }}

                        >
                            {location.name}
                        </div>
                    }



                    <img
                        src={downArrow}
                        className="downArrow"
                        alt=""
                        style={{
                            left: `${location.Vertex?.coord_x}px`,
                            top: `${location.Vertex?.coord_y}px`,

                        }}
                        id={`arrow-${location.id}`}

                    ></img>


                    <div
                        className="location"
                        id={`loc-${location.id}`}
                        style={{
                            left: `${location.Vertex?.coord_x}px`,
                            top: `${location.Vertex?.coord_y}px`,
                            minWidth: "8px",
                            minHeight: "8px",
                            width: `${Math.ceil(9 / mapControl.scale)}px`,
                            height: `${Math.ceil(9 / mapControl.scale)}px`,
                            maxWidth: "30px",
                            maxHeight: "30px",
                            opacity: `${(mapControl.scale >= location.min_visible_scale * 0.01 && mapControl.scale <= location.max_visible_scale * 0.01) ? 1 : 0}`,
                        }}>
                    </div>

                    <div
                        className="locationOutLine"
                        id={`locOutLine-${location.id}`}
                        style={{
                            left: `${location.Vertex?.coord_x}px`,
                            top: `${location.Vertex?.coord_y}px`,
                            minWidth: "12px",
                            minHeight: "12px",
                            width: `${Math.ceil((9 / mapControl.scale) + Math.ceil(2 / mapControl.scale))}px`,
                            height: `${Math.ceil((9 / mapControl.scale) + Math.ceil(2 / mapControl.scale))}px`,
                            maxWidth: "34px",
                            maxHeight: "34px",
                            opacity: `${(mapControl.scale >= location.min_visible_scale * 0.01 && mapControl.scale <= location.max_visible_scale * 0.01) ? 1 : 0}`,

                        }}>
                    </div>
                </div>
            )}



            {addEditLocation.select_vertex === "newVertex" && mapControl.sideBarName === "Add Location" && <div
                className="location"
                style={{
                    left: `${mapControl.coordX - 3}px`,
                    top: `${mapControl.coordY - 3}px`,
                    backgroundColor: "black",
                    width: `${9 / mapControl.scale}px`,
                    height: `${9 / mapControl.scale}px`,
                    border: `${2 / mapControl.scale}px solid white`,
                }}>
            </div>}


            {mapData.Roads.map(vertex => <div key={`roadKey-${vertex.id}`}>   <>
                {vertex.road_vertices.map((v, int) =>
                    <div
                        key={`vertexKey-${v.id}`}
                        className="vertex" id={`${v.id}-v`}
                        onClick={(e) => vertexClick(v)}
                        style={{
                            left: `${v.coord_x - 3}px`,
                            top: `${v.coord_y - 3}px`,
                            backgroundColor: "white",
                            width: `${6 / mapControl.scale}px`,
                            height: `${6 / mapControl.scale}px`,
                            border: `${2 / mapControl.scale}px solid black`,
                            display: `${showVertices() ? "initial" : "none"}`,
                            zIndex: addEditLocation === "selectExisting" ? 10 : 4


                        }}>
                    </div>
                )}
            </></div>)}


            <img
                alt='Map'
                src={mapData.image_url}
                className="mapImage"
                ref={mapImage}
                onClick={(e) => handleClick(e)}
            />

        </div>)
}

export default Map
