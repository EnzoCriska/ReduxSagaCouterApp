import React, { Component } from 'react'

import { createStore , applyMiddleware} from "redux";
import { Provider } from "react-redux";

import allReducers from '../src/reducers'
import CounterContainer from '../src/containers/counterContainer'

import createSagaMiddleware from "redux-saga";
import rootSaga from './sagas/rootSagas'
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
export default class App extends Component{
    render(){
        return(
            <Provider store = {store}>
                <CounterContainer/>
            </Provider> 
        )
    }
}
sagaMiddleware.run(rootSaga);