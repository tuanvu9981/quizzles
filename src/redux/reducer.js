import { combineReducers } from 'redux';
import quiz, { quizInitState } from './quiz/reducers';

export const initialState = {  
  quiz: quizInitState,
};

export default combineReducers({
  quiz
});
