import './App.css'
import 'primereact/resources/themes/saga-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'
import {Route,Routes, useNavigate} from 'react-router-dom';
import HomePage from './app/components/HomePage';
import Login from './app/components/auth/Login'
import Register from './app/components/auth/RegisterChef';
import MyAccount from './app/components/auth/MyAccount'
import Basket from './app/components/basket/Basket'
import Orders from './app/components/orders/Orders';
import Country from './app/components/countries/Country';
import CountryList from './app/components/countries/CountryList';
import NavBar from './app/components/navBar';


function App() {

  return (
    <div className="App">
      <NavBar/>
   
      <Routes> 
          <Route path='/' element={<HomePage/>}></Route> 
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/myAccount" element={<MyAccount/>}></Route>
          <Route path="/basket" element={<Basket/>}></Route>
          <Route path="/orders" element={<Orders/>}></Route>
          <Route path="/country/:id" element={<Country />}></Route>
          <Route path="/countries" element={<CountryList/>}></Route>
        </Routes>

    </div>   
  );
}

export default App;
//check