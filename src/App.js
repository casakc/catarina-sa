import logo from './VPA.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppMain from "./AppMain";
import AppFooter from "./AppFooter";
import cv from './assets/CV.pdf';


function App() {
  return (
    <div className="container App">
<div className="App-header">
        <img src={logo} className="App-logo" alt="Tranquil beach" title="Tranquil Beach" />
        <h1>
        My name is <a className="App-link"
          href={cv}
          target="_blank"
          rel="noopener noreferrer" title="Please click to view my CV and my Junior Front-End Developer diploma">Catarina</a>, welcome to my site!<br/>I am a Junior Front-End Developer based in the EU
        </h1>
      </div>
      <AppMain />
      <AppFooter />

</div>
  );
}

export default App;






