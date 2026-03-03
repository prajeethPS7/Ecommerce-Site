import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, X, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
    const { totalItems, setIsCartOpen } = useCart();
    const [searchOpen, setSearchOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Promo Banner */}
            <div className="promo-banner">
                Get <span>25% Off</span> on your first order! Use code: <span>VELVORA25</span>
                <a href="#shop">Shop Now</a>
            </div>

            {/* Main Navbar */}
            <header>
                <div className="navbar">
                    <div className="navbar-left">
                        <button
                            className="mobile-menu-btn"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            style={{
                                display: 'none',
                                width: 40,
                                height: 40,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                            id="mobile-menu-toggle"
                        >
                            <Menu size={22} />
                        </button>
                        <Link to="/" className="logo">Velvora</Link>
                        <nav>
                            <Link to="/" className="active">Men</Link>
                            <Link to="/">Woman</Link>
                            <Link to="/">Kids</Link>
                            <Link to="/">New & Featured</Link>
                            <Link to="/">Gift</Link>
                        </nav>
                    </div>
                    <div className="navbar-right">
                        <button onClick={() => setSearchOpen(true)} aria-label="Search" id="search-btn">
                            <Search size={20} />
                        </button>
                        <button
                            onClick={() => setIsCartOpen(true)}
                            aria-label="Shopping bag"
                            id="cart-btn"
                        >
                            <ShoppingBag size={20} />
                            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
                        </button>
                        <Link to="/" aria-label="User account" id="user-btn">
                            <User size={20} />
                        </Link>
                    </div>
                </div>
            </header>

            {/* Search Overlay */}
            <div className={`search-overlay ${searchOpen ? 'open' : ''}`}>
                <button className="search-overlay-close" onClick={() => setSearchOpen(false)} id="search-close">
                    <X size={24} />
                </button>
                <div className="search-overlay-content">
                    <input
                        type="text"
                        placeholder="Search for products..."
                        autoFocus={searchOpen}
                        id="search-input"
                    />
                </div>
            </div>

            {/* Mobile menu styles */}
            <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
};

export default Navbar;
