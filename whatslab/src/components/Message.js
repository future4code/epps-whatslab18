// import React from 'react';
// import styled from 'styled-components'


// export class Message extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   onDoubleClick = () => {
//     if (window.confirm('Tem certeza que deseja deletar essa mensagem?')) {
//       this.props.deleteMessage(this.props.message)
//     }
//   }

//   render() {
    
//     let position
    
//     let username

//     if(this.props.message.user === 'eu') {
//       position = 'right'
//     } 
    
//     else {
//       position = 'left'
//       username = <UsernameContainer>{this.props.message.user}</UsernameContainer>
//     }

//     return (
//       <MessageContainer onDoubleClick={this.onDoubleClick}>
//         <MessageBox position={position}>
//           {username}
//           {this.props.message.text}
//         </MessageBox>
//       </MessageContainer>
//     );
//   }
// }