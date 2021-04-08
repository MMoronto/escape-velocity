import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Orbiter from './Orbiter'

const Orbiters = () => {
    const [orbiters, setOrbiters] = useState([])

    useEffect( () => {
        axios.get('api/v1/orbiters.json')
        .then( resp => {
            setOrbiters(resp.data.data) 
        })
        .catch( resp => console.log(resp) )
    }, [orbiters.length])

    const grid = orbiters.map( item => {
        // const { name, image_url, slug, average_score } = orbiter.attributes

        return (
            <Orbiter 
                key={item.attributes.name}
                attributes={item.attributes}
                // image_url={image_url}
                // slug={slug}
                // average_score={average_score}
            />
        )
    })

    return(
        <div className="home">
            <div className="header">
                <h1>EscapeVelocity</h1>
                <p className="subheader">Honest, unbiased launch vehicle reviews. Share your experience.</p>                
            </div>
            <div className="grid">
                {grid}
            </div>
        </div>
    )
}

export default Orbiters