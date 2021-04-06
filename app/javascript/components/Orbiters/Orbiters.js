import React from 'react'

const Orbiters = () => {
    const [orbiters, setOrbiters] = useState([])

    return(
        <div className="home">
            <div className="header">
                <h1>EscapeVelocity</h1>
                <p className="subheader">Honest, unbiased launch vehicle reviews. Share your experience.</p>                
            </div>
            <div className="grid">
                ORBITERS GRID GOES HERE
            </div>
        </div>
    )
}

export default Orbiters