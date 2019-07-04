import { SAVE_QUESTIONS_TO_STATE, CHECK_ANSWER } from '../actions/actions';

const initalState = {
  problems: [],
};

const problemReducer = (state = initalState, action) => {
  switch (action.type) {
    case SAVE_QUESTIONS_TO_STATE:
      return { ...state, problems: action.payload };
    case CHECK_ANSWER:
      return { ...state, problems: action.payload };
    default:
      return state;
  }
};

export default problemReducer;
