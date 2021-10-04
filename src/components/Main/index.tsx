import { Route, Switch } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { Context } from "../../Context";
import {ProjectsListPage} from '../pages/ProjectsListPage/';
import {AboutPage} from '../pages/AboutPage/';
import {ContactsPage} from '../pages/ContactsPage/';
import {ProjectPage} from '../pages/ProjectPage/';

import S from "./styled"

interface ArrayProps {
  id: string;
  projectName: string;
  description: string;
  thumbnail: string;
  img: string[];
}

export const Main: React.FC = () => {

  const {service} = useContext(Context);
  const [dbProjects, setDbProject] = useState<ArrayProps[]>([]);
  const [error, setError] = useState(false)

  useEffect(()=>{
    service.getAllProjects()
    .then((res: ArrayProps[]) => setDbProject(res))
    .catch(()=>setError(true));
  }, []);

  return (
    <S.Wrapper>
      <Switch>
          <Route exact path="/" render={()=>{
            return <ProjectsListPage error={error} dbProjects={dbProjects}/>
          }} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route exact path="/:id"render={({match})=>{
            const {id} = match.params;
            return <ProjectPage dbProjects={dbProjects} id={id}/>
          }} />
        </Switch>
    </S.Wrapper>
  );
}