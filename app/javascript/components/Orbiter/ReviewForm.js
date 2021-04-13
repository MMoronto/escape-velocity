import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="wrapper">
            <form>
                <div>Have an experience with [Orbiter Name]? Share your review!</div>
                <div>
                    <input type="text" name="title" placeholder="Review Title"/>
                </div>
                <div className="field">
                    <input type="text" name="description" placeholder="Review Description"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate this Orbiter</div>
                        [Star Rating Goes Here]
                    </div>
                </div>
                <button type="submit">Submit Your Review</button>
            </form>
        </div>
    )
}