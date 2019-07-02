const initalState = {
  isLoggedIn: false,
  questionAnswered: false,
  questionAnsweredCorrectly: false,
  totalAnswered: [],

};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
