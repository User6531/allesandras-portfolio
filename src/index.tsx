import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App/';
import GlobalFonts from './global/fonts/GlobalFonts';
import GlobalColors from './global/GlobalColors';
import GlobalStyle from './global/GlobalStyle';
import {ErrorBoundary} from './components/ErrorBoundary';
import {Context} from "./Context/";
import Service from './services/Services';

const service = new Service();



ReactDOM.render(
  <>
    <GlobalFonts />
    <GlobalColors />
    <GlobalStyle />
    <ErrorBoundary>
      <Context.Provider value={{service}}>
        <Router>
          <App/>
        </Router>
      </Context.Provider>
    </ErrorBoundary>
  </>
  ,document.getElementById('root')
);