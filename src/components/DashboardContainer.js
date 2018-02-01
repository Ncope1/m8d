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
                            <div className="col-md-3">
                                <img src={review.imageUrl} height="100%" width="100%" className="img-fluid" alt={review.albumTitle}/>
                            </div>
                            <div className="col-md-9">
                                <Link to={detailsPath}><h2>{review.reviewTitle}</h2></Link>
                                <h4>{review.albumTitle}</h4>
                                <hr />
                                <p>{review.reviewBody}</p>
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
