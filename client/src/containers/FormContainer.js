import React, { Component } from 'react';
import FormComponent from '../components/FormComponent';
// import { connect } from 'react-redux';
// import { userSignUp } from '../redux/actions/userAction';
import styled from 'styled-components';
import logo from '../images/debugit.png';

const Header = styled.div`
  padding: 20px;
  text-align: center;
  font-size: 50px;
`

const Name = styled.span`
  margin: 20px;
  vertical-align: middle;
  display: inline-block;
`

const FormContainer = () => {
  // console.log(props)
  return (
    <div className="FormContainer">
      <Header>
          <span><img src={logo} height="100px" width="100px"/></span>
          <Name>DEBUG.IT</Name>
      </Header>
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
