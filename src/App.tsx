import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import CartDrawer from './components/CartDrawer';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="app">
          <Navbar />
          <HomePage />
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
