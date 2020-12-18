import React from 'react';
import styled from 'styled-components'

const MessageFormContainer = styled.div`
  display: flex;
  margin: 1%;
`

const UserInput = styled.input`
  width: 25%;
`

const TextInput = styled.input`
  flex: 1;
  width:75%;
`

export class MessageForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      text: ''
    }
  }

  onChangeName = (event) => {
    this.setState({name: event.target.value})
  }

  onChangeText = (event) => {
    this.setState({text: event.target.value})
  }

  onSendMessage = () => {
    const message = {
      user: this.state.name,
      text: this.state.text
    }

    this.props.addMessage(message)

    this.setState({text: ''})
  }

  render() {
    return (
      <MessageFormContainer>
        <UserInput type="text" placeholder={'Usuário'} onChange={this.onChangeName} value={this.state.name}/>
        <TextInput type="text" placeholder={'Mensagem'} onChange={this.onChangeText}  value={this.state.text}/>
        <button onClick={this.onSendMessage}>Enviar</button>
      </MessageFormContainer>
    );
  }
}