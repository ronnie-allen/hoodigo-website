import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { LoginFormData } from '../types';

const Login: React.FC = () => {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name as keyof LoginFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

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

      // For demo purposes, accept any email/password combination
      console.log('Login attempt:', formData);

      // In a real app, you would handle authentication here
      alert('Login successful! (Demo mode)');

    } catch (error) {
      console.error('Login error:', error);
      setErrors({ email: 'Login failed. Please try again.' });
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
          <div className="col-md-6 col-lg-4">
            <form onSubmit={handleSubmit} style={{ backdropFilter: 'blur(10px)', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '15px', padding: '40px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
              <h2 className="text-center mb-4" style={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}>Log In</h2>

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

              {/* Remember Me & Forgot Password */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="remember-me" />
                  <label className="form-check-label" htmlFor="remember-me" style={{ color: '#fff' }}>
                    Remember me
                  </label>
                </div>
                <a href="#" style={{ color: '#fff', textDecoration: 'none' }}>
                  Forgot password?
                </a>
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
                    Signing In...
                  </>
                ) : (
                  'Log In'
                )}
              </button>

              {/* Divider */}
              <div className="text-center mb-3" style={{ color: '#fff' }}>
                <span>or</span>
              </div>

              {/* Social Login Buttons */}
              <div className="d-grid gap-2 mb-4">
                <button type="button" className="btn btn-outline-light">
                  <i className="fab fa-google me-2"></i>Continue with Google
                </button>
                <button type="button" className="btn btn-outline-light">
                  <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="text-center" style={{ color: '#fff' }}>
                <p>Don't have an account? <Link to="/signup" style={{ color: '#fff', textDecoration: 'underline' }}>Sign up here</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;
