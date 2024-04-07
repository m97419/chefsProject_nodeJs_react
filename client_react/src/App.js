import logo from './logo.svg';
import './App.css'

import CountryList from './app/components/countries/CountryList';
import List from './app/components/countries/List';
import {Route,Routes,Link,BrowserRouter} from 'react-router-dom';
import Country from './app/components/countries/Country';
import HomePage from './app/components/HomePage';
import { useParams } from "react-router-dom";
import Bssss from './app/components/countries/Bssss';
import 'primereact/resources/themes/saga-orange/theme.css'
import './assets/theme.css'
import Table from './app/components/products/Table';
import FooterDemo from './app/components/countries/FooterDemo';
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"

import Login from './app/components/auth/Login';
import RegisterChef from './app/components/auth/RegisterChef';
import RegisterCustomer from './app/components/auth/RegisterCustomer';
import RegisterLogin from './app/components/auth/RegisterLogin';
import AddCategory from './app/components/categories/AddCategory';
import { OrderList } from 'primereact/orderlist';
import OrdersChef from './app/components/orders/OrdersChef'


function App() {
  // localStorage.setItem("basket",JSON.stringify([]))
  return (
    <div className="App">
     <OrdersChef/>
      {/* <Gg/> */}
      {/* <Country/> */}
      {/* <Nice/> */}
   {/* <AddCategory/> */}
     <Table/>
      <CountryList/>
      {/* <Register/> */}
      {/* <FooterDemo/> */}

{/* <Bssss/> */}
{/* <FormikDoc/> */}
{/* <New/> */}
          <Routes> 
 <Route path='/' element={<HomePage/>}></Route> 
 <Route path="/registerLogin" element={<RegisterLogin/>}></Route>
 <Route path="/registerChef" element={<RegisterChef/>}></Route>
 <Route path="/registerCustomer" element={<RegisterCustomer/>}></Route>
 <Route path="/login"  element={<Login/>}></Route>
 <Route path="/country/:id" element={<Country />}></Route>
 <Route path="/countries" element={<CountryList/>}></Route>
 </Routes>
 <Link to="/country/1"></Link>
 <Link to="/countries"></Link>

 

      {/* <List></List> */}
      {/* <BasicDemo></BasicDemo> */}
      {/* <Register/> */}
   {/* <FooterDemo/> */}
    </div>   
  );
}

export default App;
