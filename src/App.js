import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './Component/Topbar';
import Hero from './Component/Hero';
import CardSection from './Component/CardSection';
import About from './Component/About';
import Progressbar from './Component/Progressbar';
import Service from './Component/Services';

function App() {
  return (
    <div className="main-div">
      <Topbar />
      <Header />
      <Hero />
      <CardSection />
      <About />
      <Progressbar />
      <Service />
    </div>
  );
}

export default App;
