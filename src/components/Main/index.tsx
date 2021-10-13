import { Route, Switch, useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { Context } from "../../Context";
import {ProjectsListPage} from '../pages/ProjectsListPage/';
import {AboutPage} from '../pages/AboutPage/';
import {ContactsPage} from '../pages/ContactsPage/';
import {ProjectPage} from '../pages/ProjectPage/';
import { ServicesPage } from '../pages/ServicesPage/';
import {error} from '../../reducer/action';
import { resRequest } from "../../global/interface";

import S from "./styled"

export const Main: React.FC = () => {

  const {service, dispatch} = useContext(Context);
  const [dbProjects, setDbProject] = useState<resRequest[]>([]);
  const location = useLocation();
  
  useEffect(()=>{
    service.getAllProjects()
    .then((res: resRequest) => setDbProject(res.data))
    .catch((res: string)=>dispatch(error(res)));
  }, []);

  return (
    <S.Wrapper>
      
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
              <Route exact path="/">
                <ProjectsListPage dbProjects={dbProjects}/>
              </Route>
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/services" component={ServicesPage} />
              <Route exact path="/contacts" component={ContactsPage} />
              <Route exact path="/:id" render={({match})=>{
                const {id} = match.params;
                return (
                    <ProjectPage dbProjects={dbProjects} id={id}/>
                )
              }} />
            </Switch>
          </section>
        </CSSTransition>
      </TransitionGroup>
    </S.Wrapper>
  );
}