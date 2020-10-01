import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Detail from './Detail/Detail';
import PageNotFound from './PageNotFound/PageNotFound';
import About from './pages/About/About';
import FilmsManager from './pages/Admin/FilmsManager/FilmsManager';
import UsersManager from './pages/Admin/UsersManager/UsersManager';
import Contact from './pages/Contact/Contact';
import DemoHOC from './pages/HOC/DemoHOC';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import TrangChu from './pages/TrangChu/TrangChu';
import Profile from './Profile/Profile';
import { HomeTemplate } from './templates/HomeTemplates';
import { AdminTemplate } from './templates/AdminTemplates'
import Booking from './pages/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
      {/* <Header></Header> */}
      <Switch>
        {/* <Route exact path="/home" render={(props) => {
          return <div>
            <Header></Header>
            <Home {...props}></Home>
          </div>
        }}></Route> */}

        <HomeTemplate exact path="/home" Component={Home} />
        <HomeTemplate exact path="/contact" Component={Contact} />
        <HomeTemplate exact path="/about" Component={About} />
        <HomeTemplate exact path="/hoc" Component={DemoHOC} />

        {/* <Route exact path="/login" render={(props) => {return (<div>
          <Header {...props}></Header>
          <Login {...props}></Login>
        </div>
          
        )}} /> */}
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/detail/:id" component={Detail}></Route>
        <Route exact path="/profile" component={Profile}></Route>
        <Route exact path="/trangchu" component={TrangChu}></Route>

        <AdminTemplate exact path='/admin/films' component={FilmsManager} />
        <AdminTemplate exact path='/admin/users' component={UsersManager} />

        <Route exact path="/booking/:maLichChieu" render={(propsRoute)=>{
          return <Booking {...propsRoute}/>
        }} />

        <HomeTemplate exact path="/" Component={Home}/>

        <Route exact path="*" component={PageNotFound}></Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
