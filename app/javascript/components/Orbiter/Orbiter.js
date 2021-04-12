import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Header from './Header'

const Orbiter = (props) => {
    const [orbiter, setOrbiter] = useState({})
    const [review, setReview] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        const slug = props.match.params.slug
        const url = `/api/v1/orbiters/${slug}`

        axios.get(url)
        .then( resp => {
            setOrbiter(resp.data)
            setLoaded(true)
        })
        .catch( resp => console.log(resp) )
    }, [])

    return (
        <div className="wrapper">
            <div className="column">
                { 
                    loaded &&
                <Header 
                    attributes={orbiter.data.attributes}
                />
                }
                <div className="reviews"></div>
            </div>
            <div className="column">
                <div className="review-form">[Review Form Goes Here.]</div>
            </div>
        </div>
    )
    
}

export default Orbiter