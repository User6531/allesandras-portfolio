import {LOADING, ERROR, SET_LANGUAGE, SET_THEME, OPEN_MODAL} from './actionTypes';
import { Action } from '../global/interface';

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
    localStorage.setItem('language', language);
    return {
        type: SET_LANGUAGE,
        payload: language
    }
}

const setTheme = (theme: string): Action => {
    localStorage.setItem('theme', theme);
    return {
        type: SET_THEME,
        payload: theme
    }
}

const setOpenModal = (): Action => {
    return {
        type: OPEN_MODAL
    }
}

export {
    loading,
    error,
    setLanguage,
    setTheme,
    setOpenModal
}