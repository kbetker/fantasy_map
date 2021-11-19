import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./LocationInformation.css"

function LocationInformation() {
    const mapControls = useSelector(state => state.map_controls)
    const mapData = useSelector(state => state.map_data)
    return (<>

        <div className="locationInfoContainer">
            <div className="locationInfoTitle">{mapControls.name}</div>
            <div><img className="locationThumbnail" src={`${mapControls.thumbnail_url}`} /> </div>

        { mapData.id !== mapControls.location_id &&   <div className="gotToLocation">
                <a href={`/locations/${mapControls.location_id}`}> Go to Location</a>
            </div>}

            <div className="locationDescription">{mapControls.location_description}</div>
        </div>
    </>)
}

export default LocationInformation
