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
          const {projectName, description, img, drawings} = item;
          return (
            <div key={id}>
              <S.Name>{projectName}</S.Name>
              <S.DescriptionWrapper>
                <S.ImageGalleryWrapper>
                  <ImageGallery items={img} showPlayButton={false}/>
                </S.ImageGalleryWrapper>
                <S.Description>{description[state.language]}</S.Description>
              </S.DescriptionWrapper>
              <S.DrawWrapper>
                {drawings.map((elem, key)=> {
                    return (
                      <S.DrawImg  src={elem} 
                                  key={key}
                      />
                    )
                })}
              </S.DrawWrapper>
            </div>
          )
        }
      })}
      
    </S.Wrapper>
  );
}