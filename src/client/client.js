import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom'
import Routes from "./Routes"
import React from "react"

ReactDOM.hydrate(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>,
    document.getElementById('root')
);