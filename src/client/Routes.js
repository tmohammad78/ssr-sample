import { Route } from "react-router-dom"
import Home from "./components/Home"
import React from "react"
import UsersList from "./components/UsersList"

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hi" component={() => <div>Hi!</div>} />
            <Route path="/users" component={UsersList} />
        </div>
    )
}