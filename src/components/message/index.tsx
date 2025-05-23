type MessageParams = {
  message: string;
  type: 'success' | 'error' | 'info';
}

const Message = ({message, type} : MessageParams) => {
  const messageClass = {
    success: {
      margin: '10px',
      backgroundColor: 'green',
      color: 'white',
      borderColor: 'white'
    },
    error: {
      margin: '10px',
      backgroundColor: 'red',
      color: 'white',
      borderColor: 'white'
    },
    info: {
      margin: '10px',
      backgroundColor: 'blue',
      color: 'white',
      borderColor: 'white'
    }
  }[type];

  return (
    <div style={messageClass}>
      {message}
    </div>
  );
}

export default Message;
