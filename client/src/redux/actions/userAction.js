import { ADD_USER, LOGIN_USER } from './actions';


export const userSignUp = (user) => {
  console.log('signin up: ', user);
  return { type: ADD_USER, payload: user };
};

export const userLogIn = (user) => {
  console.log('logging in: ', user);
  return { type: LOGIN_USER, payload: user };
};
