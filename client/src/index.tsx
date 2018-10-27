import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { LoginPage } from './pages';
import { store } from './store';

render(
  <Provider store={store}>
    <LoginPage />
  </Provider>,
  document.getElementById('app'),
);
