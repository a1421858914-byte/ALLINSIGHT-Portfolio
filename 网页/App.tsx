import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="bg-midnight min-h-screen text-white selection:bg-purple-500 selection:text-white">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <About />
      <ContactForm />
      <Footer />
    </main>
  );
};

export default App;