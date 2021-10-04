import { Link } from "react-router-dom";
import S from "./styled"

interface ObjectProps {
  projectName: string;
  description: string;
  thumbnail: string;
  img: string[];
  id: string;
}
interface Props {
  project: ObjectProps;
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