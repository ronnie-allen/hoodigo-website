import { Product } from '../types';

// Utility function to generate slugs
const generateSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters except spaces and hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim();
};

// Sample product data based on the original website
export const products: Product[] = [
  // Hoodies
  {
    id: 1,
    name: "Shining Golden Premium Hoodie",
    price: 1999,
    image: "/images/image_part_001.png",
    category: 'hoodie',
    slug: generateSlug("Shining Golden Premium Hoodie"),
    description: "Premium quality golden hoodie with exceptional comfort and style.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 2,
    name: "Milky White Premium Hoodie",
    price: 1999,
    image: "/images/image_part_002.png",
    category: 'hoodie',
    slug: generateSlug("Milky White Premium Hoodie"),
    description: "Clean and elegant white hoodie perfect for any occasion.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 3,
    name: "Tricolour Striped Classic Hoodie",
    price: 1999,
    image: "/images/image_part_003.png",
    category: 'hoodie',
    slug: generateSlug("Tricolour Striped Classic Hoodie"),
    description: "Classic striped design with premium comfort and durability.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 4,
    name: "Darky Moon Premium Hoodie",
    price: 1999,
    image: "/images/image_part_004.png",
    category: 'hoodie',
    slug: generateSlug("Darky Moon Premium Hoodie"),
    description: "Mysterious dark design for those who love to stand out.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 5,
    name: "Baby Pink Premium Hoodie",
    price: 1999,
    image: "/images/image_part_005.png",
    category: 'hoodie',
    slug: generateSlug("Baby Pink Premium Hoodie"),
    description: "Soft baby pink hoodie with premium fabric and comfort.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 6,
    name: "Moody Grey Premium Hoodie",
    price: 1999,
    image: "/images/image_part_006.png",
    category: 'hoodie',
    slug: generateSlug("Moody Grey Premium Hoodie"),
    description: "Sophisticated grey hoodie for a modern, moody look.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 7,
    name: "Multitone Classic Hoodie",
    price: 1999,
    image: "/images/image_part_007.png",
    category: 'hoodie',
    slug: generateSlug("Multitone Classic Hoodie"),
    description: "Multi-colored classic design that goes with everything.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 8,
    name: "Dark Knight Premium Hoodie",
    price: 1999,
    image: "/images/image_part_008.png",
    category: 'hoodie',
    slug: generateSlug("Dark Knight Premium Hoodie"),
    description: "Bold and dark design for the confident wearer.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 9,
    name: "Pure Black Premium Hoodie",
    price: 1999,
    image: "/images/image_part_009.png",
    category: 'hoodie',
    slug: generateSlug("Pure Black Premium Hoodie"),
    description: "Timeless black hoodie that never goes out of style.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 10,
    name: "Skyish Blue Premium Hoodie",
    price: 1999,
    image: "/images/image_part_010.png",
    category: 'hoodie',
    slug: generateSlug("Skyish Blue Premium Hoodie"),
    description: "Calming sky blue color with premium comfort features.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 11,
    name: "Baby Pink Premium Hoodie",
    price: 1999,
    image: "/images/image_part_011.png",
    category: 'hoodie',
    slug: generateSlug("Baby Pink Premium Hoodie"),
    description: "Another beautiful pink variant for our collection.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 12,
    name: "Silky Orange Premium Hoodie",
    price: 1999,
    image: "/images/image_part_012.png",
    category: 'hoodie',
    slug: generateSlug("Silky Orange Premium Hoodie"),
    description: "Vibrant orange hoodie with silky smooth fabric.",
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },

  // Accessories
  {
    id: 13,
    name: "Men Panelled Denim Cap",
    price: 699,
    image: "/images/a1.jpg",
    category: 'accessory',
    slug: generateSlug("Men Panelled Denim Cap"),
    description: "Stylish denim cap with panelled design for men.",
    sizes: ['One Size']
  },
  {
    id: 14,
    name: "Twisted Chain Silver Bracelet",
    price: 299,
    image: "/images/a2.jpg",
    category: 'accessory',
    slug: generateSlug("Twisted Chain Silver Bracelet"),
    description: "Elegant silver bracelet with twisted chain design.",
    sizes: ['One Size']
  },
  {
    id: 15,
    name: "Dark Shade Sunglasses",
    price: 599,
    image: "/images/a3.jpg",
    category: 'accessory',
    slug: generateSlug("Dark Shade Sunglasses"),
    description: "Stylish sunglasses with dark shade lenses.",
    sizes: ['One Size']
  },
  {
    id: 16,
    name: "Premium Black Man Purse",
    price: 699,
    image: "/images/a4.jpg",
    category: 'accessory',
    slug: generateSlug("Premium Black Man Purse"),
    description: "Premium quality black purse for men.",
    sizes: ['One Size']
  },
  {
    id: 17,
    name: "Triggered Men Belt",
    price: 699,
    image: "/images/a5.jpg",
    category: 'accessory',
    slug: generateSlug("Triggered Men Belt"),
    description: "High-quality leather belt for men.",
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 18,
    name: "Premium White Man Purse",
    price: 799,
    image: "/images/a6.jpg",
    category: 'accessory',
    slug: generateSlug("Premium White Man Purse"),
    description: "Premium white purse with multiple compartments.",
    sizes: ['One Size']
  },
  {
    id: 19,
    name: "Silver Set of 3 Rings",
    price: 699,
    image: "/images/a7.jpg",
    category: 'accessory',
    slug: generateSlug("Silver Set of 3 Rings"),
    description: "Set of three elegant silver rings.",
    sizes: ['One Size']
  },
  {
    id: 20,
    name: "Dark Twisted Silver Chain",
    price: 899,
    image: "/images/a8.jpg",
    category: 'accessory',
    slug: generateSlug("Dark Twisted Silver Chain"),
    description: "Dark silver chain with twisted design.",
    sizes: ['One Size']
  },
  {
    id: 21,
    name: "Laymann Brown Sunglasses",
    price: 599,
    image: "/images/a9.jpg",
    category: 'accessory',
    slug: generateSlug("Laymann Brown Sunglasses"),
    description: "Classic brown sunglasses for everyday use.",
    sizes: ['One Size']
  },
  {
    id: 22,
    name: "Laymann Black Sunglasses",
    price: 599,
    image: "/images/a10.jpg",
    category: 'accessory',
    slug: generateSlug("Laymann Black Sunglasses"),
    description: "Timeless black sunglasses design.",
    sizes: ['One Size']
  },
  {
    id: 23,
    name: "Rim Twisted Black Belt",
    price: 399,
    image: "/images/a11.jpg",
    category: 'accessory',
    slug: generateSlug("Rim Twisted Black Belt"),
    description: "Black belt with twisted rim design.",
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 24,
    name: "Silky Premium Wallet",
    price: 499,
    image: "/images/a12.jpg",
    category: 'accessory',
    slug: generateSlug("Silky Premium Wallet"),
    description: "Premium silky wallet with multiple card slots.",
    sizes: ['One Size']
  }
];

