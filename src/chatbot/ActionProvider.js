//colocar que hace el action provider (leer docu)

const buildMessageConfig = (withAvatar, widgetName) => {
  return {
    withAvatar: withAvatar,
    widget: widgetName
  }
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  // Ir al supermercado
  handleMarket = () => {
    const messages = this.createChatBotMessage(
      "Hacer las compras de la casa con la familia es lo mejor!",
      buildMessageConfig(true, 'SecondQuestion')
    );
    this.addMessageToBotState(messages);
  };

  // Visitar a la familia
  handleVisitFamily = () => {
    const messages = this.createChatBotMessage(
      "¡Siempre hay que tener tiempo para la familia y compartir con ella!",
      buildMessageConfig(true, 'SecondQuestion')
    );
    this.addMessageToBotState(messages);
  };

  // Pasear en el parque
  handleWalk = () => {
    const messages = this.createChatBotMessage(
      "¡Tener tiempo a solas es ideal para despejarse, comer un helado es ideal!",
      buildMessageConfig(true, 'Park')
    );
    this.addMessageToBotState(messages);
  };
  // Lista de personas que conozco
  handlerDataUsers = () => {
    const message = this.createChatBotMessage(
      "Esta es la lista de personas que conozco",
      buildMessageConfig(false, 'DataUsers')
    );
    this.addMessageToBotState(message);
  };

  // Ver una pantalla
  handleWatchAScreen = () => {
    const message = this.createChatBotMessage(
      "Prepara pochoclos y gaseosa para disfrutarlo a gusto. En compañia es mejor! :D"
    );
    this.addMessageToBotState(message);
  };

  // Ver una dormir
  handlerSleep = () => {
    const message = this.createChatBotMessage("Dulces sueños");
    this.addMessageToBotState(message);
  };

  // Mensaje cuando no entiendo
  handleDefault = () => {
    const message = this.createChatBotMessage(
      "No entendí lo que quisiste decir, ¿podrías reformular la pregunta?",
      buildMessageConfig(true, null)
    );

    this.addMessageToBotState(message);
  };

  //función para cuando es un mensaje o varios mensajes
  addMessageToBotState = (messageOrMessages) => {
    if (Array.isArray(messageOrMessages)) {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, ...messageOrMessages],
      }));
    } else {
      this.setState((state) => ({
        ...state,
        messages: [...state.messages, messageOrMessages],
      }));
    }
  };
}

export default ActionProvider;
