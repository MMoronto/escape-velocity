import React from 'react'
// import { BrowserRouter as Router, Link } from 'react-router-dom'

const Orbiter = (props) => {
    // const {name, image_url, slug} = props.attributes

    return (
        <div className="card">

            <div className="orbiter-logo">
                <img src={props.attributes.image_url} alt={props.attributes.name} width="50" />
            </div>

            <div className="orbiter-name">
                {props.attributes.name}
            </div>

            <div className="orbiter-score">
                {props.attributes.avg_score}
            </div>

            <div className="orbiter-link">
                <a href={`/orbiters/${props.attributes.slug}`}>View Orbiter</a>
            </div>

        </div>
    )
}

export default Orbiter