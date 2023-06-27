import './App.css';
import { Switch, Route, useLocation } from 'react-router-dom';
import {Detail, Form, Home, Landing } from './views/index';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
import FormUpdated from './views/Update/FormUpdated2'

function App() { 

  const location = useLocation();


  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}

    <Switch>
      <Route exact path="/" component={Landing}/>
      <Route path="/home" component={Home}/>
      <Route path="/detail/:idRaza" component={Detail}/>
      <Route path="/form" component={Form}/>
      <Route path="/formUpdate/:idRaza" component={FormUpdated}/>
      <Route path="*" component={Error}/>
    </Switch>

    {location.pathname !== "/" && <Footer />}

    
    </div>
  );
}

export default App;
