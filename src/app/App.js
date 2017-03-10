import React from 'react';
import { Provider } from 'react-redux';

import UiRoot from './UiRoot';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store} >
      <UiRoot />
    </Provider>
  );
}
