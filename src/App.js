import './App.css';
import {Routes, Route} from 'react-router-dom'
import HomePage from './RoutePages/HomePage';
import PlaceToStay from './RoutePages/PlaceToStay'

function App() {
  return (
    <Routes>
      <Route 
        path= "/" 
        element = {
          <HomePage />
        }
      />
      
      <Route 
        path='/Place_to_Stay'
        element = {
          <PlaceToStay />
        }
      />
    </Routes>
  );
}

export default App;
