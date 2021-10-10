import { useContext } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import { Context } from "../../Context/";
import Translate from "../../global/Translate";
import {setLanguage, setTheme} from '../../reducer/action';
import S from "./styled";


export const SideBar: React.FC = () => {

  const {state, dispatch} = useContext(Context);
  const {language, theme} = state;


  const social = {
    instagram: 'https://www.instagram.com/',
    linkedin: "https://www.linkedin.com/",
    telegram: "https://web.telegram.org/k/",
    behance: "https://www.behance.net/",
    iconColor: '#CBAC97',
    iconStyle: { height: 30, width: 30},
  };
  
  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.NavigationMenu>
          <S.Logo><Link to={`/`}>Logo</Link></S.Logo>
          <S.NavMenuLink><Link to={`/`}>{Translate[language].Projects}</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/about`}>{Translate[language].About}</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/services`}>{Translate[language].Services}</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/contacts`}>{Translate[language].Contacts}</Link></S.NavMenuLink>
        </S.NavigationMenu>
        <S.WrapperBottom>
          <S.WrapperButtons>
            <S.ButtonLanguage onClick={()=>dispatch(setLanguage(language === 'en' ? 'ua': 'en'))}>
              <S.LanguageCircle language={language} />
              <S.LanguageTitle language={language} >{language}</S.LanguageTitle>
            </S.ButtonLanguage>
            <S.ButtonTheme onClick={()=>dispatch(setTheme(theme === 'light' ? 'dark': 'light'))}>
              <S.ThemeCircle theme={theme} />
              <S.ThemeTitle theme={theme} >{theme}</S.ThemeTitle>
            </S.ButtonTheme>
          </S.WrapperButtons>
          <S.NavigationSocial >
            <SocialIcon target='_blank' href={social.instagram} url={social.instagram} bgColor={social.iconColor} style={social.iconStyle}/>
            <SocialIcon target='_blank' href={social.linkedin} url={social.linkedin} bgColor={social.iconColor} style={social.iconStyle}/>
            <SocialIcon target='_blank' href={social.telegram} url={social.telegram} bgColor={social.iconColor} style={social.iconStyle}/>
            <SocialIcon target='_blank' href={social.behance} url={social.behance} bgColor={social.iconColor} style={social.iconStyle}/>
          </S.NavigationSocial>
        </S.WrapperBottom>
      </S.Wrapper>
    </S.WrapperMain>
  );
}