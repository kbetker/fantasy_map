import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "./Map.css"
import Roads from "../Roads/Roads"

function Map() {

    const mapData = useSelector(state => state.map_data)
    const mapImage = useRef()
    const [imageSize, setImageSize] = useState({ imageX: '3000px', imageY: '3000px' })
    const [isLoaded, setIsLoaded] = useState(false)


    function handleClick(e) {
        console.log(e.target.id)
    }


    useEffect(() => {
        mapImage.current.addEventListener("load", (e) => {
            console.log(e.target)
            let mapX = mapImage.current?.clientWidth
            let mapY = mapImage.current?.clientHeight
            setImageSize({ imageX: mapX, imageY: mapY })

            setIsLoaded(true)
        })
    }, [])


    return (

        <div className="mapContainer">


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
                        style={{ left: `${location.Vertex?.coord_x}px`, top: `${location.Vertex?.coord_y}px` }}>
                    </div>
                </div>
            )}


            {mapData.Roads.map(roads => <div key={`roadKey-${roads.id}`}>   <>
                {roads.road_vertices.map((v, int) =>
                    <div
                        key={`vertexKey-${v.id}`}
                        className="vertex" id={`${v.id}-v`}
                        onClick={(e) => handleClick(e)}
                        style={{ left: `${v.coord_x - 3}px`, top: `${v.coord_y - 3}px` }}>
                    </div>
                )}
            </></div>)}


            <img
                alt='Test Image'
                src={mapData.image_url}
                className="mapImage"
                ref={mapImage}
            />

        </div>)
}

export default Map
