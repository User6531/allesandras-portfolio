import {LOADING, ERROR, SET_LANGUAGE, SET_THEME, OPEN_MODAL} from '../reducer/actionTypes';
export interface resRequest {
    id: string;
    projectName: string;
    description: any;
    thumbnail: string;
    drawings: string[];
    img: [
      {thumbnail: string; original: string;}
    ];
    data: []
}

export type Action = 
    | {type: typeof ERROR; payload: {error: boolean; errorMessage: string;};}
    | {type: typeof LOADING; payload: boolean;}
    | {type: typeof SET_LANGUAGE; payload: string;}
    | {type: typeof SET_THEME; payload: string;}
    | {type: typeof OPEN_MODAL;}