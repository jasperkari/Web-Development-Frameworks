import React from 'react';
import './App.css';
import Headers from './components/Headers';
import MainSection from './components/MainSection';
import Navigation from './components/Navigation';
import Notifications from './components/Notifications';
import Side from './components/Side';

function App() {

  const NotificationData = [
    {
      topic: "HS-ANALYYSI",
      body: "Vastaako yksi suomalainen hävittäjä kymmentä venaläistä."
    },
    {
      topic: "KAUPUNKI",
      body: "Suomen suurimman hotellin rakentaminen alkaa: 700 huonetta, suora yhteys ”kuivin jaloin” lentoasemalle."
    },
  ];

  return (
    <div style = {{background: '#E9EAED'}}>
      <Headers />
      <Navigation />
      {
        NotificationData.map(element => <Notifications topic = {element.topic} body = {element.body} />)
      }
      <div style={{display: 'flex'}}>
        <MainSection />
        <Side />
      </div>
    </div>
  );
}

export default App;
