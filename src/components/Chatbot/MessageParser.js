class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    // State represents the chatbot state and is passed 
    // in at initalization. You can use it to read chatbot state
    // inside the messageParser
    this.state = state
  }

  parse = (message) => {
    const lowerCase = message.toLowerCase();
    // ir al supermercado
    if (
      lowerCase.includes("mercado") ||
      lowerCase.includes("supermercado") ||
      lowerCase.includes("market") ||
      lowerCase.includes("supermarket")
    ) {
      return this.actionProvider.handleMarket();      
    }

    // visitar a la familia
    if (
      lowerCase.includes("visita") ||
      lowerCase.includes("visitar") ||
      lowerCase.includes("familia")
    ) {
      return this.actionProvider.handleVisitFamily();
    }
    // pasear por el parque
    if (
      lowerCase.includes("pasear") ||
      lowerCase.includes("parque")
    ) {
      return this.actionProvider.handlePark();
    }
    // Lista de personas que conozco
    if (
      lowerCase.includes("usuarios") ||      
      lowerCase.includes("users")
    ) {
      return this.actionProvider.handlerDataUsers();
    }

    // ver series
    if (
      lowerCase.includes("series") ||
      lowerCase.includes("netflix") ||
      lowerCase.includes("disney") ||
      lowerCase.includes("televisión") ||
      lowerCase.includes("videos") ||
      lowerCase.includes("HBO") ||
      lowerCase.includes("pelicula")
    ) {
      return this.actionProvider.handleWatchAScreen();
    }

     // Descansar y/o dormir
     if (
      lowerCase.includes("dormir") ||      
      lowerCase.includes("descansar")
    ) {
      return this.actionProvider.handlerSleep();
    }

    // Mensaje cuando no entiendo
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;