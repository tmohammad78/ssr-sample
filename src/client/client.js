import 'babel-polyfill';
import { BrowserRouter } from "react-router-dom"
import ReactDOM from 'react-dom'
import { Provider } from "react-redux"
import Routes from "./Routes"
import React from "react"
import { createStore, applyMiddleware } from "redux"
import reducers from "./reducers"
import thunk from "redux-thunk"
import { renderRoutes } from "react-router-config"


const store = createStore(reducers, window.INITIAL_STATE , applyMiddleware(thunk))


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                {renderRoutes(Routes)}
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);