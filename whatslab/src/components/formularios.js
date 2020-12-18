import React from "react";

class Formularios extends React.Component {
  state = {
    
    message: [
      {
        name: "",
        text: ""
      },

    ],
    
    inputName: "",
    inputText: ""
  };

  addMessage = () => {
    
    const newMessage = {
      
      name: this.state.inputName,
      message: this.state.inputText
    };


    const newMessage = [...this.state.message, newMessage];

    this.setState({ message: newMessage });
  };

  onChangeInputName = (event) => {
    
    this.setState({ inputName: event.target.value });
  };

  onChangeInputText = (event) => {

    this.setState({ inputText: event.target.value });
  };

  render() {

    const message = this.state.message.map((message) => {
      return (
        <div>
          {message.name}: {message.text}
        </div>
      );
    });

    return (
      <div>
        <div>{message}</div>
        <div>
          <input
            value={this.state.inputName}
            onChange={this.onChangeInputName}
            placeholder={"Usuário"}
          />
          <input
            value={this.state.inputText}
            onChange={this.onChangeInputText}
            placeholder={"Mensagem"}
          />
          <button onClick={this.addMessage}>Enviar</button>
        </div>
      </div>
    );
  }
}

export default Formularios