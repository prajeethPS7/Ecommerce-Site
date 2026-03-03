export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  original_price?: number;
  category: string;
  subcategory?: string;
  image_url: string;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  in_stock: boolean;
  featured: boolean;
  new_arrival: boolean;
  rating?: number;
  review_count?: number;
  created_at: string;
  updated_at: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image_url?: string;
  product_count?: number;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface Order {
  id: string;
  user_id: string;
  items: OrderItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  shipping_address: Address;
  created_at: string;
  updated_at: string;
}

export interface OrderItem {
  product_id: string;
  product_name: string;
  quantity: number;
  price: number;
  size?: string;
  color?: string;
}

export interface Address {
  full_name: string;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  country: string;
  phone?: string;
}

export interface NewsletterSubscription {
  id: string;
  email: string;
  subscribed_at: string;
}
