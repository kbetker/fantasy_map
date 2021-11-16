import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchMapData } from "../../store/map"
import Map from "../Map"
import MapNav from "../MapNav"
import "./Location.css"
import { sendMapControls } from "../../store/mapControls"
import SideBarIcons from "./SideBarIcons"

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
    const mapControls = useSelector(state=> state.map_controls)
    const [searchName, setSearchName] = useState('')
    const sideBar = useRef()

    useEffect(() => {
        dispatch(fetchMapData(id)).then(() => setIsLoaded(true))

        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

    }, [dispatch, id])

    function getEl(id) {
        console.log(id)
        let node = document.getElementById(`loc-${id}`)
        let arrow = document.getElementById(`arrow-${id}`)
        arrow?.classList.add("animMarker")

        setTimeout(() => {
            arrow?.classList.remove("animMarker")
        }, 2000);

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


    useEffect(()=>{
        if(mapControls.sideBarExpand){
            sideBar.current.classList.remove("sideBarHide")
        } else {
            sideBar.current.classList.add("sideBarHide")
        }


    }, [mapControls.sideBarExpand])


    return (
        <TransformWrapper
            limitToBounds={false}
            initialScale={0.315}
            maxScale={1}
            minScale={0.25}
            panning={{ activationKeys: [" "] }}
            onZoomStop={(e) => zoomTest(e)}
            onPanningStop={(e) => zoomTest(e)}
            wheel={{ step: 0.05 }}
            onInit={(e) => init(e)}
            initialPositionX={300}
            ref={transWrapper}
        >
            {({ zoomIn, zoomOut, resetTransform, zoomToElement, ...rest }) => (
                <React.Fragment>
                    <div className="tools_map_container" >


                        <div className="sideBar" ref={sideBar}>
                            <div className="toolbarContainer">
                                <div className="mapNavTools">
                                    <button onClick={() => zoomIn()}>+</button>
                                    <button onClick={() => zoomOut()}>-</button>
                                    <button onClick={(e) => [
                                        resetTransform(1000, "easeInOutQuad"),
                                        setVertexResetScale(),
                                        e.target.blur(),
                                        ]}>Reset View</button>
                                </div>

                                <div className="locationsList">
                                    <>
                                        <input
                                            type="text"
                                            value={searchName}
                                            onChange={(e) => setSearchName(e.target.value)}
                                        />
                                        {childLocations?.map(loc => <>
                                            {searchByName(loc.name) &&
                                                <div
                                                    className={`${locationId === `${loc.id}` ? "loactionSelected" : "locationbutton"} `}
                                                    onClick={(e) => [
                                                        zoomToElement(getEl(loc.id), 1, 1000, "easeInOutQuad"),
                                                        setLocationId(`${loc.id}`),
                                                        setVertexZoomScale(),
                                                        e.target.blur(),
                                                    ]}
                                                >{loc.name}
                                                </div>}
                                        </>
                                        )}
                                    </>
                                </div>

                                {/*todo <Location Info /> */}
                                {/*todo <Directions /> */}
                                {/*todo <Create Road /> */}
                                {/*todo <Edit  Road /> */}


                            </div>



                           <SideBarIcons />



                        </div>

                        <TransformComponent
                            contentStyle={{ width: `${windowWidth - 30}px`, height: `93vh` }}
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
