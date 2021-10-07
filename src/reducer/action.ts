import {LOADING, ERROR, SET_LANGUAGE, SET_THEME} from './actionTypes';

type Action =
| { type: string , payload: boolean}
| { type: string , payload: {error: boolean, errorMessage: string}}
| { type: string , payload: string}

const loading = (): Action => {
    return {
        type : LOADING,
        payload: false,
    }
}

const error = (errorMessage: string): Action => {
    return {
        type: ERROR,
        payload: {
            error: true,
            errorMessage: errorMessage,
        }
    }
}

const setLanguage = (language: string): Action => {
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}

const setTheme = (theme: string): Action => {
    return {
        type: SET_THEME,
        payload: theme
    }
}

export {
    loading,
    error,
    setLanguage,
    setTheme
}