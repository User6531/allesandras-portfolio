import {LOADING, ERROR, SET_LANGUAGE, SET_THEME, OPEN_MODAL} from '../reducer/actionTypes';
import {initialState} from '../reducer/initialState';
import { Action } from '../global/interface';

type State = typeof initialState;

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

        case OPEN_MODAL:
            return {
                ...state,
                isModalOpen: true,
            }

        default:
            return state
    }
}

export default reducer;
