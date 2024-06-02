import './App.css'
import 'primereact/resources/themes/saga-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './app/components/HomePage';
import Login from './app/components/auth/Login'
import RegisterChef from './app/components/auth/RegisterChef';
import RegisterCustomer from './app/components/auth/RegisterCustomer';
import Basket from './app/components/basket/Basket'
import Orders from './app/components/orders/Orders';
import NavBar from './app/components/navBar';
import Table from './app/components/products/Table'
import OrdersChef from './app/components/orders/OrdersChef'
import OrdersCustomer from './app/components/orders/OrdersCustomer'
import ChooseChef from './app/components/chefs/ChooseChef'
import CountryNew from './app/components/countries/CountryNew'
import ChooseCountry from './app/components/countries/ChooseCountry'
import Animation from './app/components/Animation'


function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Animation />}></Route>
        <Route path='/auth' element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registerCustomer" element={<RegisterCustomer />}></Route>
        <Route path="/registerChef" element={<RegisterChef />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
        <Route path="/orderschef" element={<OrdersChef />}></Route>
        <Route path="/orderscustomer" element={<OrdersCustomer />}></Route>
        <Route path="/table" element={<Table />}></Route>
        <Route path="/chooseChef" element={<ChooseChef />}></Route>
        <Route path="/chooseCountry" element={<ChooseCountry />}></Route>
        <Route path="/countrynew/:str" element={<CountryNew />}></Route>
      </Routes>

    </div>
  );
}

export default App;
