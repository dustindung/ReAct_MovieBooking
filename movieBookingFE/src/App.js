import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Detail from './Detail/Detail';
import PageNotFound from './PageNotFound/PageNotFound';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TrangChu from './pages/TrangChu/TrangChu';
import Profile from './Profile/Profile';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Route exact path="/about" component={About}></Route>
        {/* <Route exact path="/login" render={(props) => {return (<div>
          <Header {...props}></Header>
          <Login {...props}></Login>
        </div>
          
        )}} /> */}
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/trangchu" component={TrangChu}></Route>
        <Route exact path="/" component={Home}></Route>
        
        <Route exact path="*" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
