import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import axios from 'axios';

//Import Action
import {getUsers}  from './_actions/usersA';


class Users extends Component{

 componentWillMount(){
     this.props.getUsers();
 }
  
  render(){
      const {data, loading, error} = this.props.users;
      if (loading) {
        return (
          <div className="App-header  ">
              <h1>Data Users</h1>
               <p>Loading Terus</p>
           </div>
        )
    }

    if (error) {
      return (
        <div className="App-header  ">
            <h1>Data Users</h1>
             <p>Error</p>
         </div>
      )
  }
    return(
      <div className="App-header  ">
        <h1>Data Users</h1>
            {data.map((user, index) => (
            <p key={index}>{user.name}</p>
        ))}
        </div>
    )
  }
}

const mapStateToProp = (state)=>{
  return{
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProp, mapDispatchToProps)(Users);
