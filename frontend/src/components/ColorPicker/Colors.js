import React, { useEffect, useRef, useState } from "react"
import "./Colors.css"
import { useDispatch, useSelector } from "react-redux"
import transparent from "./transparent.png"

function Colors({props}) {
      const pickedColor = props.color

      const knobRed = useRef(0)
      const knobRedPOS = useRef(0)
      const knobGreen = useRef()
      const knobGreenPOS = useRef(0)
      const knobBlue = useRef(0)
      const knobBluePOS = useRef(0)
      const knobAlpha = useRef(0)
      const knobAlphaPOS = useRef(255)


      const leftMarker = useRef()

      const dispatch = useDispatch();
      const [red, setRed] = useState(0)
      const [green, setGreen] = useState(0)
      const [blue, setBlue] = useState(0)
      const [alpha, setAlpha] = useState(255)

      const [currColor, setCurrColor] = useState('')



      function stopDrag() {
            document.onmouseup = null; // stop moving when mouse button is released:
            document.onmousemove = null;
            upDate()

      }

      // props.updateColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`)
     function upDate(){
      //      console.log(`rgba(${red}, ${green}, ${blue}, ${alpha})`)
           console.log(currColor)
      // props.updateColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`)
     }


      useEffect(() => {
            let grabColors = pickedColor.slice(5, pickedColor.indexOf(")")).split(", ")
            let red = grabColors[0]
            let green = grabColors[1]
            let blue = grabColors[2]
            let alpha = grabColors[3]

            setRed(red)
            knobRedPOS.current = red
            knobRed.current.style.left = `${red}px`

            setGreen(green)
            knobGreenPOS.current = green
            knobGreen.current.style.left = `${green}px`

            setBlue(blue)
            knobBluePOS.current = blue
            knobBlue.current.style.left = `${blue}px`

            setAlpha(alpha)
            let alphaConvert = (alpha / 0.00392).toFixed(2)

            if (alphaConvert > 255) {
                  knobAlphaPOS.current = 255
                  knobAlpha.current.style.left = "255px"
            } else {
                  knobAlphaPOS.current = (alpha / 0.00392).toFixed(2)
                  knobAlpha.current.style.left = `${(alpha / 0.00392).toFixed(2)}px`
            }

      }, [pickedColor])

      useEffect(() => {
            let leftMarkerPos = leftMarker.current.getBoundingClientRect().left
            dragKnob(knobRed.current);
            dragKnob(knobGreen.current);
            dragKnob(knobBlue.current);
            dragKnob(knobAlpha.current);


            // let curr_scene = parseInt(currentscene)
            function dragKnob(theKnob) {
                  let xDiff = 0, Xold = 0;
                  function mouseDown(e) {
                        e.preventDefault();
                        Xold = (e.clientX);
                        document.onmouseup = stopDrag;
                        document.onmousemove = knobIsDragging;
                  }

                  function knobIsDragging(e) {
                        e.preventDefault();
                        xDiff = Xold - (e.clientX);
                        Xold = (e.clientX);
                        knobRedPOS.current = (knobRed.current.getBoundingClientRect().left - leftMarkerPos)
                        knobGreenPOS.current = (knobGreen.current.getBoundingClientRect().left - leftMarkerPos)
                        knobBluePOS.current = (knobBlue.current.getBoundingClientRect().left - leftMarkerPos)
                        knobAlphaPOS.current = (knobAlpha.current.getBoundingClientRect().left - leftMarkerPos)

                        if ((e.clientX) <= 0 + leftMarkerPos) {
                              stopDrag()
                              theKnob.style.left = `0px`;
                        }
                        else if ((e.clientX) >= 270 + leftMarkerPos) {
                              stopDrag()
                              theKnob.style.left = `255px`;
                        }
                        else {
                              theKnob.style.left = (theKnob.offsetLeft - xDiff) + "px";
                        }
                        let adjustAlpha = knobAlphaPOS.current * 0.00392
                        setRed(knobRedPOS.current < 0 ? 0 : knobRedPOS.current > 255 ? 255 : knobRedPOS.current)
                        setGreen(knobGreenPOS.current < 0 ? 0 : knobGreenPOS.current > 255 ? 255 : knobGreenPOS.current)
                        setBlue(knobBluePOS.current < 0 ? 0 : knobBluePOS.current > 255 ? 255 : knobBluePOS.current)
                        setAlpha(adjustAlpha < 0 ? 0 : adjustAlpha > 1 ? 1.00 : (adjustAlpha).toFixed(2))

                  }
                  theKnob.onmousedown = mouseDown;
            }
      }, [])

      function handleInput(e) {
            if (e.target.id === "alpha") {
                  if (e.target.value > 1) {
                        return 1
                  } else if (e.target.value < 0) {
                        return 0
                  } else {
                        return e.target.value
                  }
            } else {
                  if (e.target.value > 255) {
                        return 255
                  } else if (e.target.value < 0) {
                        return 0
                  } else {
                        return e.target.value
                  }
            }
      }


      //======================  converts to rgba if not already  ======================
      function convertToRGBA(color) {
            if (!color.startsWith("rgba")) {
                  let first = color.slice(0, 3)
                  let mid = color.slice(color.indexOf("("), color.indexOf(")"))
                  return `${first}a${mid}, 1.00)`
            } else {
                  return color
            }
      }

      // dispatch(dispatchSelectedColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`
      // style={{ height: `${hideColors ? "18px" : "145px"}` }}
      function toDoChangeColor(e){
            console.log((e))
      }
      return (
            <>


                  <div className="sliderSelectedColorContainer"
                  onMouseUp={()=> props.updateColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`, props.attribute)}
                  onMouseLeave={()=> props.updateColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`, props.attribute)}
                  >


                        <div className="slidersAndSelectedColor">
                              <div className="leftMarker" ref={leftMarker}></div>
                              <div className="slidersContainer" style={{ backgroundImage: `url(${transparent})` }}>

                                    <div className="sliderAndInput">
                                          <div className="slider"
                                                style={{ backgroundImage: `linear-gradient(to right, rgba(0, ${green}, ${blue}, ${alpha}), rgba(255, ${green}, ${blue}, ${alpha}))` }} >
                                                <div className="knob Red" ref={knobRed} id="red" draggable="true"></div>
                                          </div>
                                          <input
                                                className="sliderInput"
                                                id="red"
                                                autoComplete="off"
                                                onChange={(e) => [
                                                      setRed(e.target.value),
                                                      props.updateColor(`rgba(${e.target.value}, ${green}, ${blue}, ${alpha})`, props.attribute),
                                                ]}
                                                value={red}
                                                type="number">
                                          </input>
                                    </div>

                                    <div className="sliderAndInput">
                                          <div className="slider"
                                                style={{ backgroundImage: `linear-gradient(to right, rgba(${red}, 0, ${blue}, ${alpha}), rgba(${red}, 255, ${blue}, ${alpha}))` }}>
                                                <div className="knob Green" ref={knobGreen} id="green" draggable="true"></div>
                                          </div>
                                          <input
                                                className="sliderInput"
                                                id="green"
                                                onChange={(e) => [
                                                      setGreen(e.target.value),
                                                      props.updateColor(`rgba(${red}, ${e.target.value}, ${blue}, ${alpha})`, props.attribute),
                                                ]}
                                                value={green}
                                                type="number">

                                          </input>
                                    </div>

                                    <div className="sliderAndInput">
                                          <div className="slider"
                                                style={{ backgroundImage: `linear-gradient(to right, rgba(${red}, ${green}, 0, ${alpha}), rgba(${red}, ${green}, 255, ${alpha}))` }}>
                                                <div className="knob Blue" ref={knobBlue} id="blue" draggable="true"></div>
                                          </div>
                                          <input
                                                className="sliderInput"
                                                id="blue"
                                                onChange={(e) => [
                                                      setBlue(e.target.value),
                                                      props.updateColor(`rgba(${red}, ${green}, ${e.target.value}, ${alpha})`, props.attribute),
                                                ]}
                                                value={blue}
                                                type="number">
                                          </input>
                                    </div>

                                    <div className="sliderAndInput">
                                          <div className="slider"
                                                style={{ backgroundImage: `linear-gradient(to right, rgba(${red}, ${green}, ${blue}, 0), rgba(${red}, ${green}, ${blue}, 1))` }}>
                                                <div className="knob Alpha" ref={knobAlpha} id="alpha" draggable="true" style={{ backgroundImage: `url(${transparent})` }}></div>
                                          </div>
                                          <input className="sliderInput"
                                                id="alpha"
                                                onChange={(e) => [
                                                      setAlpha(e.target.value),
                                                      props.updateColor(`rgba(${red}, ${green}, ${blue}, ${e.target.value})`, props.attribute),
                                                ]}
                                                value={alpha}
                                                type="number">
                                          </input>
                                    </div>

                              </div>

                        </div>

                        <div className="theColorContainer">
                              <div className="theColor" style={{ backgroundColor: `rgba(${red}, ${green}, ${blue}, ${alpha})` }}></div>
                              <div style={{ backgroundImage: `url(${transparent})` }} className="theColorBackImg"></div>

                        </div>


                  </div>
                  <button onClick={()=> props.updateColor(`rgba(${red}, ${green}, ${blue}, ${alpha})`, props.attribute)}>PeSrh Da bUtToN</button>
                  <button onClick={()=> props.updateMapDelay()}>derp</button>

            </>
      )
}

export default Colors
