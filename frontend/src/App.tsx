import FloatingHearts from './components/FloatingHearts';
import MusicToggle from './components/MusicToggle';
import HeroSection from './components/HeroSection';
import OurJourneySection from './components/OurJourneySection';
import WhyYouAreSpecialSection from './components/WhyYouAreSpecialSection';
import SecretMessageSection from './components/SecretMessageSection';
import FinalProposalSection from './components/FinalProposalSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-romantic-gradient">
      {/* Global floating hearts layer */}
      <FloatingHearts />

      {/* Fixed music toggle */}
      <MusicToggle />

      {/* Page sections */}
      <main>
        <HeroSection />
        <OurJourneySection />
        <WhyYouAreSpecialSection />
        <SecretMessageSection />
        <FinalProposalSection />
      </main>

      <Footer />
    </div>
  );
}
