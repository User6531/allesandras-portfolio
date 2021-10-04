import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons';

import S from "./styled"

export const SideBar: React.FC = () => {

  const social = {
    instagram: 'https://www.instagram.com/',
    linkedin: "https://www.linkedin.com/",
    telegram: "https://web.telegram.org/k/",
    behance: "https://www.behance.net/",
    iconColor: '#CBAC97',
    iconStyle: { height: 30, width: 30 },
  }

  return (
    <S.WrapperMain>
      <S.Wrapper>
        <S.NavigationMenu>
          <S.Logo><Link to={`/`}>Logo</Link></S.Logo>
          <S.NavMenuLink><Link to={`/`}>Projects</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/about`}>about</Link></S.NavMenuLink>
          <S.NavMenuLink><Link to={`/contacts`}>contacts</Link></S.NavMenuLink>
        </S.NavigationMenu>
        <S.NavigationSocial>
          <S.NavSocialLink href={social.instagram}><SocialIcon url={social.instagram} bgColor={social.iconColor} style={social.iconStyle}/></S.NavSocialLink>
          <S.NavSocialLink href={social.linkedin}><SocialIcon url={social.linkedin} bgColor={social.iconColor} style={social.iconStyle}/></S.NavSocialLink>
          <S.NavSocialLink href={social.telegram}><SocialIcon url={social.telegram} bgColor={social.iconColor} style={social.iconStyle}/></S.NavSocialLink>
          <S.NavSocialLink href={social.behance}><SocialIcon url={social.behance} bgColor={social.iconColor} style={social.iconStyle}/></S.NavSocialLink>
        </S.NavigationSocial>
      </S.Wrapper>
    </S.WrapperMain>
  );
}