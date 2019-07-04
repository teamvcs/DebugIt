import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignUp, userLogIn } from '../redux/actions/userAction';


class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      username: this.state.username,
      password: this.state.password
    }
    this.props.signUpAction(user)
  }

  render() {
    return (
      <div className="FormComponent">
        <form onSubmit={this.handleSubmit}>
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
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.value}
              onChange={this.handleChange} />
          </label>
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div >
    )
  }

};

const mapStateToProps = ({ userReducer }) => {
  console.log(userReducer)
  return userReducer;
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpAction: (user) => dispatch(userSignUp(user)),
    // Dispatch your actions
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
