import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import { fetchMapData } from "../../store/map"
import Map from "../Map"
import MapNav from "../MapNav"
import "./Location.css"

// import PinchZoomPan from "react-image-zoom-pan";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Locations() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMapData(id)).then(() => setIsLoaded(true))

        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

    }, [dispatch, id])

    return (
        <TransformWrapper limitToBounds={false} initialScale={0.27} maxScale={1.5} minScale={0.25} >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div  className="wut">
                    <div className="tools">
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>Reset View</button>
                    </div>

                    <TransformComponent
                        contentStyle={{ width: `${windowWidth - 30}px`, height: `88vh` }}
                        wrapperClass="transformComp"
                        wrapperStyle={{
                            backgroundImage: "url(https://www.otherworldlyincantations.com/wp-content/uploads/Otherworldly-Incantations-Landform-Worldbuilding.jpg)",
                            backgroundSize: "cover"
                        }}
                     >
                        { isLoaded && <Map /> }
                    </TransformComponent>

                    <MapNav />

                    </div>
                </React.Fragment>
            )}
        </TransformWrapper>

    );



}

export default Locations;
