import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignUp, userLogIn } from '../redux/actions/userAction';
import { Link } from 'react-router-dom';


class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogIn(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userLogIn(user)
  }

  handleSignUp(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.userSignUp(user)
  }

  render() {
    return (
      <div className="FormComponent">
        <form className="form-style-5">
          <legend> Sign up / Sign in </legend>
          <label>
            Username:
          <input
              type="text"
              placeholder="Enter Username"
              name="username"
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <label>
            Password:
          <input
              type="text"
              placeholder="Password"
              name="password"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <input
            type="submit"
            value="SignUp"
            onClick={this.handleSignUp}
          />
          <input
            type="submit"
            value="SignIn"
            onClick={this.handleLogIn}
          />
          <a href='http://localhost:3000/google-init'>
            <img
              className="googleButton"
              src="https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/4314/download.png"
              type="submit"
              value="SignIn"
            />
          </a>
        </form>
      </div>
    )
  }

};

const mapStateToProps = ({ userReducer }) => {
  console.log(userReducer)
  return userReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    userSignUp: (user) => dispatch(userSignUp(user)),
    userLogIn: (user) => dispatch(userLogIn(user)),
    // Dispatch your actions
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
