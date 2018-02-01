import React, { Component } from 'react';
import DashboardContainer from './components/DashboardContainer'
import ReviewDetails from './components/ReviewDetails'
import Edit from './components/Edit'
import Create from './components/Create'
import Navbar from './components/Navbar'
import { Route, Redirect, Switch } from 'react-router-dom'
import { getAllReviews } from './services/reviews'

class App extends Component {
  state ={
    reviews: []
  }

  componentDidMount() {
    getAllReviews()
        .then((response) => {
            console.log(response)
            this.setState({
                reviews: response.data
            })
        })
}

  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/" render={() => (<DashboardContainer reviews={this.state.reviews} />)} />
            <Route path="/reviews/:_id" render={(props) => (<ReviewDetails {...props} />)} />
            <Route path="/edit/:_id" render={(props) => (<Edit {...props} />)} />
            <Route path="/create" component={Create} />
            <Route path="/*" render={() => (<Redirect to="/" />)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
