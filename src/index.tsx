import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

import App from './components/App/';
import { ErrorBoundary } from './components/ErrorBoundary';


ReactDOM.render(
  <>
    <ErrorBoundary>
          <Router>
              <App/>
          </Router>
    </ErrorBoundary>
  </>
  ,document.getElementById('root')
);
