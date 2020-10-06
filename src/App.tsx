import React from 'react';
import { Navbar } from './components/Navbar';

import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AboutPage from './components/pages/AboutPage';
import TodosPage from './components/pages/TodosPage';

const App: React.FC = () => {
 
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={TodosPage}/>
          <Route path='/about' component={AboutPage}/>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
};

export default App;
