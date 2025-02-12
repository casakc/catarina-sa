import logo from './VPA.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppMain from "./AppMain";
import AppFooter from "./AppFooter"


function App() {
  return (
    <div className="App">

      <div className="App-header">
        <img src={logo} className="App-logo" alt="Tranquil beach" title="Tranquil Beach" />
        <h1>
        Welcome to my site! My name is <a className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer">Catarina</a> and <br/>I am a Junior Front-End Developer based in Frankfurt, Germany
        </h1>
      </div>
      <AppMain />
      <AppFooter />
</div>
  );
}

export default App;
