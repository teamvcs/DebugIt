import { ADD_USER, LOGIN_USER } from './actions';


export const userSignUp = (user) => {
  console.log(user);
  return { type: ADD_USER, payload: user };
};

export const userLogIn = (user) => {
  console.log(user);
  return { type: LOGIN_USER, payload: user };
};
