import {combineReducers} from 'redux'
import counterReducer from './counterReducer'

const allReducers = combineReducers({
    counterReducer,
    //can add more reducer
})

export default allReducers;