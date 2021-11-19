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
                />
                : <img
                    src={rightArrow}
                    className="hideShowIcon" alt="expand sidebar"
                    onClick={() => dispatch(sendSidebarExpand(true))}
                />
            }

            <img src={place}
                className={mapControls.sideBarName === 'Location List' ? "iconSelected" : "icon"}
                alt="Location List"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />

            <img src={location}
                className={mapControls.sideBarName === 'Location Information' ? "iconSelected" : "icon"}
                alt="Location Information"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />

            <img src={addLocation}
                className={mapControls.sideBarName === 'Add Location' ? "iconSelected" : "icon"}
                alt="Add Location"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />


            <img src={editLocation}
                className={mapControls.sideBarName === 'Edit Location' ? "iconSelected" : "icon"}
                alt="Edit Location"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />


            <img src={explore}
                className={mapControls.sideBarName === 'Get Direction' ? "iconSelected" : "icon"}
                alt="Get Direction"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />



            <img src={roadInfo}
                className={mapControls.sideBarName === 'Road Info' ? "iconSelected" : "icon"}
                alt="Road Info"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />


            <img src={addRoad}
                className={mapControls.sideBarName === 'Add Road' ? "iconSelected" : "icon"}
                alt="Add Road"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />

            <img src={editRoad}
                className={mapControls.sideBarName === 'Edit Road' ? "iconSelected" : "icon"}
                alt="Edit Road"
                onClick={(e) => [
                    dispatch(sendSidebarName(e.target.alt)),
                    dispatch(sendSidebarExpand(true))
                ]}
            />

        </div>
    )
}

export default SideBarIcons
