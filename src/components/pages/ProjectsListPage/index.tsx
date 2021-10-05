import { Context } from "../../../Context";
import { useContext } from "react";

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
  dbProjects: ArrayProps[];
}

export const ProjectsListPage: React.FC<Props> = ({dbProjects}) => {

  const {state} = useContext(Context);

  if (state.error) {
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