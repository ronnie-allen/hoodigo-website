import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import { getProductById, getNewArrivals } from '../assets/data';
import { Product, ROUTES } from '../types';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'description' | 'reviews' | 'shipping'>('description');

  const { addToCart } = useCart();
  const relatedProducts = getNewArrivals(4);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id);
      const foundProduct = getProductById(productId);
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image);
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
      }
    }
  }, [id]);

  const handleQuantityChange = (delta: number) => {
    setQuantity(prev => Math.max(1, Math.min(10, prev + delta)));
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, selectedSize || undefined);
      // You could add a toast notification here
    }
  };

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <h2>Product Not Found</h2>
          <p>The product you're looking for doesn't exist.</p>
          <Link to={ROUTES.SHOP} className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  // Sample related images for the gallery (in a real app, these would come from the product data)
  const galleryImages = [
    product.image,
    product.image, // In a real app, you'd have multiple product images
    product.image,
    product.image
  ];

  return (
    <>
      <Navbar />

      <section className="s-prod-details py-5">
        <div className="container">
          <div className="row">
            {/* Breadcrumb */}
            <div className="col-md-12 mb-3">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={ROUTES.HOME}>Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={ROUTES.SHOP}>{product.category === 'hoodie' ? 'Hoodies' : 'Accessories'}</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {product.name}
                  </li>
                </ol>
              </nav>
            </div>

            {/* Product Image Gallery */}
            <div className="single-pro-img col-md-6">
              <img
                src={selectedImage}
                id="MainImg"
                className="img-fluid mb-3"
                alt={product.name}
                style={{ height: '400px', objectFit: 'cover', borderRadius: '10px' }}
              />
              <div className="small-img-section d-flex justify-content-between">
                {galleryImages.map((image, index) => (
                  <div key={index} className="img-grp" style={{ flexBasis: '24%' }}>
                    <img
                      src={image}
                      className={`small-img ${selectedImage === image ? 'border border-primary' : ''}`}
                      style={{
                        width: '100%',
                        height: '80px',
                        objectFit: 'cover',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                      alt={`${product.name} view ${index + 1}`}
                      onClick={() => handleImageClick(image)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details */}
            <div className="single-pro-details col-md-6">
              <h6 className="text-muted mb-2">Home / {product.category === 'hoodie' ? 'Hoodie' : 'Accessory'}</h6>
              <h2 className="mb-3">{product.name}</h2>
              <h3 className="text-primary mb-3">₹ {product.price.toLocaleString()}</h3>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-3">
                  <label htmlFor="size-select" className="form-label">
                    <strong>Select Size:</strong>
                  </label>
                  <select
                    id="size-select"
                    className="form-select"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    <option value="">Select your Size</option>
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity Selection */}
              <div className="mb-3">
                <label className="form-label"><strong>Quantity:</strong></label>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="form-control mx-2"
                    style={{ width: '80px', textAlign: 'center' }}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    max="10"
                  />
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= 10}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                className="btn btn-primary btn-lg mb-4"
                onClick={handleAddToCart}
                style={{ width: '200px' }}
              >
                Add to Cart - ₹ {(product.price * quantity).toLocaleString()}
              </button>

              {/* Product Details Tabs */}
              <div className="mt-4">
                <ul className="nav nav-tabs" id="productTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'description' ? 'active' : ''}`}
                      onClick={() => setActiveTab('description')}
                    >
                      Description
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`}
                      onClick={() => setActiveTab('reviews')}
                    >
                      Reviews
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'shipping' ? 'active' : ''}`}
                      onClick={() => setActiveTab('shipping')}
                    >
                      Shipping
                    </button>
                  </li>
                </ul>

                <div className="tab-content mt-3">
                  {activeTab === 'description' && (
                    <div className="tab-pane fade show active">
                      <h4>Product Details</h4>
                      <p>{product.description || 'This premium product offers exceptional quality and comfort. Perfect for everyday wear or special occasions.'}</p>
                      <ul>
                        <li>Premium quality materials</li>
                        <li>Durable construction</li>
                        <li>Comfortable fit</li>
                        <li>Easy care instructions</li>
                      </ul>
                    </div>
                  )}

                  {activeTab === 'reviews' && (
                    <div className="tab-pane fade show active">
                      <h4>Customer Reviews</h4>
                      <p>No reviews yet. Be the first to review this product!</p>
                    </div>
                  )}

                  {activeTab === 'shipping' && (
                    <div className="tab-pane fade show active">
                      <h4>Shipping Information</h4>
                      <p><strong>Free Shipping:</strong> On orders above ₹2,000</p>
                      <p><strong>Standard Delivery:</strong> 3-5 business days</p>
                      <p><strong>Express Delivery:</strong> 1-2 business days (additional charges apply)</p>
                      <p><strong>Cash on Delivery:</strong> Available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="new-arraival" id="related-products">
        <div className="container">
          <div className="col-md-12" id="s-prod-new-arraival">
            <h1 className="fs-5">Related Products</h1>
            <h4>Checkout more items from our collection</h4>
          </div>
          <div className="row">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <ProductCard product={relatedProduct} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
