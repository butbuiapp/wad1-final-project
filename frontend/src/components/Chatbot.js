import { useState } from 'react';
import OpenAIService from '../services/OpenAIService';

function Chatbot() {
  const [userInput, setUserInput] = useState('');

  async function submitHandler(e) {
    e.preventDefault();
    // get response from openAI
    const res = await OpenAIService.getAnswer(userInput);
    if (res) {
      console.log('response from openAI===', res); //res.choices[0].text
    } else {

    }
    
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type='text' name="userInput" 
          onChange={(e) => setUserInput(e.target.value)} />
      </form>
    </div>
  )
}

export default Chatbot;
