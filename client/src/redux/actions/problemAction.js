import { SAVE_QUESTIONS_TO_STATE, CHECK_ANSWER } from './actions';


export const fetchQuestion = () => {
  // return dispatch => {
  //   fetch()
  //     .then()
  //     .then(problems => dispatch(saveProblemsToState(problems)))
  // }
};

export const saveProblemsToState = (problems) => {
  console.log(problems);
  return { type: SAVE_QUESTIONS_TO_STATE, payload: problems };
};

export const answerCheck = (problems) => {
  console.log(problems);
  return { type: CHECK_ANSWER, payload: problems };
};
