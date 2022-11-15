import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import PlaceToStay from './pages/PlaceToStay'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path= "/" element = {
            <Home />
          }
        />
        <Route path='/Place_to_Stay' element = {
            <PlaceToStay />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
