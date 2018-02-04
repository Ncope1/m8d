// library imports
import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

// component imports
import {
  AlbumDetails,
  AlbumList,
  CreateForm,
  EditForm,
  Navbar,
  ReviewDetails,
  ReviewList
} from './components/'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <main className="container">
          <Switch>
            <Route exact path="/m8d/albums" render={() => (<AlbumList />)} />
            <Route exact path="/m8d/albums/:id" render={(props) => (<AlbumDetails {...props} />)} />
            <Route exact path="/m8d/reviews" component={ReviewList} />
            <Route exact path="/m8d/reviews/:_id" render={(props) => (<ReviewDetails {...props} />)} />
            <Route exact path="/m8d/edit/:_id" render={(props) => (<EditForm {...props} />)} />
            <Route exact path="/m8d/create" component={CreateForm} />
            <Route path="/*" render={() => (<Redirect to="/m8d/albums" />)} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
