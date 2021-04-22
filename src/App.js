import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import MobileNav from './components/MobileNav';

const App = () => {
  return (
    <div className="App">                 
        <Header />    
        <MobileNav />    
    </div>
  );
}

export default App;
