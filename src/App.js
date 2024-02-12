import UserList from './Components/UserList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import Error from './Components/Error';

function App() {

  const appRouter = createBrowserRouter([
    {
      path : "/",
      element: <UserList />,
      errorElement: <Error />
    },  
    {
        path: "/userdetails/:login",
        element : <UserDetails />,
        errorElement: <Error />
    }
  ])
 
  return (
    <RouterProvider router = {appRouter}/>
  );
}

export default App;
