import './App.css';
import NOTInThirdState from './Components/NOTInThirdState';
import NumberOfTransaction from './Components/NumberOfTransaction';
import Table from './Components/Table';
import TotalAmount from './Components/TotalAmount';

function App() {
  return (
    <div className="App">
      <div className='Card-Components d-flex justify-content-around mt-5'>

      
      <NumberOfTransaction/>
      <TotalAmount/>
      <NOTInThirdState/>
      </div>
      <Table/>
    </div>
  );
}

export default App;
