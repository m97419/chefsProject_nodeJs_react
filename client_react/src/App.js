import './App.css'
import 'primereact/resources/themes/saga-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './app/components/HomePage';
import Login from './app/components/auth/Login'
import Register from './app/components/auth/RegisterChef';
import MyAccount from './app/components/auth/MyAccount'
import Basket from './app/components/basket/Basket'
import Orders from './app/components/orders/Orders';
import Country from './app/components/countries/Country';
import CountryList from './app/components/countries/CountryList';
import NavBar from './app/components/navBar';
import Table from './app/components/products/Table'
import RegisterLogin from './app/components/auth/RegisterLogin';
import RegisterChef from './app/components/auth/RegisterChef';
import RegisterCustomer from './app/components/auth/RegisterCustomer';
import OrdersChef from './app/components/orders/OrdersChef'
import NewAuth from './app/components/auth/NewAuth'
import OrdersCustomer from './app/components/orders/OrdersCustomer'
import LoginCopy from './app/components/auth/Logincopy'


function App() {

  return (
    <div className="App">
      <NavBar></NavBar>
      {/* <Table/> */}
 
      <Routes>
      {/* <Route path="/auth" element={<RegisterLogin />}></Route> */}
      
      {/* <Route path="/auth" element={<NewAuth />}></Route> */}
            <Route path="/auth" element={<LoginCopy />}></Route>
      <Route path="/registerCustomer" element={<RegisterCustomer />}></Route>
        <Route path="/registerChef" element={<RegisterChef />}></Route>
        <Route path='/' element={<HomePage />}></Route>
        {/* <Route path="/login" element={<Login />}></Route> */}
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/myAccount" element={<MyAccount />}></Route>
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/orders" element={<OrdersChef/> }></Route>
        <Route path="/orderscustomer" element={<OrdersCustomer />}></Route>
        {/* <Route path="/country/:id" element={<Country />}></Route>
        <Route path="/countries" element={<CountryList />}></Route> */}
        <Route path="/table" element={<Table />}></Route>
           


        <Route path="/countries/" element={<CountryList />}>
          <Route path=":id" element={
          <Country />}/>
        </Route>
      </Routes> 

    </div>
  );
}

export default App;
//check