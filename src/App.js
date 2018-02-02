import React, { Component } from 'react'
import Dashboard from './components/Dashboard'
import Browse from './components/Browse'
import ReviewDetails from './components/ReviewDetails'
import Edit from './components/Edit'
import Create from './components/Create'
import Navbar from './components/Navbar'
import AlbumDetails from './components/AlbumDetails'
import { Route, Redirect, Switch } from 'react-router-dom'
import { getAllReviews } from './services/reviews'

class App extends Component {
  state = {
    reviews: []
  }

  componentWillMount() {
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
            <Route exact path="/m8d/browse" render={() => (<Browse />)} />
            <Route exact path="/m8d/browse/details/:id" render={(props) => (<AlbumDetails {...props}/>)} />
            <Route exact path="/m8d/reviews" render={() => (<Dashboard reviews={this.state.reviews} />)} />
            <Route exact path="/m8d/reviews/:_id" render={(props) => (<ReviewDetails {...props} />)} />
            <Route exact path="/m8d/edit/:_id" render={(props) => (<Edit {...props} />)} />
            <Route exact path="/m8d/create" component={Create} />
            <Route path="/*" render={() => (<Redirect to="/m8d/browse" />)} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
