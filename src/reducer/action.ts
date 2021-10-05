import {LOADING, ERROR} from './actionTypes';

type Action =
| { type: string , payload: boolean}
| { type: string , payload: {error: boolean, errorMessage: string}}

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

export {
    loading,
    error
}