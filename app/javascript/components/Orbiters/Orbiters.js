import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Orbiter from './Orbiter'
import styled from 'styled-components'

const Home = styled.div`
    text-align: center;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
`
const Header = styled.div`
    padding: 100px 100px 10px 100px;

    h1 {
        font-size: 42px;
    }
`
const Subheader = styled.div`
    font-weight: 300;
    font-size: 26px;
`
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    width: 100%;
    padding: 20px;
`

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
        <Home>
            <Header>
                <h1>EscapeVelocity</h1>
                <Subheader>Honest, unbiased launch vehicle reviews. Share your experience.</Subheader>                
            </Header>
            <Grid>
                {grid}
            </Grid>
        </Home>
    )
}

export default Orbiters