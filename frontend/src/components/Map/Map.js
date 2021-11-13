import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import "./Map.css"

function Map() {

    const mapData = useSelector(state => state.map_data)
    const myCanvas = useRef()
    const mapImage = useRef()
    const [imageSize, setImageSize] = useState({})

    function handleClick(e) {
        console.log(e.target.id)
    }




    function drawRoad() {
        let road = mapData.Roads[3]
        let vertexArray = road?.road_vertices
        let newObj = {}
        let newObjarr = []
        let ids = []

        if (road) {

            for(let i = 0; i < vertexArray.length; i++) newObj[vertexArray[i].id] = vertexArray[i];




            function recurseYou(node){
                ids.push(node.id)
                newObjarr.push( {id: node.id, coord_x: node.coord_x, coord_y: node.coord_y} )
                if(node.neighbors){
                    for(let i = 0; i < node.neighbors.length; i++){
                        let id = node.neighbors[i].id

                        if(id in newObj && !(ids.includes(id))){
                            ids.push(id)
                            recurseYou(newObj[id])
                        }
                    }
                }
            }

            recurseYou(vertexArray[0])

            // d = √[(x2 − x1)2 + (y2 − y1)2]


            var ctx = myCanvas.current.getContext("2d");
            ctx.clearRect(0, 0, myCanvas.current.width, myCanvas.current.height);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'red';
            ctx.beginPath();
            ctx.moveTo(newObjarr[0]?.coord_x, newObjarr[0]?.coord_y);



            for(let i = 0; i < newObjarr.length - 1; i++){
                // let x0 = newObjarr[i - 1]?.coord_x ||  newObjarr[i].coord_x
                // let y0 = newObjarr[i - 1]?.coord_y ||  newObjarr[i].coord_y
                let x1 = newObjarr[i].coord_x + 5
                let y1 = newObjarr[i].coord_y + 5

                let x2 = newObjarr[i + 1]?.coord_x + 5 || newObjarr[i].coord_x + 5
                let y2 = newObjarr[i + 1]?.coord_y + 5 || newObjarr[i].coord_y + 5
                // let x2 = newObjarr[i + 1]?.coord_x || newObjarr[i].coord_x
                // let y2 = newObjarr[i + 1]?.coord_y || newObjarr[i].coord_y
                // let x3 = newObjarr[i + 2]?.coord_x || newObjarr[i].coord_x
                // let y3 = newObjarr[i + 2]?.coord_y || newObjarr[i].coord_y
                // let distance = Math.round(Math.sqrt(Math.pow((x2-x1), 2) + Math.pow((y2-y1), 2)))
                // let slope = (y2 - y1) / (x2 - x1)

                // let cp1x = x1 + (x1/2 - x0/2)
                // let cp1y = y1 + (y1/2 - y0/2)
                // let cp2x = x2 + (x3/2 - x2/2)
                // let cp2y = y2 +  (y3/2 - y2/2)

                // ctx.lineTo(x1, y1)

                // ctx.moveTo(x1, y1)
                // ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x2, y2);


                                var xc = (x1 + x2 ) / 2;
                                var yc = (y1 + y2 ) / 2;
                                ctx.quadraticCurveTo(x1, y1, xc, yc);


            }



            ctx.stroke();
        }
    }





    useEffect(() => {
        drawRoad()
    }, [])


    return (

        <div className="mapContainer">

            <canvas id="myCanvas" className="roadCanvas" width="5000px" height="5000px" ref={myCanvas}>
                Your browser does not support the HTML5 canvas tag.</canvas>

            {mapData.child_locations.map(location =>

                <div className="locationContainer">
                    {/* <div className="locationName" style={{ left: `${location.Vertex?.coord_x + 15 + 10}px`, top: `${location.Vertex?.coord_y}px` }}>{location.name}</div> */}
                    <div className="location" style={{ left: `${location.Vertex?.coord_x}px`, top: `${location.Vertex?.coord_y}px` }}></div>
                </div>
            )}


            {mapData.Roads.map(roads => <div key={`roadKey-${roads.id}`}>
                <>
                    {roads.road_vertices.map((v, int) =>
                        <div key={`vertexKey-${v.id}`} className="vertex" id={`${v.id}-v`} onClick={(e) => handleClick(e)} style={{ left: `${v.coord_x}px`, top: `${v.coord_y}px` }}></div>
                    )}
                </>
            </div>)}


            <img alt='Test Image' src={mapData.image_url} className="mapImage" ref={mapImage} />

        </div>)
}

export default Map
