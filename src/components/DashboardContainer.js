import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CSSTransitionGroup } from 'react-transition-group'


class DashBoardContainer extends Component {
    render() {

        let review = this.props.reviews.map((review, index) => {
            let detailsPath = `/reviews/${review._id}`
            return (
                <div className="card card-shadow m-3" key={index}>
                    <div className="card-body">
                        <Link to={detailsPath}>{review.title}</Link>
                        <p>{review.album}</p>
                    </div>
                </div>
            )
        })


        return (
            <div className="DashboardContainer">
                <CSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {review}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default DashBoardContainer;
