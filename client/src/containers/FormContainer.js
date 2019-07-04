import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';
// import { connect } from 'react-redux';
// import { userSignUp } from '../redux/actions/userAction';

const FormContainer = () => {
  // console.log(props)
  return (
    <div className="FormContainer">
      <h4>WELCOME TO DEBUG.IT</h4>
      {/* This button was to show how redux is used with a clickHandler */}
      {/* <button onClick={() => props.signUpAction(props.user)}>CLICK TO CHANGE STATE</button> */}
      <FormComponent />
    </div>
  );

};

// const mapStateToProps = ({ userReducer }) => {
//   return {
//     // userReducer;
//     // the state passed in to be used
//   }
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     // signUpAction: (user) => dispatch(userSignUp(user)),
//     // Dispatch your actions
//   }
// };

// export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
export default FormContainer;
