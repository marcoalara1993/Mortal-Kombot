import React from 'react';
import Chatbot from 'react-chatbot-kit';
import config from './components/Chatbot/config'
import ActionProvider from './components/Chatbot/ActionProvider'
import MessageParser from './components/Chatbot/MessageParser'
import './App.css';


function App() {
  return (
    <div className="App">
      <div style={{maxWidth: "300px" }}>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
          placeholderText="Escriba sus locuras aquí"
        />
      </div>      
    </div>
  );
}

export default App;
