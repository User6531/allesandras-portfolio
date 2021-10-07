import { Link } from "react-router-dom";
import { resRequest } from "../../global/interface";
import S from "./styled"

interface Props {
  project: resRequest;
}

export const ProjectsListItem: React.FC<Props> = ({project}) => {
  const {thumbnail, projectName, id} = project;

  return (
    <S.Wrapper>
      <Link to={`/${id}`}>
        <S.ThumbNail src={thumbnail} alt='' />
          <S.Title>
            {projectName}
          </S.Title>
      </Link>
    </S.Wrapper>
  );
}