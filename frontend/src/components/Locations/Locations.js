import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import { fetchMapData } from "../../store/map"
import Map from "../Map"
import MapNav from "../MapNav"
import "./Location.css"
import { sendMapControls } from "../../store/mapControls"
import SideBarIcons from "./SideBarIcons"
import zoomInButton from "./SideBarIcons/icons/zoom_in.svg"
import zoomOutButton from "./SideBarIcons/icons/zoom_out.svg"
import resetViewButton from "./SideBarIcons/icons/zoom_out_map.svg"
import mainLoc from "./SideBarIcons/icons/my_location.svg"

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
    const mainLocation = useSelector(state => state.map_data)
    const mapControls = useSelector(state => state.map_controls)
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


    function zoomToLocation(e) {
        // console.log(e, "?!?!?!?!??!?!?!?!??")

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


    function zoomInFunc() {
        if (mapControls.scale >= 1) return
        let newObj = JSON.parse(JSON.stringify(mapControls))
        console.log(newObj)
        newObj.scale += 0.205
        console.log(newObj)
        dispatch(sendMapControls(newObj))
    }

    function zoomOutFunc() {
        if (mapControls.scale <= 0.25) return

        let newObj = JSON.parse(JSON.stringify(mapControls))
        console.log(newObj)
        newObj.scale -= 0.205
        console.log(newObj)
        dispatch(sendMapControls(newObj))
    }




    useEffect(() => {
        if (mapControls.sideBarExpand) {
            sideBar.current.classList.remove("sideBarHide")
        } else {
            sideBar.current.classList.add("sideBarHide")
        }
    }, [mapControls.sideBarExpand])


    return (
        <TransformWrapper
            limitToBounds={false}
            initialScale={0.315}
            maxScale={5}
            minScale={0.25}
            panning={{ activationKeys: [" "] }}
            onZoomStop={(e) => zoomToLocation(e)}
            onPanningStop={(e) => zoomToLocation(e)}
            wheel={{ step: 0.05 }}
            onInit={(e) => init(e)}
            initialPositionX={300}
            ref={transWrapper}
        >
            {({ zoomIn, zoomOut, resetTransform, zoomToElement, setTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools_map_container" >


                        <div className="sideBar" ref={sideBar}>
                            <div className="toolbarContainer">
                                <div className="mapNavTools">
                                    <img
                                        className="navButton"
                                        src={zoomInButton}
                                        onClick={(e) => [
                                            zoomIn(),
                                            zoomInFunc(),
                                        ]} />
                                    <img
                                        className="navButton"
                                        src={zoomOutButton}
                                        onClick={(e) => [
                                            zoomOut(),
                                            zoomOutFunc(),
                                            // zoomInButton(),
                                        ]
                                        } />
                                    <img
                                        className="navButton"
                                        src={resetViewButton}
                                        onClick={(e) => [
                                            resetTransform(500, "easeInOutQuad"),
                                            setVertexResetScale(),
                                            e.target.blur(),
                                        ]} />
                                </div>

                                {mapControls.sideBarName === "Location List" && <div className="locationsList">
                                    <>
                                        <input
                                            type="text"
                                            value={searchName}
                                            onChange={(e) => setSearchName(e.target.value)}
                                            className="searchInput"
                                            placeholder="Search..."
                                        />


                                        <div className="spacer"></div>


                                        <div
                                            className={`${locationId === `${mainLocation.id}` ? "loactionSelected mainLoc" : "locationbutton mainLoc"} `}
                                            onClick={(e) => [
                                                setVertexResetScale(),
                                                setLocationId(`${mainLocation.id}`),
                                                resetTransform(500, "easeInOutQuad"),
                                                e.target.blur(),
                                            ]}
                                        >
                                        <img src={mainLoc}/>
                                        <div className="mainLocTitle">{mainLocation.name}</div>
                                        </div>


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
                                </div>}

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
