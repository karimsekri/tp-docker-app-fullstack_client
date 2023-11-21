
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Formulaire from './routes/Formulaire';
import Time from './routes/Time';

function App() {

  const maRoute = createBrowserRouter([
    {
      path: "/",
      element: <Formulaire />,
    },
    {
      path: "/times",
      element: <Time />,
    }
  
  ]);

  return (
    <RouterProvider router={maRoute} />
  )
}

export default App
