// Product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'hoodie' | 'accessory';
  slug: string;
  description?: string;
  sizes?: string[];
}

// Cart item interface
export interface CartItem extends Product {
  quantity: number;
  selectedSize?: string;
}

// User interface
export interface User {
  id: number;
  email: string;
  name?: string;
}

// Navigation link interface
export interface NavLink {
  id: number;
  name: string;
  path: string;
  isActive?: boolean;
}

// API response interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Newsletter subscription interface
export interface NewsletterSubscription {
  email: string;
  subscribed: boolean;
  subscriptionDate?: Date;
}

// Product filter interface
export interface ProductFilter {
  category?: 'hoodie' | 'accessory' | 'all';
  priceRange?: {
    min: number;
    max: number;
  };
  searchTerm?: string;
}

// Cart context interface
export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number, size?: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

// Auth context interface
export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (email: string, password: string, name?: string) => Promise<boolean>;
  logout: () => void;
}

// Component prop interfaces
export interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
}

export interface NavbarProps {
  isAuthenticated?: boolean;
  cartItemCount?: number;
}

export interface FooterProps {
  showNewsletter?: boolean;
}

export interface BannerProps {
  title: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
  className?: string;
}

// Form interfaces
export interface LoginFormData {
  email: string;
  password: string;
}

export interface SignupFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscribeNewsletter: boolean;
}

export interface NewsletterFormData {
  email: string;
}

// Error interface
export interface FormError {
  field: string;
  message: string;
}

// Constants
export const PRODUCT_CATEGORIES = {
  ALL: 'all',
  HOODIE: 'hoodie',
  ACCESSORY: 'accessory'
} as const;

export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  PRODUCT_DETAIL: '/product/:id',
  CART: '/cart',
  BLOG: '/blog',
  LOGIN: '/login',
  SIGNUP: '/signup'
} as const;

export const CURRENCY = '₹';
export const ITEMS_PER_PAGE = 12;
