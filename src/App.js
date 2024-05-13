import logo from './logo.svg';
import './App.css';
import Button from"react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      
    </div>
  );
}

export default App;
