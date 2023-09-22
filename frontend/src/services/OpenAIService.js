import axios from "axios";
import { OpenAI } from 'openai';

class OpenAIService {
  openai = new OpenAI({
    apiKey: process.env.REACT_APP_OPENAI_KEY,
    dangerouslyAllowBrowser: true
  });

  endpoint = "https://api.openai.com/v1/engines/text-davinci-003/completions";

  PARAMS = {
    temperature: 0.5,
    max_tokens: 256
  }

  async getAnswer(input) {
    try {
      const prompt = `if the question is related to weather, answer it: ${input}`;
      const data = { ...this.PARAMS, prompt };

      const res = await axios.post(
        this.endpoint,
        data,
        {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${this.openai.apiKey}`
          }
        }
      );
      console.log('res==', res.data)
    } catch (error) {
      return null;
    }

  }
}

const openaiService = new OpenAIService();
export default openaiService; 