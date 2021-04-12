import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './Header'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`
const Column = styled.div``
const Main = styled.div``

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
                <div className="main">
                    { 
                        loaded &&
                    <Header 
                        attributes={orbiter.data.attributes}
                        reviews={orbiter.included}
                    />
                    }
                    <div className="reviews"></div>
                </div>
            </div>
            <div className="column">
                <div className="review-form">[Review Form Goes Here.]</div>
            </div>
        </div>
    )
    
}

export default Orbiter