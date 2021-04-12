import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Orbiter = (props) => {
    const [orbiter, setOrbiter] = useState({})
    const [review, setReview] = useState({})

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/orbiters/${slug}`

        axios.get(url)
        .then( resp => console.log(resp) )
        .catch( resp => console.log(resp) )
    }, [])

    return <div>This is the Orbiters#show page for our app.</div>
    
}

export default Orbiter