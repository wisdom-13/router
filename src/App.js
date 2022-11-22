import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <p>home</p>,
    errorElement: <p>404</p>
  },
  {
    path: '/vidoes',
    element: <p>vidoes</p>,
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>
}

export default App;
