//COnnector Reducer to Actions
import { createStore, combineReducers, applyMiddleware } from 'redux';

import {logger} from './middleware'

//Insert Reducers
import incrementR from '../_reducers/incrmentR';
import decrementR from '../_reducers/decrementR';

const reducers = combineReducers({
    incrementR,
    decrementR
})

const store = 
createStore(reducers, 
applyMiddleware(logger));

export default store