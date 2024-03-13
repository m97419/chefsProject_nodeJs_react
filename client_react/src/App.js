import logo from './logo.svg';
import './App.css'
import Register from './app/components/auth/Register';
import CountryList from './app/components/countries/CountryList';
import List from './app/components/countries/List';
import BasicDemo from './app/components/countries/BasicDemo';

function App() {
  return (
    <div className="App">
      {/* <List></List> */}
      <BasicDemo></BasicDemo>
      {/* <Register/> */}
      {/* <CountryList/> */}
    </div>
  );
}

export default App;
//check