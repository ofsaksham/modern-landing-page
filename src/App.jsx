import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureHighlights from './components/FeatureHighlights';
import About from './components/About';
import Partners from './components/Partners';
import Services from './components/Services';
import MonitorInnovation from './components/MonitorInnovation';
import WorkingProcess from './components/WorkingProcess';
import Review from './components/Review';
import SolutionsHero from './components/SolutionsHero';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <FeatureHighlights />
      <About />
      <Partners />
      <Services />
      <MonitorInnovation />
      <WorkingProcess />
      <Review />
      <SolutionsHero />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
