import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import styled from 'styled-components'


const Card = styled.div`
    border: 1px solid #efefef;
    background: #fff;
    text-align: center;
`
const OrbiterLogo = styled.div`
    width: 100px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    padding-top: 10px;

    img {
        height: 50px;
        width: 100px;
        border-radius: 20%;
        border: 1px solid #efefef;
    }
`
const OrbiterName = styled.div`
    padding: 20px 0 10px 0;
`
const LinkWrapper = styled.div`
    margin: 30px 0 20px 0;
    height: 50px;

    a {
        color: #fff;
        background: #000;
        border-radius: 4px;
        padding: 10px 50px;
        border: 1px solid #000;
        width: 100%;
        text-decoration: none;
    }
`

const Orbiter = (props) => {
    return (
        <Card>

            <OrbiterLogo>
                <img src={props.attributes.image_url} alt={props.attributes.name}/>
            </OrbiterLogo>

            <OrbiterName>
                {props.attributes.name}
            </OrbiterName>

            <div className="orbiter-score">
                {props.attributes.avg_score}
            </div>

            <LinkWrapper>
                <Link to={`/orbiters/${props.attributes.slug}`}>View Orbiter</Link>
            </LinkWrapper>

        </Card>
    )
}

export default Orbiter