import './App.css';
import { useEffect, useMemo } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import AboutUs from './pages/AboutUs';
import Design from './pages/Design';
import ContactUs from './pages/ContactUs';
import Areas from './pages/Areas';
import Compounds from './pages/Compounds';
import Developers from './pages/Developers';
import Blogs from './pages/Blogs';
import NewProjects from './pages/NewProjects';
import IncomeProperty from './pages/IncomeProperty';
import Favorites from './pages/Favorites';
import Terms from './pages/Terms';
import HowItWorks from './pages/HowItWorks';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import SellPage from './pages/SellPage';
import Compound from './pages/Compound';
import Property from './pages/Property';
import Developer from './pages/Developer';
import Area from './pages/Area';
import Blog from './pages/Blog';
import Country from './pages/Country';
import PropeType from './pages/PropeType';
import SearchPage from './pages/SearchPage';
import PropertyInArea from './pages/PropertyInArea';
import AllLaunchingSoon from './pages/AllLaunchingSoon';
import Trending from './pages/Trending';

const languages = [
  {
    code: 'ar',
    name: 'Ar',
    country_coode: 'sa',
    dir: 'rtl'
  },
  {
    code: 'en',
    name: 'En',
    country_coode: 'gb',
    dir: 'ltr'
  }
]
function App() {
  
  function onCopyHandler(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  const currentLanguageCode = Cookies.get('i18next') || 'ar';
  const currentLanguage = useMemo(() => languages.find(l => l.code === currentLanguageCode), [currentLanguageCode])
  const { t } = useTranslation();

  useEffect(() => {
    document.dir = currentLanguage.dir || 'rtl';
    document.getElementsByTagName('html')[0].setAttribute('lang', currentLanguage.code || 'ar');

  }, [currentLanguage, t]);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <div className="App" onCopy={onCopyHandler}>
      <CssBaseline />
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/areas" element={<Areas />} />
        <Route path="/area/:id" element={<Area />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/developer/:id" element={<Developer />} />
        <Route path="/compounds" element={<Compounds />} />
        <Route path="/compound/:id" element={<Compound />} />
        <Route path="/country/:id" element={<Country />} />
        <Route path="/Properties" element={<NewProjects />} />
        <Route path="/launching-soon" element={<AllLaunchingSoon />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/property-type/:id" element={<PropeType />} />
        <Route path="/income-property" element={<IncomeProperty />} />
        <Route path="/property/:id" element={<Property />} />
        <Route path="/property-in-area/:id" element={<PropertyInArea />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blog/:id" element={<Blog />} />
        <Route path="/design" element={<Design />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/auth/login" element={<LogInPage />} />
        <Route path="/auth/sign-up" element={<SignUpPage />} />
        <Route path="/auth/sell" element={<SellPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
