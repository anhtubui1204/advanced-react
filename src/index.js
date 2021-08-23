import React from 'react';
import ReactDOM from 'react-dom';
import 'styles/global.scss';
import Root from 'Root';

import App from 'containers/App';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={null}>
      <Root>
        <App />
      </Root>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

