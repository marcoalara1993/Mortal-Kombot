class ActionProvider {  
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;    
  }
  // Ir al supermercado
  handleMarket = () => {
    const messages = this.createChatBotMessage(
      "Hacer las compras de la casa con la familia es lo mejor!",
      { withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };
  // Visitar a la familia
  handleVisitFamily = () => {
    const messages = this.createChatBotMessage(
      "¡Siempre hay que tener tiempo para la familia y compartir con ella!",
      { withAvatar: true }
    );
    this.addMessageToBotState(messages);
  };
  // Pasear en el parque
  handlePark = () => {
    const messages = this.createChatBotMessage(
      "¡Tener tiempo a solas es ideal para despejarse, comer un helado es ideal!",
      { withAvatar: true, delay: 500, widget: "SecondQuestion" }
    );
    this.addMessageToBotState(messages);
  };
  // Lista de personas que conozco
  handlerTodos = () => {
    const message = this.createChatBotMessage("Esta es la lista de personas que conozco", {
      widget: "todos"
    })
    this.addMessageToBotState(message);
  };

  handlerDoAfter = () => {
    const message = this.createChatBotMessage("¿Y después de eso, qué piensas hacer?", {
      delay: 500,
      withAvatar: false
    })
    this.addMessageToBotState(message);
  }
  // Mensaje cuando no entiendo
  handleDefault = () => {
    const message = this.createChatBotMessage("No entendí lo que quisiste decir, ¿podrías reformular la pregunta?", {
      withAvatar: true,
    });

    this.addMessageToBotState(message)
  };

  addMessageToBotState = (messages) => {
    if (Array.isArray(messages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messages],
      }));
    }
  };
}

export default ActionProvider;