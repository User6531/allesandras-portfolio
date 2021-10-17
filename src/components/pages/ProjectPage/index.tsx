import { useContext, useEffect, useState } from "react";

import { resRequest } from "../../../global/interface";
import { Context } from "../../../Context";
import Translate from "../../../global/Translate";
import S from "./styled";

interface IProps {
  dbProjects: resRequest[];
  id: string;
}

export const ProjectPage: React.FC = ({dbProjects, id}: IProps) => {
  
  const [currentProject, setCurrentProject] = useState<Partial<resRequest>>({});
  const {state} = useContext(Context);
  const {language} = state;

  useEffect(()=> {
    dbProjects.forEach(project => project.id === id ? setCurrentProject(project) : null);
  }, [])

    // const {projectName, description, img, drawings} = currentProject;
    // return (
    //   <S.Wrapper key={id}>
    //     <S.Name>{projectName}</S.Name>
    //     <S.DescriptionWrapper>
    //       <S.ImageGalleryWrapper></S.ImageGalleryWrapper>
    //       <S.Description>{description[state.language]}</S.Description>
    //     </S.DescriptionWrapper>
    //     <S.DrawWrapper>
    //       <S.DrawTitle>{Translate[language].drawTitle}</S.DrawTitle>
    //       {drawings.map((elem, key)=> {
    //           return (
    //             <S.DrawImg  src={elem} 
    //                         key={key}
    //             />
    //           )
    //       })}
    //     </S.DrawWrapper>
    //   </S.Wrapper>
    // )

}