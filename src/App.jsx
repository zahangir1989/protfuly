import { RouterProvider } from 'react-router-dom';
import './App.css'
import Route from './Route/Route';

function App() {

  return (
    <div className="bg-gradient-to-r from-[#0D121D] to-[#0D131F]">
      <RouterProvider router={Route} />
    </div>
  );
}

export default App
