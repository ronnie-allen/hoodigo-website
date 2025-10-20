import React from 'react';
import { Link } from 'react-router-dom';
import { ProductCardProps } from '../../types';
import { useCart } from '../../context/CartContext';

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (onAddToCart) {
      onAddToCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="card text-center h-100">
      <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
        <img
          src={product.image}
          className="card-img-top w-100"
          alt={product.name}
          style={{ height: '206px', objectFit: 'cover' }}
        />
        <div className="card-body d-flex flex-column">
          <h6 className="card-title" style={{ fontSize: '16px', fontWeight: '500', color: '#000', marginBottom: '8px' }}>
            {product.name}
          </h6>
          <h6 style={{ fontSize: '18px', fontWeight: '700', color: '#000', marginBottom: '15px' }}>
            ₹ {product.price.toLocaleString()}
          </h6>

          {/* Spacer to push button to bottom */}
          <div className="mt-auto"></div>

          {/* Add to Cart Button */}
          <button
            className="btn btn-primary align-self-center"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(e);
            }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0',
              position: 'absolute',
              bottom: '15px',
              right: '15px'
            }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
