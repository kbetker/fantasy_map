import React from "react"
import { useSelector } from "react-redux"
import "./Map.css"

function Map() {

    const mapData = useSelector(state => state.map_data)

    function handleClick(e) {
        console.log(e.target.id)
    }

    return (

        <div className="mapContainer">


            {mapData.Roads.map(roads => <div key={`roadKey-${roads.id}`}>
                {roads.road_vertices.map((v, int) =>
                    <div key={`vertexKey-${v.id}`} className="location" id={`${int}-v`} onClick={(e) => handleClick(e)} style={{ left: `${v.coord_x}px`, top: `${v.coord_y}px` }}></div>
                )}

            </div>)}


            <img alt='Test Image' src={mapData.image_url} className="mapImage" />

        </div>)
}

export default Map
