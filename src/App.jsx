import HScroll from './components/HScroll.jsx';
import Hero from './components/Hero.jsx';
import Sanctuary from './components/Sanctuary.jsx';
import Treatments from './components/Treatments.jsx';
import Ritual from './components/Ritual.jsx';
import Practitioners from './components/Practitioners.jsx';
import Gallery from './components/Gallery.jsx';
import Testimonials from './components/Testimonials.jsx';
import Booking from './components/Booking.jsx';

const LABELS = ['Home', 'Sanctuary', 'Treatments', 'Ritual', 'Team', 'Gallery', 'Voices', 'Book'];

export default function App() {
  return (
    <HScroll labels={LABELS}>
      <Hero />
      <Sanctuary />
      <Treatments />
      <Ritual />
      <Practitioners />
      <Gallery />
      <Testimonials />
      <Booking />
    </HScroll>
  );
}
