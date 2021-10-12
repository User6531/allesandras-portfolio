import { useContext } from "react";

import Translate from "../../../global/Translate";
import { Context } from "../../../Context/";
import S from "./styled"

export const AboutPage: React.FC = () => {

  const {state} = useContext(Context);
  const {language} = state;

  return (
    <S.Wrapper>
      <S.Title>{Translate[language].About}</S.Title>
      <p>{Translate[language].AboutDescription}</p>
    </S.Wrapper>
  );
}