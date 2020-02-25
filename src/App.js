import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

//Import Action
import {actionINC}  from './_actions/incrementA';
import  {actionDEC}  from './_actions/decrementA';
import decrementR from './_reducers/decrementR';

class App extends Component{

  
  render(){
    return(
      <div className="App-header  ">
        <h1>COUNTER</h1>
        
        <h1>{this.props.incrementR.number}</h1>
        <h1>{this.props.decrementR.number}</h1>

        <button onClick={() => this.props.dispatch(actionINC())}>INC</button>
        <br></br>
        <button onClick={() => this.props.dispatch(actionDEC())}>DEC</button>
      </div>
    )
  }
}

const mapStateToProp = (state)=>{
  return{
    incrementR: state.incrementR,
    decrementR: state.decrementR
  }
}

// const mapDispatchToProp = (dispatch) => {
//   return{
//     actionINC: () => dispatch.actionINC({
//       type: 'INCREMENT'
//     })
//   }
// }

export default connect(mapStateToProp)(App);
