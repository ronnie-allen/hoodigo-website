import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { SignupFormData } from '../types';

const Signup: React.FC = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    subscribeNewsletter: false
  });
  const [errors, setErrors] = useState<Partial<SignupFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof SignupFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<SignupFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // For demo purposes, accept any valid form data
      console.log('Signup attempt:', formData);

      // In a real app, you would handle registration here
      alert('Account created successfully! (Demo mode)');

    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ email: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <div
        className="container py-5"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: `linear-gradient(rgba(0, 8, 20, 0.6), rgba(0, 8, 20, 0.7)), url(/images/sign-in-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="row justify-content-center w-100">
          <div className="col-md-6 col-lg-5">
            <form onSubmit={handleSubmit} style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <h2 className="text-center mb-4" style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}>Sign Up</h2>

              {/* Name Field */}
              <div className="input-field mb-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  placeholder=" "
                  style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)', color: '#fff', padding: '15px' }}
                  required
                />
                <label style={{ color: '#fff', top: errors.name ? '10px' : '50%', transform: errors.name ? 'translateY(-120%)' : 'translateY(-50%)' }}>
                  Enter your name
                </label>
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              {/* Email Field */}
              <div className="input-field mb-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  placeholder=" "
                  style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)', color: '#fff', padding: '15px' }}
                  required
                />
                <label style={{ color: '#fff', top: errors.email ? '10px' : '50%', transform: errors.email ? 'translateY(-120%)' : 'translateY(-50%)' }}>
                  Enter email
                </label>
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              {/* Password Field */}
              <div className="input-field mb-4">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  placeholder=" "
                  style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)', color: '#fff', padding: '15px' }}
                  required
                />
                <label style={{ color: '#fff', top: errors.password ? '10px' : '50%', transform: errors.password ? 'translateY(-120%)' : 'translateY(-50%)' }}>
                  Enter password
                </label>
                {errors.password && <div className="invalid-feedback">{errors.password}</div>}
              </div>

              {/* Confirm Password Field */}
              <div className="input-field mb-4">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                  placeholder=" "
                  style={{ background: 'rgba(255, 255, 255, 0.1)', border: '2px solid rgba(255, 255, 255, 0.3)', color: '#fff', padding: '15px' }}
                  required
                />
                <label style={{ color: '#fff', top: errors.confirmPassword ? '10px' : '50%', transform: errors.confirmPassword ? 'translateY(-120%)' : 'translateY(-50%)' }}>
                  Confirm password
                </label>
                {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
              </div>

              {/* Newsletter Subscription */}
              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="subscribeNewsletter"
                  id="subscribe-newsletter"
                  checked={formData.subscribeNewsletter}
                  onChange={handleInputChange}
                />
                <label className="form-check-label" htmlFor="subscribe-newsletter" style={{ color: '#fff' }}>
                  Subscribe to receive newsletters and exclusive offers
                </label>
              </div>

              {/* Terms and Conditions */}
              <div className="form-check mb-4">
                <input className="form-check-input" type="checkbox" id="terms-conditions" required />
                <label className="form-check-label" htmlFor="terms-conditions" style={{ color: '#fff' }}>
                  I agree to the <a href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Terms and Conditions</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-light btn-lg w-100 mb-3"
                disabled={isLoading}
                style={{ padding: '12px', fontSize: '18px', fontWeight: '600' }}
              >
                {isLoading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Creating Account...
                  </>
                ) : (
                  'Sign Up'
                )}
              </button>

              {/* Divider */}
              <div className="text-center mb-3" style={{ color: '#fff' }}>
                <span>or</span>
              </div>

              {/* Social Signup Buttons */}
              <div className="d-grid gap-2 mb-4">
                <button type="button" className="btn btn-outline-light">
                  <i className="fab fa-google me-2"></i>Sign up with Google
                </button>
                <button type="button" className="btn btn-outline-light">
                  <i className="fab fa-facebook-f me-2"></i>Sign up with Facebook
                </button>
              </div>

              {/* Login Link */}
              <div className="text-center" style={{ color: '#fff' }}>
                <p>Already have an account? <Link to="/login" style={{ color: '#fff', textDecoration: 'underline' }}>Log in here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Signup;
