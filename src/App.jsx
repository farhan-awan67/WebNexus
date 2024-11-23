import Footer from './components/Footer';
import Header from './components/Header';
import HeroSec from './components/HeroSec';
import Line from './components/Line';
import Line2 from './components/Line2';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import './index.css'

function App() {

  return <div className="bg-[#1E1E1E] w-full min-h-screen px-5 sm:px-6">
   <Header/>
   <HeroSec/>
   <Line/>
   <Services/>
   <Line2/>
   <Testimonial/>
   <Footer/>
  </div>;
}

export default App;
