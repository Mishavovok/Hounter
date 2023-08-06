import './App.scss';
import Mail from './components/mail/Mail'
import Adviсe from './components/adviсe/Adviсe';
import Hero from './components/hero/Hero';
import HomeSearch from './components/homeSearch/HomeSearch';
import InfoHome from './components/infoHome/InfoHome';
import NavBar from './components/nav/NavBar';
import Reviews from './components/reviews/Reviews';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className='app'>
      <NavBar />
      <main>
        <Hero />
        <HomeSearch />
        <InfoHome />
        <Reviews />
        <Adviсe />
        <Mail />
        <Footer />
      </main>
    </div>
  );
}

export default App;
