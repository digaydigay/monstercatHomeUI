import './styles/App.scss';


// compnents
import Header from "./components/Header"
import Banner from "./components/Banner"
import Hero from "./components/Hero"
import NewReleases from './components/NewReleases';
import BannerBottom from './components/BannerBottom';
import FeaturedAparel from "./components/FeaturedApparel"
import WeeklyRadioShow from "./components/WeeklyRadioShows"
import ListenShopify from "./components/ListenShopify"
import Footer from "./components/footer"
import ToogleNav from "./components/ToogleNav"
function App() {
  return (
    <div className="App">
      <Header />
      <ToogleNav />
      <Banner />
      <Hero />
      <NewReleases />
      <BannerBottom />
      <FeaturedAparel />
      <WeeklyRadioShow />
      <ListenShopify />
      <Footer />
    </div>
  );
}

export default App;
