import S from "./styled"

interface ArrayProps {
  id: string;
  projectName: string;
  description: string;
  thumbnail: string;
  img: string[];
}
interface Props {
  dbProjects: ArrayProps[];
  id: string;
}

export const ProjectPage: React.FC<Props> = ({dbProjects, id}) => {


  return (
    <S.Wrapper>
      {dbProjects.map(item=>{
        if(item.id === id) {
          const {projectName, description, img} = item;
          return (
            <>
              <S.DescriptionWrapper>
                <S.Name>{projectName}</S.Name>
                <S.Description>{description}</S.Description>
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