import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserFormContainer from '../components/user/UserForm.container'
import UserPanelContainer from '../components/user/UserPanel.container'
import { userActions } from '../_actions/user.action'

class User extends Component {

    render() {
        const { user } = this.props;
        return (
            <div>
                {!user && <UserFormContainer />}
                {user && <UserPanelContainer />}
                
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { user } = state.authentication;
    return {
        user
    };
}

export default connect(mapStateToProps)(User);