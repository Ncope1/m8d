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
                        <div className="row">
                            <div className="col-md-4">
                                <img src={review.imageUrl} className="img-fluid"/>
                            </div>
                            <div className="col-md-8">
                                <Link to={detailsPath}>{review.reviewTitle}</Link>
                                <p>{review.albumTitle}</p>
                            </div>
                        </div>
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
