import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import 'react-photo-view/dist/react-photo-view.css';

function App() {

  return (
    <div className=" container mx-auto">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;
