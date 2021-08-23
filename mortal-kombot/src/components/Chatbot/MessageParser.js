
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
      lowerCase.includes("todos") ||      
      lowerCase.includes("todo")
    ) {
      return this.actionProvider.handlerTodos();
    }

    // Mensaje cuando no entiendo
    return this.actionProvider.handleDefault();
  };
}

export default MessageParser;