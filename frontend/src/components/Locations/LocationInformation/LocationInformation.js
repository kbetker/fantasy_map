import React from "react"
import { useSelector } from "react-redux"
import "./LocationInformation.css"

function LocationInformation() {
    const mapControls = useSelector(state => state.map_controls)
    const mapData = useSelector(state => state.map_data)
    return (<>

        <div className="locationInfoContainer">
            <div className="locationInfoTitle">{mapControls.name}</div>

                { mapControls.thumbnail_url ?
                    <img className="locationThumbnail" src={`${mapControls.thumbnail_url}`} />
                    : <img className="locationThumbnail" src="https://www.eduprizeschools.net/wp-content/uploads/2016/06/No_Image_Available.jpg" />
                }


            {(mapData.id !== mapControls.location_id && mapControls.location_id) &&
                <a href={`/locations/${mapControls.location_id}`}>
                    <div className="gotToLocation">
                        <div>Go to Location </div>
                    </div>
                </a>
            }

            <div className="locationDescription">{mapControls.location_description}</div>
        </div>
    </>)
}

export default LocationInformation
