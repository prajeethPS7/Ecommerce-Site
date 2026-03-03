import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const NewCollection: React.FC = () => {
    return (
        <section className="new-collection" id="new-collection">
            <div className="new-collection-grid">
                <div className="new-collection-image">
                    <img
                        src="/images/new-collection.png"
                        alt="Velvora New Collection - Model wearing latest trends"
                        loading="lazy"
                    />
                </div>
                <div className="new-collection-content">
                    <span className="collection-label">New Collection</span>
                    <h2>Giving The Best Fashion Since 2025</h2>
                    <p>
                        Discover our latest collection that blends timeless elegance with modern
                        streetwear influences. Each piece is designed to empower your personal style
                        with premium quality fabrics and meticulous craftsmanship.
                    </p>
                    <Link to="/" className="btn-primary btn-dark" id="explore-collection">
                        Explore Collection
                        <ArrowRight size={18} />
                    </Link>
                    <div className="scroll-indicator">
                        <div className="line" />
                        <div className="line-muted" />
                        <span>01 / 03</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewCollection;
