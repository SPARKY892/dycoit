import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">                 
        <Header />     
        <HomePage />
        <Footer />
    </div>
  );
}

export default App;
