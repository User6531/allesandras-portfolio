import { Route, Switch } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { Context } from "../../Context";
import {ProjectsListPage} from '../pages/ProjectsListPage/';
import {AboutPage} from '../pages/AboutPage/';
import {ContactsPage} from '../pages/ContactsPage/';
import {ProjectPage} from '../pages/ProjectPage/';
import { ServicesPage } from '../pages/ServicesPage/';
import {error} from '../../reducer/action';

import S from "./styled"

interface resRequest {
  id: string;
  projectName: string;
  description: string;
  thumbnail: string;
  img: string[];
  data: []
}

export const Main: React.FC = () => {

  const {service, dispatch} = useContext(Context);
  const [dbProjects, setDbProject] = useState<resRequest[]>([]);

  useEffect(()=>{
    service.getAllProjects()
    .then((res: resRequest) => setDbProject(res.data))
    .catch((res: string)=>dispatch(error(res)));
  }, []);
  
  return (
    <S.Wrapper>
      <Switch>
          <Route exact path="/" render={()=>{
            return <ProjectsListPage dbProjects={dbProjects}/>
          }} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/services" component={ServicesPage} />
          <Route exact path="/contacts" component={ContactsPage} />
          <Route exact path="/:id"render={({match})=>{
            const {id} = match.params;
            return <ProjectPage dbProjects={dbProjects} id={id}/>
          }} />
        </Switch>
    </S.Wrapper>
  );
}