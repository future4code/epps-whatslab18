import React from 'react';
import './App.css';
import styled from 'styled-components'
import { MessageForm } from './components/Forms';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vh;
  height: 100vh;
  border: 1px solid black;
  background-color: #2d8ddd;
  flex: 1;
`

const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 20px;
`

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
    this.setState({ messages: [...this.state.messages, message] })
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