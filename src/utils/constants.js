// src/utils/constants.js

export const API_URL = 'http://localhost:5000/api';

// Product categories
export const CATEGORIES = [
  'Electronics',
  'Clothing',
  'Home & Kitchen',
  'Books',
  'Sports',
  'Beauty',
  'Toys',
  'Other'
];

// Payment methods
export const PAYMENT_METHODS = [
  'Credit Card',
  'PayPal',
  'Stripe',
  'Cash on Delivery'
];

// Shipping options
export const SHIPPING_OPTIONS = [
  { value: 'free', label: 'Free Shipping (5-7 days)', price: 0 },
  { value: 'standard', label: 'Standard (3-5 days)', price: 5.99 },
  { value: 'express', label: 'Express (1-2 days)', price: 12.99 }
];

// Tax rate (8%)
export const TAX_RATE = 0.08;