import { useReducer, useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { ThemeProvider } from 'styled-components';

// component
import { ModalWindow } from '../ModalWindow';
import {SideBar} from '../SideBar/';
import {Main} from '../Main/';

//
import {Context} from "../../Context/";
import GlobalStyle from '../../global/GlobalStyle';
import { themes } from '../../global/themes';
import Service from '../../services/Services';
import reducer from '../../reducer';
import { initialState } from '../../reducer/initialState';
import { setOpenModal } from '../../reducer/action';

// styles
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
  
  setTimeout(() => {
    dispatch(setOpenModal())
  }, 1000000000)

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Context.Provider value={{service, state, dispatch}}>
        <S.Wrapper>
          <S.BurgerMenu>
            <S.BurgerMenuButton isMobileSideBar={isMobileSideBar} onClick={() => toggleMobileSideBar((prev)=>!prev)} className="burger-button"/>
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