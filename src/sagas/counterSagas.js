import { INCREMENT, DECREMENT } from "../actions/actionTypes";

import { delay } from "redux-saga";
import { put, takeEvery } from "redux-saga/effects";

export function* sayHello(){
    console.log("Hello Word")
}

function* increment(){
    console.log("increment saga")
}
export function* watchIncrement(){
    yield takeEvery(INCREMENT, increment);
}

function* decrement(){
    console.log("decrement saga")
}
export function* watchDecrement(){
    yield takeEvery(DECREMENT, decrement);
}
