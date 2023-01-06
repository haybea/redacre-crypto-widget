import logo from './logo.svg';
import Exchange from './components/Exchange';
import ExchangeList from './components/ExchangeList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App(props) {
  return (
    <div className="App">
      {props.type==='exchange'?
        <Exchange />
         :props.type==='exchange-list'?
         <ExchangeList />
         :null
       }
    </div>
  );
}

export default App;
