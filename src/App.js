import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Details from './Components/Details';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route path='details' element={<Details />} />
          <Route path='home' element={<Home />} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
