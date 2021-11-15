import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"

function Map() {

    const mapData = useSelector(state => state.map_data)
    const [imageSize, setImageSize] = useState({ imageX: '3000px', imageY: '3000px' })
    const [isLoaded, setIsLoaded] = useState(false)
    const mapImage = useRef()
    const mapContainer = useRef()
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
        let xPos = Math.round((e.clientX / mapControl.scale) - (mapControl.positionX/mapControl.scale) )
        let yPos = Math.round((e.clientY / mapControl.scale) - ((mapControl.positionY + 50)/mapControl.scale) )

        console.log(`X: ${xPos} - Y: ${yPos}`)
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
                alt='Map'
                src={mapData.image_url}
                className="mapImage"
                ref={mapImage}
                onClick={(e) => handleClick(e)}
            />

        </div>)
}

export default Map
