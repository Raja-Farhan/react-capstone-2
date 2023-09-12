import './App.css';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import HeroSection from './components/HeroSection/HeroSection';
import JoinNow from './components/JoinNow/JoinNow';
import NavBar from './components/NavBar/NavBar';
import OutComes from './components/OutComes/OutComes';
import PopularCourses from './components/PopularCourses/PopularCourses';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
        <NavBar />
        <HeroSection />
        <PopularCourses /> 
        <Reviews />
        <OutComes />
        <JoinNow />
        <Blog />
        <Footer/>
    </div>
  );
}

export default App;
