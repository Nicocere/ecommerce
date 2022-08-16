import React from 'react';
import ReactDOM from 'react-dom/client';

import Footer from './componentes/Footer/Footer'
import Header from './componentes/Header/Header'
import Main from './componentes/Main/Main'
import NavBar from './componentes/Nav/NavBar';

import './index.css';
// import App from './App';

const App = () => {
  return (
      <>
      <Header/>
      <Main/>
      <Footer/>

      </>



  );
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <App /> );



