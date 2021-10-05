import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App/';
import {ErrorBoundary} from './components/ErrorBoundary';
import GlobalFonts from './global/fonts/GlobalFonts';
import GlobalColors from './global/GlobalColors';
import GlobalStyle from './global/GlobalStyle';

ReactDOM.render(
  <>
    <GlobalFonts />
    <GlobalColors />
    <GlobalStyle />
    <ErrorBoundary>
        <Router>
          <App/>
        </Router>
    </ErrorBoundary>
  </>
  ,document.getElementById('root')
);