import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
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
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchMapData(id)).then(() => setIsLoaded(true))

        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

    }, [dispatch, id])

    function getEl(id) {
        let node = document.getElementById(id)
        node?.classList.add("animMarker")

        setTimeout(() => {
            node?.classList.remove("animMarker")
        }, 1500);

        return node
    }
    function zoomTest(e){
        //toDo send scale to store
        dispatch(sendMapControls(e.state))
    }

    return (
        <TransformWrapper
            limitToBounds={false}
            initialScale={0.27}
            maxScale={4 }
            minScale={0.25}
            panning={{ activationKeys: [" "] }}
            onZoomStop={(e) => zoomTest(e)}
            onPanningStop={(e) => zoomTest(e)}
            wheel={{step: 0.05}}
        >
            {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }) => (
                <React.Fragment>
                    <div className="wut">
                        <div className="tools" style={{display: "none"}}>
                            <button onClick={() => zoomIn()}>+</button>
                            <button onClick={() => zoomOut()}>-</button>
                            <button onClick={() => resetTransform()}>Reset View</button>
                            <button onClick={(e) => [zoomToElement(getEl('loc-4'), 1, 1000, "easeInOutQuad"), e.target.blur()]}>Luskan</button>
                            <button onClick={(e) => [zoomToElement(getEl('loc-8'), 1, 1000, "easeInOutQuad"), e.target.blur()]}>Waterdeep</button>
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
