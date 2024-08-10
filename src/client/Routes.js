import { Route } from "react-router-dom"
import Home from "./components/Home"
import React from "react"

export default () => {
    return (
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/hi" component={() => <div>Hi!</div>} />
        </div>
    )
}