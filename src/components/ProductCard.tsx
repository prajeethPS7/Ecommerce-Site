import React, { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import type { Product } from '../types';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { addItem } = useCart();
    const [isWishlisted, setIsWishlisted] = useState(false);

    return (
        <div className="product-card" id={`product-card-${product.id}`}>
            <div className="product-card-image">
                <img
                    src={product.image_url}
                    alt={product.name}
                    loading="lazy"
                />
                {product.new_arrival && (
                    <span className="product-card-badge">New</span>
                )}
                {product.original_price && product.original_price > product.price && (
                    <span className="product-card-badge" style={{ backgroundColor: '#e74c3c' }}>
                        -{Math.round((1 - product.price / product.original_price) * 100)}%
                    </span>
                )}
                <button
                    className="product-card-wishlist"
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsWishlisted(!isWishlisted);
                    }}
                    aria-label="Add to wishlist"
                >
                    <Heart
                        size={16}
                        fill={isWishlisted ? '#e74c3c' : 'none'}
                        stroke={isWishlisted ? '#e74c3c' : 'currentColor'}
                    />
                </button>
            </div>
            <button
                className="product-card-quick-add"
                onClick={(e) => {
                    e.stopPropagation();
                    addItem(product);
                }}
            >
                <ShoppingBag size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
                Quick Add
            </button>
            <div className="product-card-info">
                <h3>{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <div className="product-price">
                    <span className="current">${product.price.toFixed(2)}</span>
                    {product.original_price && product.original_price > product.price && (
                        <span className="original">${product.original_price.toFixed(2)}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
