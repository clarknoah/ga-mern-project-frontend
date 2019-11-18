import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import Home from './components/Home/Home.js';


let RootRoute = <Route path="/" render={()=>{
  return Home;
}}/>;
function App() {

  return (
    <div className="App">
      <header>
        <h1>App Name</h1>
        <Link to="/url" component={()=>{
          return <div/>
        }}>Link</Link>
      </header>
      <main>
      <Route path="/" render={()=>{
        return <Home/>
      }}/>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
