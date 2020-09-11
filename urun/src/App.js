import React from 'react';
import { Route, BrowserRouter,Switch } from 'react-router-dom';

import portfolio from './components/portfolio';
import menu from './menu';
import ceviz from './components/ceviz';
import bulgur from './components/bulgur';
import kayit from './components/kayit';
import contact from './components/contact';
import about from './components/about';
import blog from './components/blog';



function App() {
  return (

    <BrowserRouter>
      <div className="App">
      
        <Switch>    
        <Route exact path="/" component={menu}/>
        <Route  path="/portfolio" component={portfolio}/>
        <Route  path="/ceviz" component={ceviz}/> 
        <Route  path="/bulgur" component={bulgur}/> 
        <Route  path="/kayit" component={kayit}/> 
        <Route  path="/contact" component={contact}/> 
        <Route  path="/about" component={about}/> 
        <Route  path="/blog" component={blog}/> 
        
            
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

export default App;