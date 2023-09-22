import './App.css';
import router from './router/index';
import { RouterProvider } from 'react-router-dom';
import './config/axios';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
