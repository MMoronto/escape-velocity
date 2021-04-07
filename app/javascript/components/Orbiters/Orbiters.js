import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
// import Orbiter from './Orbiter'

const Orbiters = () => {
    const [orbiters, setOrbiters] = useState([])

    useEffect(() => {
        axios.get('api/v1/orbiters.json')
        .then( resp => {
            setOrbiters(resp.data.data)
        })
        .catch( resp => console.log(resp) )
    }, [orbiters.length])

    const grid = orbiters.map( item => {
        return (<li key={item.attributes.name} >{item.attributes.name}</li>)
    })
    return(
        <Fragment>
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
        </Fragment>
    )
}

export default Orbiters