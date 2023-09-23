import { useState, useEffect } from 'react';
import OpenAIService from '../services/OpenAIService';
import '../css/Chatbot.css';

function Chatbot() {
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  async function submitHandler(e) {
    e.preventDefault();
    let newMessages = [];
    // add user input to messages
    newMessages.push(
      {
        type: 'incoming',
        message: userInput
      }
    );      
    
    // get response from openAI
    const res = await OpenAIService.getAnswer(userInput);
    if (res) {
      console.log('response from openAI===', res); //res.choices[0].text
    } else {
      newMessages.push(
        {
          type: 'outgoing',
          message: 'Oop! Something wrong happens.'
        }
      );      
    }
    setMessages([...messages, ...newMessages]);
  }

  useEffect(() => {
    setMessages([...messages,
    {
      type: 'outgoing',
      message: "Hi there 👋How can I help you today?"
    }
    ]);
  }, [])

  return (
    <div className='chatbot'>
      <form onSubmit={submitHandler}>
        <header>
          <h2>Chatbot</h2>
        </header>

        <ul className="chatbox">
          {messages.map((obj, index) => (
            <li className={`chat ${obj.type}`}><p>{obj.message}</p></li>
          ))}

        </ul>
        <div className='chat-input'>
          <input type='text' name="userInput" placeholder="Enter a message..."
            onChange={(e) => setUserInput(e.target.value)} />
        </div>

      </form>
    </div>
  )
}

export default Chatbot;
