
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import {useState} from 'react'
import Request from './components/request';

function App() {
  const [selectedOption, setSelectedOption] = useState(Request.fetchTrending)

  return (
    <div className="App">
       <Header />

       <Nav setSelectedOption={setSelectedOption} />

       <Results selectedOption={selectedOption} />
    </div>
  );
}

export default App;


//