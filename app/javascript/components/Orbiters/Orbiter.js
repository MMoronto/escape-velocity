import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Orbiter = (props) => {
    const {name, image_url, slug} = props.attributes

    return (
        <div className="card">

            <div className="orbital-logo">
                <img src={image_url} alt={name} width="50" />
            </div>

            <div className="orbiter-name">
                {name}
            </div>

            <div className="link-wrapper">
                <Link to={"/" + slug}>View Orbiter</Link>
            </div>

        </div>
    )
}

export default Orbiter