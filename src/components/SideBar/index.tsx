import {useState} from 'react';
import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import S from "./styled"

const social = {
  instagram: 'https://www.instagram.com/',
  linkedin: "https://www.linkedin.com/",
  telegram: "https://web.telegram.org/k/",
  behance: "https://www.behance.net/",
  iconColor: '#CBAC97',
  iconStyle: { height: 30, width: 30, opacity: '1'},
}

export const SideBar: React.FC = () => {

  const [style, setStyle] = useState(social);

  const onMouseEnter = (): void => {
    setStyle(prev => ({...prev, iconStyle: { height: 30, width: 30, opacity: '.2'}}))
  }
  const onMouseLeave = (): void => {
    setStyle(prev => ({...prev, iconStyle: { height: 30, width: 30, opacity: '1'}}))
  }
  
  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.NavigationMenu>
          <S.Logo><Link to={`/`}>Logo</Link></S.Logo>
          <S.NavMenuLink><Link to={`/`}>Projects</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/about`}>about</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/services`}>services</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/contacts`}>contacts</Link></S.NavMenuLink>
        </S.NavigationMenu>
        <S.NavigationSocial onMouseEnter={()=>onMouseEnter()} onMouseLeave={()=>onMouseLeave()}>
          <SocialIcon target='_blank' href={social.instagram} url={social.instagram} bgColor={social.iconColor} style={style.iconStyle}/>
          <SocialIcon target='_blank' href={social.linkedin} url={social.linkedin} bgColor={social.iconColor} style={style.iconStyle}/>
          <SocialIcon target='_blank' href={social.telegram} url={social.telegram} bgColor={social.iconColor} style={style.iconStyle}/>
          <SocialIcon target='_blank' href={social.behance} url={social.behance} bgColor={social.iconColor} style={style.iconStyle}/>
        </S.NavigationSocial>
      </S.Wrapper>
    </S.WrapperMain>
  );
}