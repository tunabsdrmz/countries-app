import { useEffect, useState, useRef} from 'react';
import axios from 'axios';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import SharedLayout from './Components/SharedLayout'
import Home from './Components/Home'
import DetailsPage from './Components/DetailsPage'
import './App.css';

function App() {
  const [darkMode , setDarkMode] = useState(false)
  const [countries, setCountries] = useState([])
  const countriesInputRef = useRef()
  const regionRef = useRef()
  useEffect(()=>{
    axios.get('https://restcountries.com/v3.1/all')
    .then(res => setCountries(res.data))  
  },[])
 
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route 
        path="/" 
        element={<SharedLayout 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        />} 
        >
          <Route index element={<Home    
          darkMode={darkMode}
          countries={countries}
          setCountries={setCountries}
          countriesInputRef={countriesInputRef}
          regionRef={regionRef}
          />}/>
          <Route 
          path="details/:countrydetails" 
          element={<DetailsPage
          darkMode={darkMode}
          />}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
