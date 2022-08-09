import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faPlus, faEdit,faCamera,faList } from "@fortawesome/free-solid-svg-icons";


import Navbar from './components/Navbar';
import Admin from './components/Admin';
import User from './components/User';
import ViewUser from'./components/ViewUser';
import viewAdmin from './components/ViewAdmin';
import CreateAdmin from './components/CreateAdmin';
import Login from './components/Login';
import Footer from './components/Footer'; 


library.add(faTrash,faEdit,faPlus,faList)


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="back5.jpg" className="App-logo" alt="logo" />
        <h1>  Jet Airways </h1>
        </header>
        <div style={{ backgroundImage: "url(/Images/back6.jpg)",
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    

                    minWidth: '100vw',
                    backgroundSize: 'cover'}}>
      <Router>
        <Navbar></Navbar>
        <div className='container'>
        <Switch>
        <Route path='/admin'  component={Admin}></Route>
        <Route path='/user'  component={User}></Route>
        
        <Route path='/viewAdmin/:id'  component={viewAdmin}></Route>
        <Route path='/addAdmin/:id'  component={CreateAdmin}></Route>
        <Route path='/login'  component={Login}></Route>
        <Route path='/viewUser/:id'  component={ViewUser}></Route> 

        </Switch>
           </div>      
      </Router>
      </div>
      <footer className="Footer">
        <Footer></Footer>

      </footer> 
         
    </div>
  );
}

export default App;
