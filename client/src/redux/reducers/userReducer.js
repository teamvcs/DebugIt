import { ADD_USER, LOGIN_USER } from '../actions/actions';


const initalState = {
  isLoggedIn: false,
  questionAnswered: false,
  questionAnsweredCorrectly: false,
  totalAnswered: [],
  user: {},
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state, user: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
