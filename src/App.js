import './App.css';
import {Route,Routes} from 'react-router-dom'
import HomePage from './Pages/HomePage';
import TransactionDetails from './Pages/TransactionDetails';
import Data from './Data';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage Data={Data}/>}/>
      <Route path="/transaction-detail/:id" element={<TransactionDetails Data={Data}/>}/>
    </Routes>
    
  );
}

export default App;
