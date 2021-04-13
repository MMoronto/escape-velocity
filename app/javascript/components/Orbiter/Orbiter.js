import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import Header from './Header'
import ReviewForm from './ReviewForm'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-left: auto;
    margin-right: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const Column = styled.div`
    background: #fff;
    height: 100vh;
    overflow: scroll;

    &:last-child {
      background: #000;  
    }
`

const Main = styled.div`
    padding-left: 50px;
`

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

    const handleChange = (e) => {
        e.preventDefault()

        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

        console.log('review', review)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const csrfToken = document.querySelector('[name=csrf-token]').content
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken

        const orbiter_id = orbiter.data.id
        axios.post('/api/v1/reviews', {review, orbiter_id})
        .then(resp => {
            debugger
        })
        .catch(resp => {})
    }

    return (
        <Wrapper>
            { 
                loaded &&
                <Fragment>
                    <Column>
                        <Main>
                            <Header 
                                attributes={orbiter.data.attributes}
                                reviews={orbiter.included}
                            />
                            <div className="reviews"></div>
                        </Main>
                    </Column>
                    <Column>
                        <ReviewForm
                            handleChange={handleChange}
                            handleSubmit={handleChange}
                            attributes={orbiter.data.attributes}
                            review={review}
                        />
                    </Column>
                </Fragment>
             }
        </Wrapper>
        )
    
}

export default Orbiter