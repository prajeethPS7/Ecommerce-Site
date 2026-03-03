import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartDrawer: React.FC = () => {
    const { items, removeItem, updateQuantity, totalPrice, isCartOpen, setIsCartOpen } = useCart();

    return (
        <>
            <div
                className={`cart-overlay ${isCartOpen ? 'open' : ''}`}
                onClick={() => setIsCartOpen(false)}
            />
            <div className={`cart-drawer ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-drawer-header">
                    <h3>Shopping Bag ({items.length})</h3>
                    <button
                        className="cart-drawer-close"
                        onClick={() => setIsCartOpen(false)}
                        id="cart-drawer-close"
                    >
                        <X size={20} />
                    </button>
                </div>

                {items.length === 0 ? (
                    <div className="cart-drawer-empty">
                        <ShoppingBag size={48} strokeWidth={1} color="#ccc" />
                        <p>Your bag is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-drawer-items">
                            {items.map(item => (
                                <div key={item.id} className="cart-item">
                                    <div className="cart-item-image">
                                        <img src={item.product.image_url} alt={item.product.name} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h4>{item.product.name}</h4>
                                        <p className="cart-item-meta">
                                            {item.size && `Size: ${item.size}`}
                                            {item.size && item.color && ' · '}
                                            {item.color && `Color: ${item.color}`}
                                        </p>
                                        <div className="cart-item-actions">
                                            <div className="quantity-control">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                                    <Minus size={14} />
                                                </button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                            <span className="cart-item-price">
                                                ${(item.product.price * item.quantity).toFixed(2)}
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        style={{
                                            position: 'absolute',
                                            right: 0,
                                            top: 0,
                                            padding: 4,
                                            opacity: 0.4,
                                        }}
                                        aria-label="Remove item"
                                    >
                                        <X size={14} />
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="cart-drawer-footer">
                            <div className="cart-drawer-total">
                                <span>Total</span>
                                <span>${totalPrice.toFixed(2)}</span>
                            </div>
                            <button className="btn-primary btn-dark" id="checkout-btn">
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
