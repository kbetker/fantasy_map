import React, { useState } from "react";
import "./Carousel.css"



function Carousel(){
    const [link0, setLink0] = useState(0)
    const [link1, setLink1] = useState(1)
    const [link2, setLink2] = useState(2)
    const [link3, setLink3] = useState(3)
    const [link4, setLink4] = useState(4)
    const [link5, setLink5] = useState(5)



    function increment(){
        setLink0(old => old + 1 > 5 ? 0 : old + 1)
        setLink1(old => old + 1 > 5 ? 0 : old + 1)
        setLink2(old => old + 1 > 5 ? 0 : old + 1)
        setLink3(old => old + 1 > 5 ? 0 : old + 1)
        setLink4(old => old + 1 > 5 ? 0 : old + 1)
        setLink5(old => old + 1 > 5 ? 0 : old + 1)
    }

    function decrement(){
        setLink0(old => old - 1 < 0 ? 5 : old - 1)
        setLink1(old => old - 1 < 0 ? 5 : old - 1)
        setLink2(old => old - 1 < 0 ? 5 : old - 1)
        setLink3(old => old - 1 < 0 ? 5 : old - 1)
        setLink4(old => old - 1 < 0 ? 5 : old - 1)
        setLink5(old => old - 1 < 0 ? 5 : old - 1)
    }


    return (<>
        <ul className="theLinks">
            <li className={`baseStyle order-${link0}`}>Bobert</li>
            <li className={`baseStyle order-${link1}`}>Zamboni</li>
            <li className={`baseStyle order-${link2}`}>Hambone</li>
            <li className={`baseStyle order-${link3}`}>Yeeter</li>
            <li className={`baseStyle order-${link4}`}>FartyBumkins</li>
            <li className={`baseStyle order-${link5}`}>poo</li>
        </ul>
        <button onClick={()=> increment()}>+</button>
        <button onClick={()=> decrement()}>-</button>
    </>)
}

export default Carousel
