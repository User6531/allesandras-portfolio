import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { NotFound } from "../../pages/NotFound"; 
import { CustomGallery } from '../../CustomGallery';
import { Context } from "../../../Context";
import { IProject } from "../../../global/interface";
import Translate from "../../../global/Translate";
import S from "./styled";

export const ProjectPage: React.FC = () => {
  
  const {state} = useContext(Context);
  const {language} = state;
  const location  = useLocation<IProject>();

  if (!location.state) {return <NotFound />}

  const {projectName, description, img, drawings} = location.state;
  return (
    <S.Wrapper>
        <S.Name>{projectName}</S.Name>
        <S.DescriptionWrapper>
          <CustomGallery img={img}/>
          <S.Description>{description[state.language]}</S.Description>
        </S.DescriptionWrapper>
        <S.DrawWrapper>
          <S.DrawTitle>{Translate[language].drawTitle}</S.DrawTitle>
          <S.DrawImg src={drawings} />
        </S.DrawWrapper>
    </S.Wrapper>
  )
}