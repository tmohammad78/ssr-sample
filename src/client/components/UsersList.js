import React from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../actions'
import { Component } from 'react/cjs/react.production.min'

class UsersList extends Component{

    componentDidMount() {
        this.props.fetchUsers()
    }

    renderUsers() {
        return this.props.users.map(user => {
            return <li key={user.id}>{user.name}</li>
        })
    }
    render() {
        return (
            <div>
                Here's a big list of users:
                <ul>{this.renderUsers()}</ul>
            </div>
        )
    }
}


function mapStateToProps (state) {
    return { users: state.users }
}

export default connect(mapStateToProps,{ fetchUsers })(UsersList)