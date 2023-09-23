import './App.css';
import router from './router/index';
import { RouterProvider } from 'react-router-dom';
import './config/axios';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      {/* <RouterProvider router={router} /> */}
      <Chatbot/>
    </div>
  );
}

export default App;
