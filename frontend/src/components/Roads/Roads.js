import React, { useEffect, useRef } from "react"
import "./Road.css"

function Roads({props}){
    const myCanvas = useRef()

    let colorArray = ["red", "green", "cyan", "orange", "lime", "black"]

    function randomColor(){
        let rand =  Math.floor(Math.random() * (colorArray.length - 1));
        return colorArray[rand]
    }


    function drawRoad(road) {
        let vertexArray = road.road_vertices
        let newObj = {}
        let newObjarr = []
        let ids = []


            // creates a new object
            for (let i = 0; i < vertexArray.length; i++) newObj[vertexArray[i].id] = vertexArray[i];

            function recurseYou(node) {
                ids.push(node.id)
                newObjarr.push({ id: node.id, coord_x: node.coord_x, coord_y: node.coord_y })
                if (node.neighbors) {
                    for (let i = 0; i < node.neighbors.length; i++) {
                        let id = node.neighbors[i].id

                        if (id in newObj && !(ids.includes(id))) {
                            ids.push(id)
                            recurseYou(newObj[id])
                        }
                    }
                }
            }

            recurseYou(vertexArray[0])

            var ctx = myCanvas.current.getContext("2d");
            ctx.clearRect(0, 0, myCanvas.current.width, myCanvas.current.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = randomColor();
            ctx.beginPath();
            ctx.moveTo(newObjarr[0]?.coord_x, newObjarr[0]?.coord_y);

            for (let i = 0; i < newObjarr.length; i++) {
                // if(i === newObjarr.length){
                    ctx.lineTo(newObjarr[i].coord_x, newObjarr[i].coord_y)
                // } else {
                //     let x1 = newObjarr[i].coord_x
                //     let y1 = newObjarr[i].coord_y

                //     let x2 = newObjarr[i + 1]?.coord_x || newObjarr[i].coord_x
                //     let y2 = newObjarr[i + 1]?.coord_y || newObjarr[i].coord_y
                //     var xc = (x1 + x2) / 2;
                //     var yc = (y1 + y2) / 2;
                //     ctx.quadraticCurveTo(x1, y1, xc, yc);
                // }

            }
            ctx.stroke();
    }




    useEffect(()=>{
        drawRoad(props.mapData)
        // console.log(myCanvas.current)
    }, [])

    return(
    <div className="canvasContainer">
      <canvas
      id="myCanvas"
      className="roadCanvas"
      width = {`${props.imageSize.imageX}px`}
      height = {`${props.imageSize.imageY}px`}
      ref={myCanvas}>
      Your browser does not support the HTML5 canvas tag.
       </canvas>
    </div>)
}


export default Roads