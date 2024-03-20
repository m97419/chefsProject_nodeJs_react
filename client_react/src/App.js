import logo from './logo.svg';
import './App.css'
import Register from './app/components/auth/Register';
import CountryList from './app/components/countries/CountryList';
import List from './app/components/countries/List';
import {Route,Routes,Link,BrowserRouter} from 'react-router-dom';
import Country from './app/components/countries/Country';
import HomePage from './app/components/HomePage';
import { useParams } from "react-router-dom";
import Bssss from './app/components/countries/Bssss';
import 'primereact/resources/themes/saga-orange/theme.css'
import './assets/theme.css'

import FooterDemo from './app/components/countries/exp';

import New from './app/components/New';
import Nice from './app/components/Nice';


function App() {
  // localStorage.setItem("basket",JSON.stringify([]))
  return (
    <div className="App">
      {/* <Country/> */}
      {/* <Nice/> */}
<CountryList/>
{/* <Bssss/> */}

{/* <New/> */}
          <Routes> 
 <Route path='/' element={<HomePage/>}></Route> 
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
