import { Link } from "react-router-dom";

import S from "./styled"

export const SideBar: React.FC = () => {

  return (
    <S.Wrapper>
      <S.NavigationMenu>
        <Link to={`/`}>Projects</Link>
        <Link to={`/about`}>about</Link>
        <Link to={`/contacts`}>contacts</Link>
        <Link to={`/ProjectPage`}>ProjectPage</Link>
      </S.NavigationMenu>
      <S.NavigationSocial>
        <a href='https://www.instagram.com/'>I</a>
        <a href='https://www.linkedin.com/'>L</a>
        <a href='https://web.telegram.org/k/'>T</a>
        <a href='https://www.behance.net/'>B</a>
      </S.NavigationSocial>

    </S.Wrapper>
  );
}