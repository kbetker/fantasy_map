import React from "react"
import "./Saving.css"

function Saving({ props }) {
    return (<>
        <div className={`${props.saving ? "savingContainer savingOffset" : "savingContainer"}`}>

            <div className="savingText">
                {props.saved
                    ? <>Saved!</>
                    : <>Saving
                        <span className="dot1">.</span>
                        <span className="dot2">.</span>
                        <span className="dot3">.</span>
                        <span className="dot4">.</span>
                        <span className="dot5">.</span>
                    </>
                }

            </div>
        </div>
    </>)
}

export default Saving
