import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/Forms';
import { Message } from './components/Message';


// Container principal
const AppContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  margin: auto;
  flex-direction: column;
  max-width: 100vh;
  height: 100vh;
  border: 1px solid black;
  background: #FFFFFF url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png");
`
// Container das mensagens enviadas
const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  flex-grow: 1;
`
// Fazer o texto do nome ficar negrito
const BoldText = styled.span`
  font-weight: bold;
`

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      messages: []
    }
  }

  addMessage = (message) => {
    this.setState({messages: [...this.state.messages, message] })
  }

  render() {
    return (
      <AppContainer>
        <MessagesContainer>
          {
            this.state.messages.map((message, index) => <p key={index}><BoldText>{message.user}</BoldText>{': ' + message.text}</p>)
          }
        </MessagesContainer>
        <MessageForm addMessage={this.addMessage} />
      </AppContainer>
    );
  }
}

export default App;