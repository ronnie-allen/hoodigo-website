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
    <Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
      <div className="card text-center align-items-center" style={{ width: '16rem' }}>
        <img
          src={product.image}
          className="card-img-top w-75"
          alt={product.name}
          style={{ height: '206px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h6 className="card-text text-black" style={{ fontSize: '16px', fontWeight: '500' }}>
            {product.name}
          </h6>
          <h6 className="card-text text-black" style={{ fontSize: '18px', fontWeight: '700' }}>
            ₹ {product.price.toLocaleString()}
          </h6>

          {/* Add to Cart Button */}
          <button
            className="btn"
            onClick={(e) => {
              e.preventDefault();
              handleAddToCart(e);
            }}
            style={{
              position: 'absolute',
              bottom: '15px',
              right: '15px',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: '#15616d',
              color: 'white',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0f4a5a';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#15616d';
            }}
          >
            <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
