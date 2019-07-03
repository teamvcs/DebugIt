// import { ADD_USER } from '../actions/actions';

const initalState = {
  isLoggedIn: false,
  questionAnswered: false,
  questionAnsweredCorrectly: false,
  totalAnswered: [],
  // user: { name: 'Joel' },
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    // case ADD_USER:
    //   console.log(state, action);
    //   return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default userReducer;
