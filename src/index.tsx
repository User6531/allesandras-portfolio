import ReactDOM from 'react-dom';

import App from './components/App/';
import GlobalFonts from './global/fonts/GlobalFonts';
import GlobalColors from './global/GlobalColors';
import GlobalStyle from './global/GlobalStyle';
import {ErrorBoundary} from './components/ErrorBoundary';
import {Context} from "./Context/";

ReactDOM.render(
  <>
    <GlobalFonts />
    <GlobalStyle />
    <GlobalColors />
    <ErrorBoundary>
      <Context.Provider value={{}}>
              <App/>
      </Context.Provider>
    </ErrorBoundary>
  </>
  ,document.getElementById('root')
);