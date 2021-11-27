import React, { useRef } from "react"
import "./sideBarIcons.css"
import { useDispatch, useSelector } from "react-redux"
import { sendSidebarName, sendSidebarExpand } from "../../../store/mapControls"

import leftArrow from "./icons/arrow_left.svg"
import rightArrow from "./icons/arrow_right.svg"

import explore from "./icons/explore.svg"
import place from "./icons/place.svg"
import location from "./icons/location.svg"
import addRoad from "./icons/add_road.svg"
import editRoad from "./icons/edit_road.svg"
import editLocation from "./icons/edit_location.svg"
import roadInfo from "./icons/road_info.svg"
import addLocation from "./icons/add_location.svg"



function SideBarIcons() {
    const mapControls = useSelector(state => state.map_controls)
    const dispatch = useDispatch()
    const sidebarIcons = useRef()

    function expandSidebar() {
        if (!mapControls.sideBarExpand) {
            dispatch(sendSidebarExpand(true))
        }
    }



    return (
        <div
            className="sideBarIcons"
            ref={sidebarIcons}
        >
            {mapControls.sideBarExpand ?
                <img
                    src={leftArrow}
                    className="hideShowIcon" alt="shrink sidebar"
                    onClick={() => dispatch(sendSidebarExpand(false))}
                    draggable="false"
                />
                : <img
                    src={rightArrow}
                    className="hideShowIcon" alt="expand sidebar"
                    onClick={() => dispatch(sendSidebarExpand(true))}
                    draggable="false"
                />
            }

            <img src={place}
                className={mapControls.sideBarName === 'Location List' ? "iconSelected" : "icon"}
                alt="Location List"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />

            <img src={location}
                className={mapControls.sideBarName === 'Location Information' ? "iconSelected" : "icon"}
                alt="Location Information"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />

            <img src={editLocation}
                className={mapControls.sideBarName === 'Edit Location' ? "iconSelected" : "icon subIcon"}
                alt="Edit Location"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />

            <img src={addLocation}
                className={mapControls.sideBarName === 'Add Location' ? "iconSelected" : "icon subIcon"}
                alt="Add Location"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />

            <img src={explore}
                className={mapControls.sideBarName === 'Get Direction' ? "iconSelected" : "icon"}
                alt="Get Direction"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />



            <img src={roadInfo}
                className={mapControls.sideBarName === 'Road Info' ? "iconSelected" : "icon"}
                alt="Road Info"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />

            <img src={editRoad}
                className={mapControls.sideBarName === 'Edit Road' ? "iconSelected" : "icon"}
                alt="Edit Road"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />


            <img src={addRoad}
                className={mapControls.sideBarName === 'Add Road' ? "iconSelected" : "icon"}
                alt="Add Road"
                draggable="false"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    expandSidebar()
                ]}
            />


        </div>
    )
}

export default SideBarIcons
