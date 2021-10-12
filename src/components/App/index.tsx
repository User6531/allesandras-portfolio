import { useReducer, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

import { ModalWindow } from '../ModalWindow';
import { setOpenModal } from '../../reducer/action';
import { themes } from '../../global/themes';
import Service from '../../services/Services';
import { initialState } from '../../reducer/initialState';
import reducer from '../../reducer';
import {Context} from "../../Context/";
import {SideBar} from '../SideBar/';
import {Main} from '../Main/';
import GlobalFonts from '../../global/fonts/GlobalFonts';
import GlobalStyle from '../../global/GlobalStyle';
import S from "./styled";

const App: React.FC = () => {

  const service = new Service();
  const [state, dispatch] = useReducer(reducer, initialState);
  const {theme} = state;

  useEffect(()=>{
    document.body.style.overflowY = 'scroll';
  }, [])

  setTimeout(() => {
    dispatch(setOpenModal())
  }, 30000)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalFonts />
      <GlobalStyle />
      <Context.Provider value={{service, state, dispatch}}>
        <S.Wrapper>
          <SideBar />
          <Main />
        </S.Wrapper>
        <ModalWindow />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
