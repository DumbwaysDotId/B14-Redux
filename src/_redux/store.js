//COnnector Reducer to Actions
import { createStore, combineReducers, applyMiddleware } from 'redux';

import {logger, promise} from './middleware'

//Insert Reducers
import incrementR from '../_reducers/incrmentR';
import decrementR from '../_reducers/decrementR';
import users from '../_reducers/usersR';

const reducers = combineReducers({
    incrementR,
    decrementR,
    users
})

const store = 
createStore(reducers, applyMiddleware(promise,logger));

export default store