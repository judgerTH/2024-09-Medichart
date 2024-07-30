class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    if (message.includes("안녕")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
