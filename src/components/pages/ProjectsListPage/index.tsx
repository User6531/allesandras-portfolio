import { Context } from "../../../Context";
import { useContext } from "react";

import {Error} from '../../Error';
import { Loader } from '../../Loader';
import { ProjectsListItem } from '../../ProjectsListItem';
import { resRequest } from "../../../global/interface";
import S from "./styled"

interface Props {
  dbProjects: resRequest[];
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