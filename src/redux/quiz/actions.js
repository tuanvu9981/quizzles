export const quizActionTypes = {
    SET_CURRENT_QUIZ_ID: "SET_CURRENT_QUIZ_ID",
    SET_DISABLE_NEXT: "SET_DISABLE_NEXT",
    SET_ONE_TRUE_OPTION: "SET_ONE_TRUE_OPTION",
    SET_MULTIPLE_TRUE_OPTIONS: "SET_MULTIPLE_TRUE_OPTIONS",
    SET_QUIZZES: "SET_QUIZZES",
    SET_CUR_QUIZ_BY_INDEX: "SET_CUR_QUIZ_BY_INDEX",
    SET_MUL_CHOICES: "SET_MUL_CHOICES",
    SET_ABLE_PASS_NUM: "SET_ABLE_PASS_NUM"
}

export const setAbleToPassById = (data) => {
    return {
        type: quizActionTypes.SET_ABLE_PASS_NUM,
        payload: data
    }
}

export const setChosenIndexes = (data) => {
    return {
        type: quizActionTypes.SET_MUL_CHOICES,
        payload: data
    }
}

export const setAllQuizzes = (data) => {
    return {
        type: quizActionTypes.SET_QUIZZES,
        payload: data
    }
}

export const setCurrentQuizByIndex = (data) => {
    return {
        type: quizActionTypes.SET_CUR_QUIZ_BY_INDEX,
        payload: data
    }
}

export const setCurrentQuizId = (data) => {
    return {
        type: quizActionTypes.SET_CURRENT_QUIZ_ID,
        payload: data
    }
}

export const setDisableNext = (data) => {
    return {
        type: quizActionTypes.SET_DISABLE_NEXT,
        payload: data
    }
}

export const setOneTrueOption = (data) => {
    return {
        type: quizActionTypes.SET_ONE_TRUE_OPTION,
        payload: data
    }
}

export const setMultipleTrueOptions = (data) => {
    return {
        type: quizActionTypes.SET_MULTIPLE_TRUE_OPTIONS,
        payload: data
    }
}