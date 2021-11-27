import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"
import downArrow from "./downArrow.svg"
import { sendLocationInformation } from "../../store/mapControls"
import { sendSidebarName } from "../../store/mapControls"
import { sendXY_coordinates } from "../../store/mapControls"
import { sendSelectedVertex, sendLocData } from "../../store/add_edit_location"
import Location_Name from "./Location_Name"


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



    function showVertices() {
        if (addEditLocation.select_vertex === "selectExisting") {
            return true
        } else {
            return false
        }
    }

    function locationNameClick(location) {
        if (handsDown) return;
        if (location.name === addEditLocation.name) return;



        if (mapControl.sideBarName === "Location List" || mapControl.sideBarName === "Location Information") {
            dispatch(sendLocationInformation({
                name: location.name,
                location_id: location.id,
                location_description: location.location_description,
                thumbnail_url: location.thumbnail_url,
            }))
            dispatch(sendSidebarName('Location Information'))
            dispatch(sendLocData(location))
        } if (mapControl.sideBarName === "Edit Location") {
            dispatch(sendLocData(location))
            // console.log(location)
        }
    }

    function isVisible(loc) {
        if (mapControl.scale >= loc.min_visible_scale * 0.01 && mapControl.scale <= loc.max_visible_scale * 0.01) {
            if (mapControl.sideBarName === "Add Location") {
                return {opacity: 0.4, pointer: "initial"}
            } else {
                return {opacity: 1, pointer: "initial"}
            }
        } else {
            return {opacity: 0, pointer: "none"}
        }
    }



    function vertexClick(e) {
        dispatch(sendSelectedVertex({ id: e.id, coord_x: e.coord_x, coord_y: e.coord_y }))
    }


    function textShadow(loc) {
        let X = 1 / mapControl.scale
        let C = loc.location_stroke_color

        return `-${X}px -${X}px  0px ${C},
                    0px -${X}px  0px ${C},
                 ${X}px -${X}px  0px ${C},
                 ${X}px     0px  0px ${C},
                 ${X}px  ${X}px  0px ${C},
                    0px  ${X}px  0px ${C},
                -${X}px  ${X}px  0px ${C},
                -${X}px     0px  0px ${C}`
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
                        <Location_Name props={{location: addEditLocation, locationNameClick, mapControl, isVisible, textShadow, vertex: location.Vertex }} />
                        :
                        <Location_Name props={{location: location, locationNameClick, mapControl, isVisible, textShadow, vertex: location.Vertex }} />
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
