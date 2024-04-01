import './App.css'
import Register from './app/components/auth/Register';
import CountryList from './app/components/countries/CountryList';
import {Route,Routes, useNavigate} from 'react-router-dom';
import Country from './app/components/countries/Country';
import HomePage from './app/components/HomePage';
import 'primereact/resources/themes/vela-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'
import Basket from './app/components/basket/Basket';
import { Button } from 'primereact/button';


function App() {
  
  {/* in nav bar... */}
  const navigate = useNavigate()
  const func =  ()=>{
    navigate("/basket")
  }

  return (
    <div className="App">
      <CountryList/>
      {/* in nav bar... */}
      <Button onClick={func}>basket (template)</Button>
      <Routes> 
        <Route path='/' element={<HomePage/>}></Route> 
        <Route path="/country/:id" element={<Country />}></Route>
        <Route path="/countries" element={<CountryList/>}></Route>
        <Route path="/basket" element={<Basket/>}></Route>
      </Routes>
    </div>   
  );
}

export default App;
//check