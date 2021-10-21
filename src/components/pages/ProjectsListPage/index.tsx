import { Context } from "../../../Context";
import { useContext } from "react";

import {Error} from '../../Error';
import { Loader } from '../../Loader';
import ProjectsListItem from '../../ProjectsListItem';
import { IProject } from "../../../global/interface";
import S from "./styled"

interface Props {
  dbProjects: IProject[];
}

export const ProjectsListPage: React.FC<Props> = ({dbProjects}) => {

  const {state} = useContext(Context);
  const {error, loading} = state;
  
  if (error) {
    return <Error />
  } 
  
  if (loading) {
    return <Loader />
  }
  
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