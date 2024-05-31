import './App.css'
import 'primereact/resources/themes/saga-orange/theme.css'
import "primereact/resources/primereact.min.css"
import "primeicons/primeicons.css"
import "primeflex/primeflex.css"
import './assets/theme.css'
import { Route, Routes, useNavigate } from 'react-router-dom';
import HomePage from './app/components/HomePage';
import Basket from './app/components/basket/Basket'
import Orders from './app/components/orders/Orders';
import Country from './app/components/countries/Country';
import CountryList from './app/components/countries/CountryList';
import NavBar from './app/components/navBar';
import Table from './app/components/products/Table'
// import RegisterLogin from './app/components/auth/Auth/RegisterLogin';
import OrdersChef from './app/components/orders/OrdersChef'
// import NewAuth from './app/components/auth/Auth/NewAuth'
import OrdersCustomer from './app/components/orders/OrdersCustomer'
// import LoginCopy from './app/components/auth/Auth/Logincopy'
import ChooseChef from './app/components/chefs/ChooseChef'
import CountryNew from './app/components/countries/CountryNew'
import ChooseCountry from './app/components/countries/ChooseCountry'
import ValidationDemo from './app/components/ValidationDemo'
import { ReactFinalFormDemo } from './app/components/auth/Register'
import Home from './app/components/auth/RegisterCustomer'
import HomeChef from './app/components/auth/RegisterChef'
import TemplateDemo from './app/components/auth/Auth/UploadPictures'
import Images from './app/components/Images'
import XXX from './app/components/XXX'
import RegisterChef from './app/components/auth/RegisterChef'
import RegisterCustomer from './app/components/auth/RegisterCustomer'
import Login from './app/components/auth/Login'
import LoginDesign from './app/components/auth/LoginDesign'
import Animation from './app/components/Animation'

// import Register  from './app/components/auth/Register'

function App() {

  return (
    <div className="App">
      {/* <ReactFinalFormDemo></ReactFinalFormDemo> */}
      {/* <TemplateDemo></TemplateDemo> */}
      {/* <HomeChef></HomeChef> */}
      
      {/* Animation */}
      <NavBar></NavBar>
      {/* <Animation></Animation> */}
      {/* <XXX></XXX> */}
      {/* <Images></Images> */}
      {/* <Table/> */}
 {/* <ChooseChef></ChooseChef> */}
      <Routes>
      {/* <Route path="/auth" element={<RegisterLogin />}></Route> */}
      
      {/* <Route path="/auth" element={<NewAuth />}></Route> */}
      <Route path='/' element={<Animation />}></Route>
            {/* <Route path="/auth" element={<LoginCopy />}></Route> */}
            <Route path='/auth' element={<HomePage />}></Route>
            {/* <Route path="/auth" element={<HomePage />}></Route> */}
      <Route path="/registerCustomer" element={<RegisterCustomer />}></Route>
        <Route path="/registerChef" element={<RegisterChef />}></Route>
        <Route path="/login" element={<LoginDesign />}></Route>
       
        {/* <Route path="/login" element={<Login />}></Route> */}
        {/* <Route path="/register" element={<Register />}></Route> */}
        {/* <Route path="/myAccount" element={<MyAccount />}></Route> */}
        <Route path="/basket" element={<Basket />}></Route>
        <Route path="/orders" element={<Orders/> }></Route>
        <Route path="/orderschef" element={<OrdersChef />}></Route>
        <Route path="/orderscustomer" element={<OrdersCustomer />}></Route>
        {/* <Route path="/country/:id" element={<Country />}></Route>
        <Route path="/countries" element={<CountryList />}></Route> */}
        <Route path="/table" element={<Table />}></Route>
        <Route path="/chooseChef" element={<ChooseChef/>}></Route>
        <Route path="/chooseCountry" element={<ChooseCountry/>}></Route>
           
        <Route path="/countrynew/:str" element={<CountryNew />}></Route>


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