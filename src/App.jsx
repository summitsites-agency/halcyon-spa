import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Philosophy from './components/Philosophy.jsx';
import Treatments from './components/Treatments.jsx';
import Ritual from './components/Ritual.jsx';
import Practitioners from './components/Practitioners.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import CTABand from './components/CTABand.jsx';
import Booking from './components/Booking.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Treatments />
        <Ritual />
        <Practitioners />
        <Gallery />
        <Testimonials />
        <CTABand />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
