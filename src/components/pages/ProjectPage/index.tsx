import { useContext } from "react";
import ImageGallery from 'react-image-gallery';

import { resRequest } from "../../../global/interface";
import { Context } from "../../../Context";

import "./ImageGalleryStyle.css";
import S from "./styled";

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
            <div key={id}>
              <S.DescriptionWrapper>
                <S.Name>{projectName}</S.Name>
                <S.Description>{description[state.language]}</S.Description>
              </S.DescriptionWrapper>
              <ImageGallery items={img} showPlayButton={false}/>
            </div>
          )
        }
      })}
    </S.Wrapper>
  );
}