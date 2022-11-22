import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Vidoes from './pages/Vidoes';
import Root from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'vidoes',
        element: <Vidoes />,
      }
    ]
  },

]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
