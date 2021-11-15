import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchMapData } from "../../store/map"
import Map from "../Map"
import MapNav from "../MapNav"
import "./Location.css"
import { sendMapControls } from "../../store/mapControls"

// import PinchZoomPan from "react-image-zoom-pan";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Locations() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isLoaded, setIsLoaded] = useState(false)
    const [locationId, setLocationId] = useState('loc-4')
    const { id } = useParams()
    const dispatch = useDispatch()
    const transWrapper = useRef()
    const childLocations = useSelector(state => state.map_data?.child_locations)
    const [searchName, setSearchName] = useState('')

    useEffect(() => {
        dispatch(fetchMapData(id)).then(() => setIsLoaded(true))

        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

    }, [dispatch, id])

    function getEl(id) {
        console.log(id)
        let node = document.getElementById(id)
        node?.classList.add("animMarker")

        setTimeout(() => {
            node?.classList.remove("animMarker")
        }, 1500);

        return node
    }


    function zoomTest(e) {
        //toDo send scale to store
        dispatch(sendMapControls(e.state))
    }


    function init(e) {
        dispatch(sendMapControls(e.state))
    }

    function setVertexZoomScale(e) {
        let newObj = JSON.parse(JSON.stringify(transWrapper.current.state))
        newObj.scale = 1 // todo make a variable
        dispatch(sendMapControls(newObj))
    }

    function setVertexResetScale(e) {
        let newObj = JSON.parse(JSON.stringify(transWrapper.current.state))
        newObj.scale = 0.25 // todo make a variable
        dispatch(sendMapControls(newObj))
    }


    function searchByName(name) {
        const upperCasedName = name.toLowerCase()
        const searchWord = searchName.toLowerCase()
        return upperCasedName.includes(searchWord)
    }


    return (
        <TransformWrapper
            limitToBounds={false}
            initialScale={0.27}
            maxScale={1}
            minScale={0.25}
            panning={{ activationKeys: [" "] }}
            onZoom={(e) => zoomTest(e)}
            onPanningStop={(e) => zoomTest(e)}
            wheel={{ step: 0.05 }}
            onInit={(e) => init(e)}
            ref={transWrapper}
        >
            {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }) => (
                <React.Fragment>
                    <div className="wut">
                        <div className="tools" style={{ display: "initial" }}>
                            <button onClick={() => zoomIn()}>+</button>
                            <button onClick={() => zoomOut()}>-</button>
                            <button onClick={() => [resetTransform(1000, "easeInOutQuad"), setVertexResetScale()]}>Reset View</button>

                            <div className="locationsList">
                                <>
                                    <input
                                        type="text"
                                        value={searchName}
                                        onChange={(e) => setSearchName(e.target.value)}
                                    />
                                    {childLocations?.map(loc =><>
                                         {searchByName(loc.name) &&
                                         <div
                                         className={`${locationId === `loc-${loc.id}` ? "loactionSelected" : "locationbutton"} `}
                                         onClick={()=> setLocationId(`loc-${loc.id}`)}
                                         >{loc.name}
                                         </div>}
                                         </>
                                    )}
                                </>
                            </div>

                            <button onClick={(e) => [zoomToElement(getEl(locationId), 1, 1000, "easeInOutQuad"), e.target.blur(), setVertexZoomScale()]}>View Location on Map</button>

                        </div>

                        <TransformComponent
                            contentStyle={{ width: `${windowWidth - 30}px`, height: `88vh` }}
                            wrapperClass="transformComp"
                            wrapperStyle={{
                                backgroundImage: "url(https://www.otherworldlyincantations.com/wp-content/uploads/Otherworldly-Incantations-Landform-Worldbuilding.jpg)",
                                backgroundSize: "cover"
                            }}
                        >
                            {isLoaded && <Map />}
                        </TransformComponent>

                        <MapNav />

                    </div>
                </React.Fragment>
            )}
        </TransformWrapper>

    );



}

export default Locations;
