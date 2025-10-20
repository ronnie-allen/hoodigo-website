import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import { getFeaturedProducts, getNewArrivals } from '../assets/data';
import { ROUTES } from '../types';

const Home: React.FC = () => {
  const featuredProducts = getFeaturedProducts(8);
  const newArrivals = getNewArrivals(8);

  return (
    <>
      <Navbar />

      {/* Hero Banner Section */}
      <section
        className="banner"
        style={{
          background: `linear-gradient(rgba(0, 8, 20, 0.1), rgba(0, 8, 20, 0.8)), url(/images/backdrop.png)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          paddingTop: '200px',
          paddingBottom: '200px'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12 fs-5 text-white px-4 w-75">
              <h1 className="fs-1 fw-bolder fst-italic pb-1">Hoodigo</h1>
              <h6 className="fs-4 pb-3">Your Perfect Hoodie !!</h6>
              <p>
                Experience the ultimate in comfort and style with our exclusive collection of hoodies. From
                classic designs to trendy new arrivals, find the perfect fit for every occasion.
              </p>
              <Link className="btn btn-warning btn-sm" to={ROUTES.SHOP}>
                Shop Now !!
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="Products" id="products">
        <div className="container">
          <div className="col-md-12">
            <h1 className="fs-4 py-4 w-100 text-center">Products</h1>
          </div>
          <div className="row">
            {featuredProducts.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="abt-us">
        <div className="container">
          <div className="row">
            <h1 className="text-center py-5">Hoodigo's Material</h1>
            <div className="col-md-6 py-2">
              <img
                src="/images/abt-us-banner.jpg"
                className="img-fluid rounded w-100"
                alt="About Hoodigo materials"
              />
            </div>
            <div className="col-md-6 h-75">
              <p>
                At Hoodigo, we believe that the foundation of a great hoodie lies in its material. That's why we
                meticulously select only the finest fabrics to craft our hoodies, ensuring they provide
                unparalleled comfort, durability, and style. Our premium cotton blends are soft to the touch,
                breathable, and perfect for all-day wear, while our high-quality fleece offers exceptional
                warmth without sacrificing lightness.
              </p>
              <p>
                Sustainability is at the core of our material selection process. We are committed to using
                eco-friendly materials. Our organic cotton is grown without harmful pesticides and synthetic
                fertilizers, ensuring a healthier planet and softer fabric. By choosing Hoodigo, you're
                not only getting a high-quality, stylish hoodie but also supporting a brand dedicated to
                sustainable and ethical practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advertisement Banner */}
      <section className="ad-banner">
        <h4>Repair Services</h4>
        <h2>up to <span>70% off</span> on All Men Accessories</h2>
        <button>Explore More</button>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arraival" id="new-arraival">
        <div className="container">
          <div className="col-md-12">
            <h1 className="fs-4 py-4 w-100 text-center">New Arrivals</h1>
          </div>
          <div className="row">
            {newArrivals.map((product) => (
              <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Posters Section */}
      <section className="posters">
        <div className="container">
          <div className="row">
            <div className="banner-box col-md-6" id="poster1">
              <h4>Crazy deals</h4>
              <h2>Buy 1 get 1 free</h2>
              <span>The best classic hoodies is on sale at Hoodigo</span>
              <button>Learn More</button>
            </div>
            <div className="banner-box col-md-5" id="poster2">
              <h4>Cool Offers</h4>
              <h2>New <br /> Hoodies</h2>
              <span>Flat 50% - 70% on every deal</span>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
