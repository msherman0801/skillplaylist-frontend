import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { PrivateRoute } from './_helpers/private-route'
import { history } from './_helpers';
import { alertActions } from './_actions/alert.action';
import { connect } from 'react-redux'
import React from 'react';
import Navigation from './containers/Navigation'
import Home from './containers/Home'
import User from './containers/User'
import MyPlaylists from './containers/UserPlaylists'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
        // clear alert on location change
        dispatch(alertActions.clear());
      });
  }

  render() {
    return (
      <div className="">
        <Router history={history}>
          <Navigation />
          <Switch>

            {/* Home and Default Paths */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />

            {/* User Paths */}
            <Route exact path="/user" component={User} />
            <PrivateRoute exact path="/user/panel" component={User} />
            <PrivateRoute exact path="/user/playlists" component={MyPlaylists} />
            <Route exact path="/user/login" component={User} />
            <Route exact path="/user/register" component={User} />

            {/* <Route path={`/accounts/:accountId`} component={Profile} /> */}

          </Switch>
        
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
      alert
  };
}

export default connect(mapStateToProps)(App);
