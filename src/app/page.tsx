import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import WorkSection from '@/components/WorkSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