// Helper functions
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'hoodie' | 'accessory' | 'all'): Product[] => {
  if (category === 'all') return products;
  return products.filter(product => product.category === category);
};

export const getHoodies = (): Product[] => {
  return products.filter(product => product.category === 'hoodie');
};

export const getAccessories = (): Product[] => {
  return products.filter(product => product.category === 'accessory');
};

export const searchProducts = (searchTerm: string): Product[] => {
  const term = searchTerm.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(term) ||
    product.description?.toLowerCase().includes(term) ||
    product.category.toLowerCase().includes(term)
  );
};

export const getFeaturedProducts = (limit: number = 8): Product[] => {
  return products.slice(0, limit);
};

export const getNewArrivals = (limit: number = 8): Product[] => {
  // Return mix of hoodies and accessories as new arrivals
  const hoodies = getHoodies().slice(0, 4);
  const accessories = getAccessories().slice(0, 4);
  return [...hoodies, ...accessories].slice(0, limit);
};

// Slug-related helper functions
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};



export const isValidSlug = (slug: string): boolean => {
  // Check if slug format is valid (lowercase, hyphens, alphanumeric)
  const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugPattern.test(slug) && slug.length > 0;
};

export const getAllSlugs = (): string[] => {
  return products.map(product => product.slug);
};
