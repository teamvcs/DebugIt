import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignup, userLogin } from '../redux/actions/userAction'

const mapStateToProps = store => ({
  isLoggedIn: store.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
  userSignup: event => dispatch(userSignup(event)),
  userLogin: event => dispatch(userLogin(event)),
});

class LandingPageContainer extends Component {
  // needs to have a form that runs login or sign up or google oauth

  render() {
    return (
      <div>
        <form className="form-style-5">
          <legend> Sign up / Sign in </legend>
          <div>
            <label htmlFor="userName">UserName</label>
            <input name="userName" component="input" type="text" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input name="password" component="input" type="text" />
          </div>
          <button type="submit">SignUp</button>
          <button type="submit">SignIn</button>
        </form>
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPageContainer);