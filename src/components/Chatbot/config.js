import React from 'react';
import { createChatBotMessage } from "react-chatbot-kit";
import DataUsers from '../Widgets/DataUsers';
import Parque from '../Widgets/Park'
import Options from "../main-options-widget/options.jsx"
import SecondQ from '../Widgets/SecondQuestion'


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
         widget: "Options"
        //  widget: "DataUsers",  //esto es una prueba para llamar de inmediato a los nombres de la api
       }
     ),    
  ],
  state: {
    DataUsers: []
  },
  widgets: [ 
    {
      widgetName: "Options",
      widgetFunc: (props) => <Options {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["Options"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {} //estados a recibir
    },
    {
      widgetName: "SecondQ",
      widgetFunc: (props) => <SecondQ {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["SecondQ"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {} //estados a recibir
    },
    {
      widgetName: "DataUsers",
      widgetFunc: (props) => <DataUsers {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["DataUsers"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {} //estados a recibir
    },
    {
      widgetName: "Parque",
      widgetFunc: (props) => <Parque {...props} />, //funcion a llamar para resolver internamente
      mapStateToProps: ["Parque"], // que partes o piezas quiero pasar cuando se monte el widget
      props: {}, //estados a recibir
      delay: 500
    }  
  ]
};

export default config;