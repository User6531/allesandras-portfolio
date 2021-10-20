import { Route, Switch, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import {error} from '../../reducer/action';
import { Context } from "../../Context";
import { IProject } from "../../global/interface";

// pages
import { ProjectsListPage } from '../pages/ProjectsListPage/';
import { AboutPage } from '../pages/AboutPage/';
import { ContactsPage } from '../pages/ContactsPage/';
import { ProjectPage } from '../pages/ProjectPage/';
import { ServicesPage } from '../pages/ServicesPage/';

// styles
import S from "./styled"

export const Main: React.FC = () => {

  const {service, dispatch} = useContext(Context);
  const [dbProjects, setDbProject] = useState<IProject[]>([]);
  const location = useLocation();
  
  useEffect(()=>{
    service.getAllProjects()
    .then((res: IProject) => setDbProject(res.data))
    .catch((res: string)=>dispatch(error(res)));
  }, []);

  return (
    <S.Wrapper>
      <Switch location={location}>
        <Route exact path="/"><ProjectsListPage dbProjects={dbProjects}/></Route>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/services" component={ServicesPage} />
        <Route exact path="/contacts" component={ContactsPage} />
        <Route path="/:id" component={ProjectPage} />
      </Switch>
    </S.Wrapper>
  );
}