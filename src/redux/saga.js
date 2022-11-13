import { all } from 'redux-saga/effects';
import quizSaga from './quiz/saga';

function* rootSaga() {
  yield all([
    quizSaga(),
  ]);
}

export default rootSaga;
