import { Route, Switch } from "react-router-dom";

import {ProjectsListPage} from '../pages/ProjectsListPage/';
import {AboutPage} from '../pages/AboutPage/';
import {ContactsPage} from '../pages/ContactsPage/';
import {ProjectPage} from '../pages/ProjectPage/';

import S from "./styled"

export const Main: React.FC = () => {

  return (
    <S.Wrapper>
      <Switch>
          <Route exact path="/" component={ProjectsListPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contacts" component={ContactsPage} />
          <Route path="/ProjectPage" component={ProjectPage} />
        </Switch>
    </S.Wrapper>
  );
}