import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Orbiter = () => {
    const [orbiter, setOrbiter] = useState({})
    const [review, setReview] = useState({})

    useEffect(() =>{
        const slug = this.props.match.params.slug
        // const url = (`api/v1/${slug}`)
        const url = 'api/v1/orbiters/' + slug

        axios.get(url)
        .then( (resp) => {
            debugger
        })
        .catch( data => {
            debugger
        })
    }, [])

    return(
        <div>This is the Orbiters#show page for our app.</div>
    )
}

export default Orbiter