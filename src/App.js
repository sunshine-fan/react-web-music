import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
//需要provider 将其共享
import { Provider } from 'react-redux';

import routes from './router';
import store from './store';
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom';


const App = memo(() => {
  return (
    <Provider store={store}>
      <HashRouter>
        <HYAppHeader/>
        {renderRoutes(routes)}
        <HYAppFooter/>
      </HashRouter>
    </Provider>
   
  );
});
export default App;