import { useContext} from "react";

import { resRequest } from "../../../global/interface";
import { Context } from "../../../Context";
import Translate from "../../../global/Translate";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import S from "./styled";

interface Props {
  dbProjects: resRequest[];
  id: string;
}

export const ProjectPage: React.FC<Props> = ({dbProjects, id}: Props) => {

  const {state} = useContext(Context);
  const {language} = state;
 
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
                  {/* <ImageGallery items={img} showPlayButton={false}/> */}
                </S.ImageGalleryWrapper>
                <S.Description>{description[state.language]}</S.Description>
              </S.DescriptionWrapper>
              <S.DrawWrapper>
                <S.DrawTitle>{Translate[language].drawTitle}</S.DrawTitle>
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