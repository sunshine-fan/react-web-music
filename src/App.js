import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';

import routes from './router';

import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom';


const App = memo(() => {
  return (
    <HashRouter>
      <HYAppHeader/>
      {renderRoutes(routes)}
      <HYAppFooter/>
    </HashRouter>
  );
});
export default App;