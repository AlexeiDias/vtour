import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import home from './pages/home'
import NavigationBar from './component/NavigationBar'
import FooterArea from './component/FooterArea';
// import {library} from '@fortawesome/fontawesome-svg-core'
// import {fab} from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    < >
    <NavigationBar />
    <Router>
      <Switch>
        <Route exact path="/" component={home} />
        
      </Switch>
    </Router>
    <FooterArea />
    </>
    
  );
}

export default App;
