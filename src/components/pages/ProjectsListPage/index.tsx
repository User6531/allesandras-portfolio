import {Error} from '../../Error';
import { Loader } from '../../Loader';
import { ProjectsListItem } from '../../ProjectsListItem';
import S from "./styled"

interface ArrayProps {
  id: string;
  projectName: string;
  description: string;
  thumbnail: string;
  img: string[];
}
interface Props {
  error: boolean,
  dbProjects: ArrayProps[];
}

export const ProjectsListPage: React.FC<Props> = ({error, dbProjects}) => {

  if (error) {
    return <Error />
  } else if (!dbProjects.length) {
    return <Loader />
  } else {
    return (
      <S.Wrapper>
        {dbProjects.map(project=> {
          const {id} = project;
          return (
            <ProjectsListItem project={project} key={id}/>
          )
        })}
      </S.Wrapper>
    )
  }
}