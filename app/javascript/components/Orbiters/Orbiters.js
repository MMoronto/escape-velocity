import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Orbiter from './Orbiter'

const Orbiters = () => {
    const [orbiters, setOrbiters] = useState([])

    useEffect(() => {
        axios.get('api/v1/orbiters.json')
        .then(resp => {
            setOrbiters(resp.data)
        })
        .catch( data => {
            debugger
        })
    }, [])

    const grid = orbiters.map((orbiter, index) => {
        return (<li key={index}>{orbiter.data.attributes.name}</li>)
    })
    return(
        <div className="home">
            <div className="header">
                <h1>EscapeVelocity</h1>
                <p className="subheader">Honest, unbiased launch vehicle reviews. Share your experience.</p>                
            </div>
            <div className="grid">
                <ul>
                    {grid}
                </ul>
            </div>
        </div>
    )
}

export default Orbiters