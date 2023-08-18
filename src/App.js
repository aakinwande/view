import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/js/bootstrap";
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyNavbar from '../src/components/navbar/MyNavbar'
import Footer from './components/footer/Footer';
import Services from '../src/components/services/Services'
import Blog from '../src/components/blog/Blog'
import ContactUs from '../src/components/contact/ContactUs'
import Ghostwriting from '../src/components/ghostwriting/Ghostwriting'
import BusinessBooks from '../src/components/ghostwriting/BusinessBooks'
import MemoirAutoBiography from '../src/components/ghostwriting/MemoirAutoBiography'
import GeneralNonFiction from '../src/components/ghostwriting/GeneralNonFiction'
import SelfHelp from '../src/components/ghostwriting/SelfHelp'
import Fiction from '../src/components/ghostwriting/Fiction'
import Children from '../src/components/ghostwriting/Children'
import SocialMedia from './components/copywriting/SocialMedia'
import Speeches from '../src/components/ghostwriting/Speeches'
import Copywriting from '../src/components/copywriting/Copywriting'
import SalesFunnel from './components/marketing/SalesFunnel'
import EmailOutreach from './components/copywriting/EmailOutreach'
import ThoughtLeadership from './components/ghostwriting/ThoughtLeadership'
import SalesCall from './components/marketing/SalesCall'
import WebsiteContent from '../src/components/copywriting/WebsiteContent'
import Marketing from '../src/components/marketing/Marketing'
import BrandContent from '../src/components/marketing/BrandContent'
import PersonalPublicImage from '../src/components/marketing/PersonalPublicImage'
import VideoContentEditing from '../src/components/marketing/VideoContentEditing'
import AuthorityBuilding from '../src/components/marketing/AuthorityBuilding'
import Consultation from '../src/components/marketing/Consultation'
import BlogContent from '../src/components/ghostwriting/BlogContent'

function App() {
  return (
    <Router>
    <MyNavbar />
    <Routes>
      <Route path='/' exact element={<Home />} />
      <Route path='/services' element={<Services/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact-us' element={<ContactUs/>} />
      <Route path='/ghostwriting' element={<Ghostwriting/>} />
      <Route path='/business-books' element={<BusinessBooks/>} />
      <Route path='/memoir-autobiography' element={<MemoirAutoBiography/>} />
      <Route path='/blog-content' element={<BlogContent/>} />
      <Route path='/general-nonfiction' element={<GeneralNonFiction/>} />
      <Route path='/self-help' element={<SelfHelp/>} />
      <Route path='/fiction' element={<Fiction/>} />
      <Route path='/childrens' element={<Children/>} />
      <Route path='/social-media' element={<SocialMedia/>} />
      <Route path='/speeches' element={<Speeches/>} />
      <Route path='/copywriting' element={<Copywriting/>} />
      <Route path='/sales-funnel-scripts' element={<SalesFunnel/>} />
      <Route path='/email-outreach' element={<EmailOutreach/>} />
      <Route path='/thought-leadership-articles' element={<ThoughtLeadership/>} />
      <Route path='/sales-call-scripts' element={<SalesCall/>} />
      <Route path='/website-content' element={<WebsiteContent/>} />
      <Route path='/marketing' element={<Marketing/>} />
      <Route path='/brand-content-strategy' element={<BrandContent/>} />
      <Route path='/personality-public-image' element={<PersonalPublicImage/>} />
      <Route path='/video-content-editing' element={<VideoContentEditing/>} />
      <Route path='/authority-building' element={< AuthorityBuilding />} />
      <Route path='/consultation' element={<Consultation/>} />
      {/* <Route path='/allcategories' element={<AllCategoriesBlogPage/>} /> */}
    </Routes>
    <Footer />
  </Router>
     
   
  );
}

export default App;
