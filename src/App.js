import './App.css';
import {RouterProvider,} from "react-router-dom";
import {router} from "src/Router";

function App() {

  return (
    <RouterProvider router={router} fallbackElement={<>.....</>}/>
  )
}

export default App;
