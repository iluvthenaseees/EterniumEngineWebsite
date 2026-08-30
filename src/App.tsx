import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Features from '@/components/Features';
import Modules from '@/components/Modules';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import SideNav from '@/components/SideNav';
import { useScrollReveal } from '@/hooks/useScroll';

export default function App() {
  const rootRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={rootRef} className="relative min-h-screen bg-base">
      <Header />
      <SideNav />
      <main>
        <Hero />
        <Advantages />
        <Features />
        <Modules />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
