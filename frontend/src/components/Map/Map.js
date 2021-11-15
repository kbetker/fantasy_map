import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"

function Map() {

    const mapData = useSelector(state => state.map_data)
    const [imageSize, setImageSize] = useState({ imageX: '3000px', imageY: '3000px' })
    const [isLoaded, setIsLoaded] = useState(false)
    const [coordinateX, setCoordinateX] = useState()
    const [coordinateY, setCoordinateY] = useState()
    const mapImage = useRef()
    const mapContainer = useRef()
    const FindPosition = useRef()
    const GetCoordinates = useRef()
    const mapControl = useSelector(state => state.map_controls)


    function vertexClick(e) {
        // console.log(e.target.id)
    }


    useEffect(() => {
        mapImage.current.addEventListener("load", (e) => {
            let mapX = mapImage.current?.clientWidth
            let mapY = mapImage.current?.clientHeight
            setImageSize({ imageX: mapX, imageY: mapY })
            setIsLoaded(true)
        })

        window.addEventListener("keydown", (e) => {
            if(e.code === "Space"){
                mapContainer.current.classList.add("handCursor")
                mapContainer.current.focus()
            }
        })

        window.addEventListener("keyup", (e) => {
            if(e.code === "Space"){
                mapContainer.current.classList.remove("handCursor")
            }
        })

    }, [])

    function handleClick(e){
        // to do: handle click depending on current mode
        // let pos_x = event.offsetX ? (event.offsetX) : event.pageX - document.getElementById("pointer_div").offsetLeft;
        // let pos_y = event.offsetY ? (event.offsetY) : event.pageY - document.getElementById("pointer_div").offsetTop;
        // document.pointform.form_x.value = pos_x;
        // document.pointform.form_y.value = pos_y;
        console.log(e.clientX)

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
                <div className="locationContainer" key={`key-${location.id}`}>
                    <div
                        className="location"
                        id={`loc-${location.id}`}
                        style={{ left: `${location.Vertex?.coord_x}px`, top: `${location.Vertex?.coord_y}px` }}>
                    </div>
                </div>
            )}


            {mapData.Roads.map(vertex => <div key={`roadKey-${vertex.id}`}>   <>
                {vertex.road_vertices.map((v, int) =>
                    <div
                        key={`vertexKey-${v.id}`}
                        className="vertex" id={`${v.id}-v`}
                        onClick={(e) => vertexClick(e)}
                        style={{ left: `${v.coord_x - 3}px`, top: `${v.coord_y - 3}px` }}>
                    </div>
                )}
            </></div>)}


            <img
                alt='Test Image'
                src={mapData.image_url}
                className="mapImage"
                ref={mapImage}
                onClick={(e) => handleClick(e)}
            />

        </div>)
}

export default Map
