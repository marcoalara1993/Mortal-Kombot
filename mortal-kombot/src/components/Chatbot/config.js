import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import Todos from '../Widgets/Todos';
import SecondQuestion from '../Widgets/SecondQuestion'

const botName = "Mortal Kombot";

const config = {
  botName: botName, 
  headerText: "Estas hablando con", 
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "grey",
    },
  },
   customComponents: {
     // Titulo del bot
    header: () => <div style={{ backgroundColor: 'grey', padding: "10px", borderRadius: "5px", color: "white", fontWeight: "bold" }}>Mortal Kombot</div>
   },
  initialMessages: [  //Dispara un array con los mensajes iniciales
    createChatBotMessage(
      `Hola, soy ${botName}. Soy un bot creado por Marco Lara`),
     createChatBotMessage(
       "¿Qué tienes planeado hacer el día de hoy?",
       {
         withAvatar: false,
         delay: 1000,
        //  widget: "todos",  //esto es una prueba para llamar de inmediato a los nombres de la api
       }
     ),    
  ],
  state: {
    todos: []
  },
  widgets: [ 
    {
      widgetName: "todos",
      widgetFunc: (props) => <Todos {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["todos"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {} //estados a recibir
    },
    {
      widgetName: "SecondQuestion",
      widgetFunc: (props) => <SecondQuestion {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["SecondQuestion"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {}, //estados a recibir
      delay: 500
    }
  ]
};

export default config;