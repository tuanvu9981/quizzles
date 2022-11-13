import { quizActionTypes } from "./actions";

export const quizInitState = {
    quizzes: [],
    currentQuiz: {
        id: undefined,
        oneAnswerChosenIndex: undefined,
        multipleAnswersTrueIndexes: [],
    },
    ableNextNum: 0,
    disableNext: true,
    multipleChosenIndexes: []
}

const quizReducer = (state = quizInitState, action) => {
    switch (action.type) {
        case quizActionTypes.SET_ABLE_PASS_NUM:
            return {
                ...state,
                ableNextNum: action.payload
            }

        case quizActionTypes.SET_MUL_CHOICES:
            return {
                ...state,
                multipleChosenIndexes: [
                    ...state.multipleChosenIndexes,
                    action.payload
                ]
            }

        case quizActionTypes.SET_QUIZZES:
            return {
                ...state,
                quizzes: action.payload
            }

        case quizActionTypes.SET_CUR_QUIZ_BY_INDEX:
            return {
                ...state,
                currentQuiz: { ...state.quizzes[action.payload] }
            }

        case quizActionTypes.SET_CURRENT_QUIZ_ID:
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    id: action.payload
                }
            }

        case quizActionTypes.SET_ONE_TRUE_OPTION:
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    oneAnswerTrueIndex: action.payload
                }
            }

        case quizActionTypes.SET_MULTIPLE_TRUE_OPTIONS:
            return {
                ...state,
                currentQuiz: {
                    ...state.currentQuiz,
                    multipleAnswersTrueIndexes: action.payload
                }
            }

        case quizActionTypes.SET_DISABLE_NEXT:
            return {
                ...state,
                disableNext: action.payload
            }

        default:
            return state;
    }
};

export default quizReducer;