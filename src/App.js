import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Card from './Components/Card';
import Updates from './Components/Updates';
import Footer from './Components/Footer';
import Find from './Components/Find';
import Features from './Components/Features';
function App() {
  return (
    <div className="App">
        <NavBar/>
        <Header/>
        <Section1/>
        <Section2/>
        <Find/>
        <Features />
        <Card/>
        <Updates/>
        <Footer/>
    </div>
  );
}

export default App;
