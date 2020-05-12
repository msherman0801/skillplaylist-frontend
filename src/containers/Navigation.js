import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { userActions } from '../_actions/user.action'
import Navbar from '../components/navigation/Navbar'

class Navigation extends Component {


    render() {
        const { user } = this.props
        return (
            <div>
                <Navbar user={user} dispatch={this.props.dispatch} />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const { user } = state.authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(Navigation);