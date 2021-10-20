import { useHistory } from "react-router-dom";

import { IProject } from "../../global/interface";
import S from "./styled"

interface Props {
  project: IProject;
}

export const ProjectsListItem: React.FC<Props> = ({project}) => {
  const {thumbnail, projectName, id} = project;
  const history = useHistory();

  return (
    <S.Wrapper onClick={() => history.push(`/${id}`, project)}>
      <S.ThumbNail src={thumbnail} alt=''/>
      <S.Title>{projectName}</S.Title>
    </S.Wrapper>
  );
}