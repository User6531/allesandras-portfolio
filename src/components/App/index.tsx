import { useReducer, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
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
import GlobalStyle from '../../global/GlobalStyle';
import S from "./styled";

const App: React.FC = () => {

  const service = new Service();
  const [isMobileSideBar, toggleMobileSideBar] = useState(false);
  const [state, dispatch] = useReducer(reducer, initialState);
  const {theme} = state;
  const location  = useLocation();

  useEffect(() => {
    if (isMobileSideBar) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'scroll';
    }
    const checkIfClickedOutside = (e: any) => {
        if (isMobileSideBar &&
            !(e.target as HTMLElement).closest('.side-bar') &&
            !(e.target as HTMLElement).closest('.burger-button'))
        {
          toggleMobileSideBar(false)
        }
    }
    document.addEventListener("touchstart", checkIfClickedOutside)
    return () => {
        document.removeEventListener("touchstart", checkIfClickedOutside)
    }
  }, [isMobileSideBar])

  useEffect(() => {
    toggleMobileSideBar(false)
  }, [location])
  
  useEffect(()=>{
    document.body.style.overflowY = 'scroll';
  }, [])

  setTimeout(() => {
    dispatch(setOpenModal())
  }, 1000000000)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Context.Provider value={{service, state, dispatch}}>
        <S.Wrapper>
          <S.BurgerMenu>
            <S.BurgerMenuButton onClick={() => toggleMobileSideBar((prev)=>!prev)} className="burger-button"/>
            <S.BurgerLogo><Link to={`/`}>Logo</Link></S.BurgerLogo>
          </S.BurgerMenu>
          <SideBar isMobileSideBar={isMobileSideBar}/>
          <Main />
        </S.Wrapper>
        <ModalWindow />
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;