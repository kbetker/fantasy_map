import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import { fetchMapData } from "../../store/map"
import Map from "../Map"
import "./Location.css"

// import PinchZoomPan from "react-image-zoom-pan";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Locations() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    // const transformWrapper = useRef()
    // const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(fetchMapData(id))

        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

    }, [dispatch, id])

    // function handleClick(e) {
    //     console.log(e)
    // }


    return (
        <TransformWrapper limitToBounds={false} initialScale={0.27} maxScale={1.5} minScale={0.1} >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools">
                        <button onClick={() => zoomIn()}>+</button>
                        <button onClick={() => zoomOut()}>-</button>
                        <button onClick={() => resetTransform()}>Reset View</button>
                    </div>
                    <TransformComponent contentStyle={{ width: `${windowWidth - 30}px`, height: `80vh` }} wrapperStyle={{ backgroundColor: "black" }}>
                        <Map />
                    </TransformComponent>
                </React.Fragment>
            )}
        </TransformWrapper>

    );



}

export default Locations;

            // <TransformComponent contentStyle={{ width: `${windowWidth - 30}px`, height: `85vh`}} wrapperStyle={{backgroundColor: "black"}}>
            //     <Map/>
            // </TransformComponent>
