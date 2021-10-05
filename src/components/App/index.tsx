import { useReducer } from 'react';

import Service from '../../services/Services';
import { initialState } from '../../reducer/initialState';
import reducer from '../../reducer';
import {Context} from "../../Context/";
import {SideBar} from '../SideBar/';
import {Main} from '../Main/';
import S from "./styled";

const App: React.FC = () => {

  const service = new Service();
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{service, state, dispatch}}>
        <S.Wrapper>
        <SideBar />
        <Main />
      </S.Wrapper>
    </Context.Provider>
  );
}

export default App;
