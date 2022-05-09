import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavigationBar';
import HomePage from './HomePage';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
