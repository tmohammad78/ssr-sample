import 'babel-polyfill';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import Routes from "./Routes"
import React from "react"
import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"

const store = createStore(reducers, {} , applyMiddleware(thunk))

ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);