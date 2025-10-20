import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { useCart } from '../context/CartContext';
import { ROUTES } from '../types';

const Cart: React.FC = () => {
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const subtotal = getTotalPrice();
  const discount = Math.round(subtotal * 0.05); // 5% discount
  const total = subtotal - discount;

  if (items.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container py-5 text-center">
          <div className="cart-container">
            <h2>Your Cart is Empty</h2>
            <p>Looks like you haven't added any items to your cart yet.</p>
            <Link to={ROUTES.SHOP} className="btn btn-primary btn-lg">
              Continue Shopping
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="py-5">
        <div className="container">
          <div className="cart-container">
            {/* Cart Header */}
            <div className="row mb-4">
              <div className="col-md-12">
                <h2 className="mb-4">Shopping Cart</h2>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
                  <button
                    className="btn btn-outline-danger"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Cart Table */}
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Size</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item) => (
                        <tr key={`${item.id}-${item.selectedSize}`}>
                          <td>
                            <div className="cart-data d-flex align-items-center">
                              <img
                                src={item.image}
                                alt={item.name}
                                style={{
                                  width: '100px',
                                  height: '130px',
                                  objectFit: 'cover',
                                  marginRight: '20px',
                                  borderRadius: '5px'
                                }}
                              />
                              <div>
                                <p className="mb-1" style={{ fontWeight: '600', color: '#000' }}>
                                  {item.name}
                                </p>
                                <small className="text-muted">Product ID: {item.id}</small>
                                <br />
                                <button
                                  className="btn btn-link btn-sm text-danger p-0"
                                  onClick={() => removeFromCart(item.id)}
                                  style={{ textDecoration: 'none' }}
                                >
                                  Remove
                                </button>
                              </div>
                            </div>
                          </td>
                          <td>
                            <span className="badge bg-secondary">
                              {item.selectedSize || 'One Size'}
                            </span>
                          </td>
                          <td>
                            <div className="d-flex align-items-center">
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                -
                              </button>
                              <input
                                type="number"
                                className="form-control form-control-sm mx-2"
                                style={{ width: '60px', textAlign: 'center' }}
                                value={item.quantity}
                                onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                min="1"
                                max="10"
                              />
                              <button
                                className="btn btn-sm btn-outline-secondary"
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                disabled={item.quantity >= 10}
                              >
                                +
                              </button>
                            </div>
                          </td>
                          <td>
                            <p className="mb-0" style={{ color: '#000', fontWeight: '600' }}>
                              ₹ {item.price.toLocaleString()}
                            </p>
                          </td>
                          <td>
                            <p className="mb-0" style={{ color: '#000', fontWeight: '600' }}>
                              ₹ {(item.price * item.quantity).toLocaleString()}
                            </p>
                          </td>
                          <td>
                            <button
                              className="btn btn-sm btn-outline-danger"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Cart Summary */}
            <div className="row mt-4">
              <div className="col-md-12">
                <div className="total-price d-flex justify-content-end">
                  <div className="card" style={{ width: '300px' }}>
                    <div className="card-body">
                      <h5 className="card-title">Cart Summary</h5>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Subtotal ({items.length} items):</span>
                        <span>₹ {subtotal.toLocaleString()}</span>
                      </div>
                      <div className="d-flex justify-content-between mb-2">
                        <span>Discount (5%):</span>
                        <span className="text-success">- ₹ {discount.toLocaleString()}</span>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mb-3">
                        <strong>Total:</strong>
                        <strong>₹ {total.toLocaleString()}</strong>
                      </div>

                      {/* Action Buttons */}
                      <div className="d-grid gap-2">
                        <Link to={ROUTES.SHOP} className="btn btn-outline-primary">
                          Continue Shopping
                        </Link>
                        <button className="btn btn-success btn-lg">
                          Proceed to Checkout
                        </button>
                      </div>

                      {/* Additional Info */}
                      <div className="mt-3 pt-3 border-top">
                        <small className="text-muted">
                          <i className="fa-solid fa-truck me-2"></i>
                          Free shipping on orders above ₹2,000
                        </small>
                        <br />
                        <small className="text-muted">
                          <i className="fa-solid fa-shield-alt me-2"></i>
                          Secure checkout with SSL encryption
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recently Viewed / Recommended Products */}
            <div className="row mt-5">
              <div className="col-md-12">
                <h4>You might also like</h4>
                <p className="text-muted">Customers who viewed this also viewed</p>
                {/* You could add a component showing related products here */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;
