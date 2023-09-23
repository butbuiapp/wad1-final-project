import './App.css';
import router from './router/index';
import { RouterProvider } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import { useEffect, useState } from 'react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const toggleChat = () => {
    setIsVisible(!isVisible);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, [])
  return (
    <div className="App">
      <RouterProvider router={router} />

      { isAuthenticated && <>
        <button className='chatbot-btn' onClick={toggleChat}>Need help?</button>
          {isVisible && <Chatbot/>}
        </>
      }
      
    </div>
  );
}

export default App;
