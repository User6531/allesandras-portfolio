import {ERROR} from '../reducer/actionTypes';

type State = { 
    loading: boolean;
    error: boolean;
    errorMessage: string;
};

type Action =
| { type: string , payload: {error: boolean, errorMessage: string}}


const reducer = (state: State, action: Action): State => {
    switch (action.type) {

        case ERROR:
            return {
                ...state,
                error: action.payload.error,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state
    }
}

export default reducer;