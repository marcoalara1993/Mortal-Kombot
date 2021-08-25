//colocar que hace el message parse (leer docu)

const MARKET_KEYWORDS = ["mercado", "supermercado", "market", "supermarket"];
const USERS_KEYWORDS = ["user", "users", "usuarios", "usuario", "personas"];
const VISIT_KEYWORDS = ["visitar", "visita", "familia", "family"];
const GOTOWALK_KEYWORDS = ["parque", "bosque", "playa", "selva", "montaña", "pescar", "pasear", "caminar", "caminata"];
const SERIES_KEYWORDS = ["netflix", "disney", "televisión", "tv", "cine", "hbo", "amazon", "series", "peliculas"];
const SLEEP_KEYWORDS = ["dormir", "descansar", "acostarme", "acostar"];

class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed 
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state
  }

  parse = (message) => {
    const splittedMessageInLowerCase = message.toLowerCase().split(' ');

    // ir al supermercado
    if (splittedMessageInLowerCase.some(word => MARKET_KEYWORDS.includes(word))) {
      return this.actionProvider.handleMarket();      
    }

    // visitar a la familia
     if (splittedMessageInLowerCase.some(word => VISIT_KEYWORDS.includes(word))) {
       return this.actionProvider.handleVisitFamily();
     }
     // pasear por el parque
     if (splittedMessageInLowerCase.some(word => GOTOWALK_KEYWORDS.includes(word))) {
       return this.actionProvider.handleWalk();
     }

    // Lista de personas que conozco
     if (splittedMessageInLowerCase.some(word => USERS_KEYWORDS.includes(word))) {
       return this.actionProvider.handlerDataUsers();
     }

    // ver series
     if (splittedMessageInLowerCase.some(word => SERIES_KEYWORDS.includes(word))) {
       return this.actionProvider.handleWatchAScreen();
     }

    // Descansar y/o dormir
      if (splittedMessageInLowerCase.some(word => SLEEP_KEYWORDS.includes(word))) {
       return this.actionProvider.handlerSleep();
     }     

    // Mensaje cuando no entiendo
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;