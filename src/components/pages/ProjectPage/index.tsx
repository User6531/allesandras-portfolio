import { useContext } from "react";

import { resRequest } from "../../../global/interface";
import { Context } from "../../../Context";
import S from "./styled"

interface Props {
  dbProjects: resRequest[];
  id: string;
}

export const ProjectPage: React.FC<Props> = ({dbProjects, id}) => {

  const {state} = useContext(Context);

  return (
    <S.Wrapper>
      {dbProjects.map(item=>{
        if(item.id === id) {
          const {projectName, description, img} = item;
          return (
            <>
              <S.DescriptionWrapper>
                <S.Name>{projectName}</S.Name>
                <S.Description>{description[state.language]}</S.Description>
              </S.DescriptionWrapper>
              <S.ImgWrapper>
                {img.map(item=>{
                  return <S.Img src={item} />
                })}
              </S.ImgWrapper>
            </>
          )
        }
      })}
    </S.Wrapper>
  );
}