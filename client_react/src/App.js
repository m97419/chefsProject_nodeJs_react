import logo from './logo.svg';
import './App.css'
import 'primereact/resources/themes/saga-orange/theme.css'
import './assets/theme.css'
import {Route,Routes} from 'react-router-dom';
import HomePage from './app/components/HomePage';
import Login from './app/components/auth/Login'
import Register from './app/components/auth/Register';
import MyAccount from './app/components/auth/MyAccount'
import Basket from './app/components/Basket'
import Orders from './app/components/orders/Orders';
import Country from './app/components/countries/Country';
import CountryList from './app/components/countries/CountryList';
import NavBar from './navBar';
// import FooterDemo from './app/components/countries/exp';
// import New from './app/components/New';
// import Nice from './app/components/Nice';
// import Bssss from './app/components/countries/Bssss';

function App() {

  return (
    <div className="App">

      <NavBar/>
      {/* <Country/> */}
      {/* <Nice/> */}
      {/* <Bssss/> */}
      {/* <New/> */}

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

      {/* <List></List> */}
      {/* <BasicDemo></BasicDemo> */}
      {/* <Register/> */}
      {/* <FooterDemo/> */}

    </div>   
  );
}

export default App;
//check