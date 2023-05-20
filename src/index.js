import React from 'react';
import ReactDOM from 'react-dom/client';
import './tailwind.css';
import App from './App';
import Nav from './components/Nav';
import SideBar from './components/SideBar';
import ImgSlider from './components/imgslider/ImageSlider';
import {AppProvider} from './context';
import Card from './components/Card';
import { uscita1 } from './dataCard';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App/>
        <Nav/>
        <SideBar/>
      </AppProvider>
      <ImgSlider/>
      <Card {...uscita1}/>
  </React.StrictMode>
);