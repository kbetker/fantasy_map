import React, { useEffect } from "react"
import { useParams } from "react-router"
import { useDispatch } from "react-redux"
import { fetchMapData } from "../../store/map"

function Locations(){


    // const [isLoaded, setIsLoaded] = useState(false)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(fetchMapData(id))
    }, [dispatch, id])




    return  (
        <>
        <div>Why</div>
        </>
    )
}

export default Locations;
