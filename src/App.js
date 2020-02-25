import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { createStore } from 'redux';

//Make Action
const actionINC = () => {
  return {
    type: 'INCREMENT',
    payload: null,
  }
}

const actionDEC = () => {
  return {
    type: 'DECREMENT',
    payload: null
  }
}


//Init Reducer
const initialState = {
  number: 0,
}

function counter(state = initialState, action){
  switch (action.type) {
    case 'INCREMENT':
      return {
        number: state.number + 1
      }

      case 'DECREMENT':
        return {
          number: state.number - 1
        }
      
      default:
        return state
  }
}


//Store
let store = createStore(counter)

store.subscribe(() => {
  console.log(store.getState().number)
})


class App extends Component{
  render(){
    return(
      <div className="App-header  ">
        <h1>COUNTER</h1>
        <button onClick={() => store.dispatch(actionINC())}>INC</button>
        <br></br>
        <button onClick={() => store.dispatch(actionDEC())}>DEC</button>
      </div>
    )
  }
}

export default App;
