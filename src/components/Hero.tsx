import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="hero" id="hero-section">
            <div className="hero-image">
                <img
                    src="/images/hero-banner.png"
                    alt="Velvora Spring Collection - Two models in elegant spring attire"
                    loading="eager"
                />
            </div>
            <div className="hero-content animate-fade-in-up">
                <h1>Velvora Spring Collection</h1>
                <p>
                    Find out our best spring collection. Offering our best quality product
                    in a sporty and elegant way.
                </p>
                <Link to="/" className="btn-primary" id="hero-buy-now">
                    Buy Now
                    <ArrowRight size={18} />
                </Link>
            </div>
        </section>
    );
};

export default Hero;
