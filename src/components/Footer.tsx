import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="logo">Velvora</Link>
                        <p>
                            Premium fashion for the modern individual. We curate pieces that blend
                            quality craftsmanship with contemporary design.
                        </p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram" id="social-instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="#" aria-label="Facebook" id="social-facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="#" aria-label="Twitter" id="social-twitter">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-column">
                        <h4>Product</h4>
                        <ul>
                            <li><Link to="/">T-Shirt</Link></li>
                            <li><Link to="/">Jacket</Link></li>
                            <li><Link to="/">Shoes</Link></li>
                            <li><Link to="/">Pants</Link></li>
                            <li><Link to="/">Accessories</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Categories</h4>
                        <ul>
                            <li><Link to="/">Man</Link></li>
                            <li><Link to="/">Woman</Link></li>
                            <li><Link to="/">Kids</Link></li>
                            <li><Link to="/">Gift</Link></li>
                            <li><Link to="/">New & Featured</Link></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/">About Us</Link></li>
                            <li><Link to="/">Contact</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Help Center</Link></li>
                            <li><Link to="/">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2025 Velvora. All rights reserved.</p>
                    <div className="footer-bottom-links">
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Cookie Policy</Link>
                        <Link to="/">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
