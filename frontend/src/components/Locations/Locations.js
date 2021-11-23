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
import parentLocation from "./SideBarIcons/icons/parent_location.svg"
import mainLoc from "./SideBarIcons/icons/my_location.svg"
import { sendLocationInformation } from "../../store/mapControls"
import { sendSidebarName } from "../../store/mapControls"
import LocationInformation from "./LocationInformation/LocationInformation"
import LocationNew from "./LocationNew/LocationNew"
import LocationEdit from "./LocationEdit/LocationEdit"

// import PinchZoomPan from "react-image-zoom-pan";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

function Locations() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [isLoaded, setIsLoaded] = useState(false)
    const [locationId, setLocationId] = useState('loc-4')
    const { id } = useParams()
    const dispatch = useDispatch()
    const transWrapper = useRef()
    const mapData = useSelector(state => state.map_data)
    const childLocations = mapData?.child_locations
    const parentLocations = mapData?.parent_locations
    const mapControls = useSelector(state => state.map_controls)

    const [searchName, setSearchName] = useState('')
    const sideBar = useRef()

    useEffect(() => {
        window.addEventListener("resize", (e) => {
            setWindowWidth(window.innerWidth)
        })

        dispatch(fetchMapData(id))
        .then(() => setIsLoaded(true))

    }, [dispatch, id])


    // ======== handles the sidebar collapse/expand  ========== \\
    useEffect(() => {
        mapControls.sideBarExpand ? sideBar.current.classList.remove("sideBarHide") : sideBar.current.classList.add("sideBarHide")
    }, [mapControls.sideBarExpand])



    // ======== gets node for map to zoom to - and animates the pointing arrow ========== \\
    function getEl(id) {
        let node = document.getElementById(`loc-${id}`)
        let arrow = document.getElementById(`arrow-${id}`)
        arrow?.classList.add("animMarker")
        setTimeout(() => {
            arrow?.classList.remove("animMarker")
        }, 2000);
        return node
    }

    // ======== sends scale, prev scale, and  X & Y positions to the store ========== \\
    const sendMapData = (e) => { dispatch(sendMapControls(e.state)) };

    // ======== sends  INITIAL scale, prev scale, and  X & Y positions to the store ========== \\
    const init = (e) => dispatch(sendMapControls(e.state));


    // ======== for locating a location by name  ========== \\
    function searchByName(name) {
        const upperCasedName = name.toLowerCase()
        const searchWord = searchName.toLowerCase()
        return upperCasedName.includes(searchWord)
    }


    // ================ sets scale for vertices and location names when using zoom in/out tools =================\\
    function zoomFunc(direction) {
        if (mapControls.scale >= 1 || mapControls.scale <= 0.25) return;
        let zoom = direction === "in" ? 0.1 : -0.1
        let newObj = JSON.parse(JSON.stringify(mapControls))
        newObj.scale += zoom
        dispatch(sendMapControls(newObj))
    }


    function setVertexScale(scale) {
        let newObj = JSON.parse(JSON.stringify(transWrapper.current.state))
        newObj.scale = scale // todo make a variable from database
        dispatch(sendMapControls(newObj))
    }






    return (
        <TransformWrapper
            limitToBounds={false}
            initialScale={0.315}
            maxScale={1}
            minScale={0.25}
            panning={{ activationKeys: [" "] }}
            onZoomStop={(e) => sendMapData(e)}
            onPanningStop={(e) => sendMapData(e)}
            wheel={{ step: 0.05 }}
            onInit={(e) => init(e)}
            initialPositionX={300}
            ref={transWrapper}
            doubleClick={{ disabled: true }}
        >
            {({ zoomIn, zoomOut, resetTransform, zoomToElement, setTransform, ...rest }) => (
                <React.Fragment>
                    <div className="tools_map_container" > {/* notes  */}


                        <div className="sideBar" ref={sideBar}>
                            <div className="toolbarContainer">
                                <div className="mapNavTools">
                                    <img
                                        className="navButton"
                                        src={zoomInButton}
                                        alt="Zoom In"
                                        onClick={(e) => [
                                            zoomIn(0.25, 500, "easeInOutQuad"),
                                            zoomFunc("in"),
                                        ]} />
                                    <img
                                        className="navButton"
                                        src={zoomOutButton}
                                        alt="Zoom Out"
                                        onClick={(e) => [
                                            zoomOut(0.25, 500, "easeInOutQuad"),
                                            zoomFunc("out"),
                                        ]
                                        } />
                                    <img
                                        className="navButton"
                                        src={resetViewButton}
                                        alt="Reset View"
                                        onClick={(e) => [
                                            resetTransform(500, "easeInOutQuad"),
                                            setVertexScale(0.315),
                                            e.target.blur(),
                                            dispatch(sendSidebarName("Location List"))
                                        ]} />
                                </div>

                                {/* ====================================  Locations List ============================ */}

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

                                         {/* ==================================== Parent Locations ============================ */}
                                        { parentLocations.length > 0 &&  <>

                                            {parentLocations.map(loc =>
                                                    <div
                                                    className={`${locationId === `${loc.id}` ? "loactionSelected mainLoc" : "locationbutton mainLoc"} `}
                                                    key={`$parentLoc-${loc.id}`}
                                                    onClick={(e) => [
                                                        setLocationId(`${loc.id}`),
                                                        dispatch(sendLocationInformation({
                                                            name: loc.name,
                                                            location_id: loc.id,
                                                            location_description: loc.location_description,
                                                            thumbnail_url: loc.thumbnail_url,
                                                        })),
                                                        dispatch(sendSidebarName("Location Information")),
                                                    ]}
                                                >
                                                    <img src={parentLocation} alt="Parent Location"/>
                                                    <div className="mainLocTitle">{loc.name}</div>
                                                </div>
                                                )}
                                        </>}



                                         {/* ==================================== Current Location ============================ */}
                                        <div
                                            className={`${locationId === `${mapData.id}` ? "loactionSelected mainLoc" : "locationbutton mainLoc"} `}
                                            onClick={(e) => [
                                                setVertexScale(0.315),
                                                setLocationId(`${mapData.id}`),
                                                resetTransform(500, "easeInOutQuad"),
                                                e.target.blur(),
                                                dispatch(sendSidebarName("Location Information")),
                                                dispatch(sendLocationInformation({
                                                    name: mapData.name,
                                                    location_id: mapData.id,
                                                    location_description: mapData.location_description,
                                                    thumbnail_url: mapData.thumbnail_url,
                                                })),
                                            ]}
                                        >
                                            <img src={mainLoc} alt="Main Location" />
                                            <div className="mainLocTitle">{mapData.name}</div>
                                        </div>


                                        {/* ==================================== Child Locations ============================ */}
                                        {childLocations?.map(loc => <div key={`location-${loc.id}`}>
                                            {searchByName(loc.name) &&
                                                <div
                                                    className={`${locationId === `${loc.id}` ? "loactionSelected" : "locationbutton"} `}

                                                    onClick={(e) => [
                                                        zoomToElement(getEl(loc.id), 1, 500, "easeInOutQuad"),
                                                        setLocationId(`${loc.id}`),
                                                        setVertexScale(1),
                                                        e.target.blur(),
                                                        dispatch(sendLocationInformation({
                                                            name: loc.name,
                                                            location_id: loc.id,
                                                            location_description: loc.location_description,
                                                            thumbnail_url: loc.thumbnail_url,
                                                        })),
                                                        dispatch(sendSidebarName("Location Information")),
                                                    ]}
                                                >{loc.name}
                                                </div>}
                                        </div>
                                        )}
                                    </>
                                </div>}

                                {mapControls.sideBarName === "Location Information" && <LocationInformation />}
                                {mapControls.sideBarName === "Add Location" && <LocationNew />}
                                {mapControls.sideBarName ===  "Edit Location" && <LocationEdit />}
                                {/*todo <Edit  Road /> */}


                            </div>



                            <SideBarIcons />



                        </div>

                        <TransformComponent
                            contentStyle={{ width: `${windowWidth}px`, height: `93vh` }}
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
