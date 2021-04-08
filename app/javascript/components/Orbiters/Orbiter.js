import React from 'react'

const Orbiter = (props) => {
    const {name, image_url, slug} = props.attributes
    return (
        <div className="card">

            <div className="orbital-logo">
                <img src={image_url} alt={name} width="50" />
            </div>
        </div>
    )
}

export default Orbiter