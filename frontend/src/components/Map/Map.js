import React, { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"
import downArrow from "./downArrow.svg"
import { sendLocationInformation } from "../../store/mapControls"
import { sendSidebarName } from "../../store/mapControls"
import { sendXY_coordinates } from "../../store/mapControls"

function Map() {

    const mapData = useSelector(state => state.map_data)
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
            }
        })

        window.addEventListener("keyup", (e) => {
            if (e.code === "Space") {
                mapContainer.current.classList.remove("handCursor")
            }
        })

    }, [])

    function handleClick(e) {
        let xPos = Math.round(((e.clientX) / mapControl.scale) - (mapControl.positionX / mapControl.scale))
        let yPos = Math.round((e.clientY / mapControl.scale) - ((mapControl.positionY + 50) / mapControl.scale))
        dispatch(sendXY_coordinates({coordX: xPos, coordY: yPos}))
    }

    useEffect(() => {
        stroke.current = Math.ceil(1 / mapControl.scale)
    }, [mapControl.scale])

    function showVertices(){
        if( mapControl.sideBarName === "Location Information"
            || mapControl.sideBarName === "Location List"
            || mapControl.sideBarName === "Road Info") {
                return false
            } else {
                return true
            }
    }


    function handleNewLocation(){
            // campaign_id
            // name
            // show_on_map
            // discovered
            // vertex_id
            // image_url
            // thumbnail_url
            // min_visible_scale
            // max_visible_scale
            // name_offset_x
            // name_offset_y
            // name_font_size_min
            // name_font_size_max
            // name_font_family
            // loc_vertex_size_min
            // loc_vertex_size_max
            // loc_vertex_stroke
            // location_color
            // location_stroke_color
            // location_description
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
                    <div
                        className="locationName"
                        key={`dude-${location.id}`}
                        onClick={(e) => [
                            dispatch(sendLocationInformation({
                                name: location.name,
                                location_id: location.id,
                                location_description: location.location_description,
                                thumbnail_url: location.thumbnail_url,
                            })),
                            dispatch(sendSidebarName('Location Information'))

                        ]}
                        style={{
                            left: `${location.Vertex?.coord_x}px`,
                            top: `${location.Vertex?.coord_y}px`,
                            opacity: `${(mapControl.scale >= location.min_visible_scale * 0.01 && mapControl.scale <= location.max_visible_scale * 0.01) ? 1 : 0}`,
                            // minWidth: "8px",
                            // minHeight: "8px",
                            fontSize: `${Math.ceil(location.name_font_size_max / mapControl.scale)}px`,
                            // maxWidth: "30px",
                            // maxHeight: "30px",
                            color: "black",
                            transform: `translate(${location.name_offset_x / mapControl.scale}px, ${location.name_offset_y / mapControl.scale}px)`,
                            // transform: `translate(${20 / mapControl.scale}px, ${-5 / mapControl.scale }px)`,
                            textShadow: `
                        -${stroke.current}px -${stroke.current}px 0 #FFF,
                        0   -${stroke.current}px 0 #FFF,
                        ${stroke.current}px -${stroke.current}px 0 #FFF,
                        ${stroke.current}px  0   0 #FFF,
                        ${stroke.current}px  ${stroke.current}px 0 #FFF,
                        0    ${stroke.current}px 0 #FFF,
                       -${stroke.current}px  ${stroke.current}px 0 #FFF,
                       -${stroke.current}px  0   0 #FFF`,
                            // border: `${Math.ceil(4 / mapControl.scale)}px solid red `
                        }}

                    >
                        {location.name}
                    </div>

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


            {mapData.Roads.map(vertex => <div key={`roadKey-${vertex.id}`}>   <>
                {vertex.road_vertices.map((v, int) =>
                    <div
                        key={`vertexKey-${v.id}`}
                        className="vertex" id={`${v.id}-v`}
                        style={{
                            left: `${v.coord_x - 3}px`,
                            top: `${v.coord_y - 3}px`,
                            backgroundColor: "white",
                            width: `${6 / mapControl.scale}px`,
                            height: `${6 / mapControl.scale}px`,
                            border: `${2 / mapControl.scale}px solid black`,
                            display: `${showVertices() ? "initial" : "none"}`,


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
