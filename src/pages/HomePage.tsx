import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import NewCollection from '../components/NewCollection';
import Newsletter from '../components/Newsletter';
import type { Product } from '../types';

// Sample product data (will be replaced with Supabase data)
const sampleProducts: Product[] = [
    {
        id: '1',
        name: 'Brown Bomber',
        description: 'Premium leather bomber jacket with soft lining perfect for the spring season.',
        price: 125.00,
        original_price: 165.00,
        category: 'Jacket',
        image_url: '/images/product-bomber.png',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Brown', 'Black'],
        in_stock: true,
        featured: true,
        new_arrival: true,
        rating: 4.8,
        review_count: 124,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '2',
        name: 'Grey Tshirt',
        description: 'Minimalist oversized grey t-shirt made from premium organic cotton.',
        price: 45.00,
        category: 'T-Shirt',
        image_url: '/images/product-tshirt.png',
        sizes: ['S', 'M', 'L', 'XL', 'XXL'],
        colors: ['Grey', 'White', 'Black'],
        in_stock: true,
        featured: true,
        new_arrival: false,
        rating: 4.6,
        review_count: 89,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '3',
        name: 'Beige Trench',
        description: 'Classic beige trench coat with modern tailoring and water-resistant fabric.',
        price: 189.00,
        original_price: 240.00,
        category: 'Jacket',
        image_url: '/images/product-trench.png',
        sizes: ['S', 'M', 'L'],
        colors: ['Beige', 'Navy'],
        in_stock: true,
        featured: true,
        new_arrival: true,
        rating: 4.9,
        review_count: 67,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '4',
        name: 'White Sneakers',
        description: 'Clean-line minimalist white sneakers crafted from premium leather.',
        price: 95.00,
        category: 'Shoes',
        image_url: '/images/product-sneakers.png',
        sizes: ['38', '39', '40', '41', '42', '43', '44'],
        colors: ['White', 'Off-White'],
        in_stock: true,
        featured: true,
        new_arrival: false,
        rating: 4.7,
        review_count: 203,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '5',
        name: 'Premium Hoodie',
        description: 'Ultra-soft heavyweight hoodie with kangaroo pocket and brushed interior.',
        price: 78.00,
        category: 'Hoodies',
        image_url: '/images/product-hoodie.png',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Navy', 'Grey'],
        in_stock: true,
        featured: false,
        new_arrival: true,
        rating: 4.5,
        review_count: 156,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '6',
        name: 'Slim Denim',
        description: 'Premium slim-fit denim jeans with stretch comfort and modern wash.',
        price: 89.00,
        original_price: 120.00,
        category: 'Pants',
        image_url: '/images/product-denim.png',
        sizes: ['28', '30', '32', '34', '36'],
        colors: ['Dark Blue', 'Black'],
        in_stock: true,
        featured: false,
        new_arrival: false,
        rating: 4.4,
        review_count: 178,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '7',
        name: 'Navy Polo',
        description: 'Classic navy polo shirt with contrast collar piping and slim fit.',
        price: 55.00,
        category: 'T-Shirt',
        image_url: '/images/product-polo.png',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Navy', 'White', 'Green'],
        in_stock: true,
        featured: false,
        new_arrival: true,
        rating: 4.6,
        review_count: 92,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
    {
        id: '8',
        name: 'Bomber Classic',
        description: 'Nylon bomber jacket with ribbed cuffs, classic silhouette.',
        price: 135.00,
        category: 'Jacket',
        image_url: '/images/product-bomber.png',
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Black', 'Olive'],
        in_stock: true,
        featured: false,
        new_arrival: false,
        rating: 4.7,
        review_count: 145,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    },
];

const categories = ['All', 'T-Shirt', 'Jacket', 'Shoes', 'Hoodies', 'Pants'];

const HomePage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [filteredProducts, setFilteredProducts] = useState<Product[]>(sampleProducts);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (activeCategory === 'All') {
            setFilteredProducts(sampleProducts);
        } else {
            setFilteredProducts(sampleProducts.filter(p => p.category === activeCategory));
        }
    }, [activeCategory]);

    return (
        <main>
            {/* Hero Section */}
            <Hero />

            {/* Category + Products Section */}
            <section className="category-section" id="products-section">
                <div className="section-header">
                    <h2>Our Products</h2>
                    <a href="#" className="view-all" id="view-all-products">
                        View All
                        <ArrowRight size={16} />
                    </a>
                </div>

                <div className="category-tabs">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                            id={`category-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div
                    className="products-grid"
                    style={{
                        opacity: isVisible ? 1 : 0,
                        transition: 'opacity 0.5s ease',
                    }}
                >
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product.id}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </section>

            {/* New Collection Section */}
            <NewCollection />

            {/* Newsletter Section */}
            <Newsletter />
        </main>
    );
};

export default HomePage;
