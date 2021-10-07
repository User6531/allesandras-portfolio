import {LOADING, ERROR, SET_LANGUAGE, SET_THEME} from '../reducer/actionTypes';
import {initialState} from '../reducer/initialState';

type State = typeof initialState;
type Action = 
    | {type: typeof ERROR; payload: {error: boolean; errorMessage: string}}
    | {type: typeof LOADING; payload: boolean}
    | {type: typeof SET_LANGUAGE; payload: string}
    | {type: typeof SET_THEME; payload: string}

const reducer = (state = initialState, action: Action): State => {

    switch (action.type) {
        case ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage
            }

        case LOADING:
            return {
                ...state,
                loading: action.payload
            }

        case SET_LANGUAGE:
            return {
                ...state,
                language: action.payload
            }

        case SET_THEME:
            return {
                ...state,
                theme: action.payload,
            }

        default:
            return state
    }
}

export default reducer;