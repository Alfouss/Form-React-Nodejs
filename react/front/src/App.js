import React, { Component } from 'react';
import logo from './component/img/mail.png';
import './App.css';
import axios from 'axios';
class App extends Component {

  constructor(){
    super();
     this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var json = {
      firstname : this.refs.firstname.value,
      lastname : this.refs.lastname.value,
      phone : this.refs.phone.value,
      email : this.refs.email.value,
      msg : this.refs.msg.value,
    };

    axios.post('http://localhost:3001/form', json);

    console.log(JSON.stringify(json));
  }

  render() {
    return (
      <div className="App">
      <div id="block">
        <div id="city">
          <div id="gradient">
          <img id="img" src={logo} alt={"logo"}/>
          <p id="text">Send me a message</p>
          </div>
        </div>
        <div id="form">
          <form method="post" onSubmit={this.handleSubmit}>
          <label htmlFor="msg">Message</label>
          <textarea type="text" pattern="[A-Za-z]{2,}" name="msg" id="msg" ref="msg" ></textarea><br/>
          <label htmlFor="firstname" >Firstname</label>
          <input type="text" pattern="[A-Za-z]{2,}" name="firstname" id="firstname" ref="firstname" />
          <label htmlFor="lastname" >Lastname</label>
          <input type="text" pattern="[A-Za-z]{2,}" name="lastname" id="lastname" ref="lastname" /><br/>
          <label id="phone_label" htmlFor="phone" >Phone</label>
          <input type="text" pattern="[0-9]{2,}" name="phone" id="phone" ref="phone" />
          <label id="email_label" htmlFor="email" >Email</label>
          <input type="text" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" name="email" id="email" ref="email" /><br/>
          <input type="submit" name="submit" id="submit" value="Send"/>
          </form>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
