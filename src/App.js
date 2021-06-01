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
import Testimonial from './Component/Testimonial';
import Portfolio from './Component/Portfolio';
import Team from './Component/Team';
import Pricing from './Component/Pricing';
import Faq from './Component/Faq';

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
      <Testimonial />
      <Portfolio />
      <Team />
      <Pricing />
      <Faq />
    </div>
  );
}

export default App;
