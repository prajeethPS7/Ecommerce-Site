import React, { createContext, useContext, useState, useCallback } from 'react';
import type { CartItem, Product } from '../types';

interface CartContextType {
    items: CartItem[];
    addItem: (product: Product, quantity?: number, size?: string, color?: string) => void;
    removeItem: (id: string) => void;
    updateQuantity: (id: string, quantity: number) => void;
    clearCart: () => void;
    totalItems: number;
    totalPrice: number;
    isCartOpen: boolean;
    setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const addItem = useCallback((product: Product, quantity = 1, size?: string, color?: string) => {
        setItems(prev => {
            const existingIndex = prev.findIndex(
                item => item.product.id === product.id && item.size === size && item.color === color
            );
            if (existingIndex > -1) {
                const updated = [...prev];
                updated[existingIndex] = {
                    ...updated[existingIndex],
                    quantity: updated[existingIndex].quantity + quantity,
                };
                return updated;
            }
            return [...prev, { id: `${product.id}-${size}-${color}-${Date.now()}`, product, quantity, size, color }];
        });
        setIsCartOpen(true);
    }, []);

    const removeItem = useCallback((id: string) => {
        setItems(prev => prev.filter(item => item.id !== id));
    }, []);

    const updateQuantity = useCallback((id: string, quantity: number) => {
        if (quantity <= 0) {
            setItems(prev => prev.filter(item => item.id !== id));
            return;
        }
        setItems(prev => prev.map(item => item.id === id ? { ...item, quantity } : item));
    }, []);

    const clearCart = useCallback(() => setItems([]), []);

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{
            items, addItem, removeItem, updateQuantity, clearCart,
            totalItems, totalPrice, isCartOpen, setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) throw new Error('useCart must be used within a CartProvider');
    return context;
};
