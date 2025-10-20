import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Blog: React.FC = () => {
  return (
    <>
      <Navbar />

      {/* Blog Banner */}
      <section
        className="blog-banner"
        style={{
          background: `linear-gradient(rgba(0, 8, 20, 0.6), rgba(0, 8, 20, 0.5)), url(/images/blog-banner.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '30vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center'
        }}
      >
        <h2>Blog about Us!!</h2>
        <p>Know About Hoodigo & #GetHoodified</p>
      </section>

      {/* Main Content */}
      <section className="story py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              {/* Our Story Section */}
              <div className="mb-5">
                <h2 className="mb-4">Our Story</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  Welcome to Hoodigo, where comfort meets style! Founded in 2023, Hoodigo was born out of a
                  passion for creating high-quality, stylish hoodies that cater to all walks of life. Whether you're looking
                  for a cozy companion for chilly evenings, a stylish addition to your casual wardrobe, or a functional piece
                  for your active lifestyle, we have the perfect hoodie for you.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  Our journey began when our founders recognized a gap in the market for hoodies that combined
                  premium quality, exceptional comfort, and contemporary design. We set out to create a brand
                  that not only delivers superior products but also tells a story of passion, dedication, and
                  innovation in the world of casual fashion.
                </p>
              </div>

              {/* Our Mission Section */}
              <div className="mb-5">
                <h2 className="mb-4">Our Mission</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  At Hoodigo, our mission is simple: to offer the best hoodies that combine unparalleled comfort,
                  exceptional quality, and modern design. We believe that a great hoodie is more than just a piece of
                  clothing—it's a statement of who you are. That's why we're dedicated to crafting hoodies that not only look good
                  but also feel amazing to wear.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  We strive to be the go-to brand for hoodie enthusiasts worldwide, providing a diverse range of
                  styles, colors, and sizes that cater to every individual's unique taste and preference. Our
                  commitment to excellence drives us to continuously innovate and improve our products.
                </p>
              </div>

              {/* Our Values Section */}
              <div className="mb-5">
                <h2 className="mb-4">Our Values</h2>

                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="fa-solid fa-gem fa-3x text-primary"></i>
                        </div>
                        <h4 className="card-title">Quality</h4>
                        <p className="card-text">
                          We are committed to using only the finest materials to ensure that every hoodie we make
                          is durable, soft, and comfortable. From the stitching to the fabric, we pay attention to every
                          detail to guarantee top-notch quality.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="fa-solid fa-leaf fa-3x text-success"></i>
                        </div>
                        <h4 className="card-title">Sustainability</h4>
                        <p className="card-text">
                          We care about the environment and strive to make our production processes as eco-friendly
                          as possible. Our sustainable practices include using organic and recycled materials, reducing waste, and
                          ensuring ethical labor practices in our supply chain.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mb-4">
                    <div className="card h-100 border-0 shadow-sm">
                      <div className="card-body text-center">
                        <div className="mb-3">
                          <i className="fa-solid fa-heart fa-3x text-danger"></i>
                        </div>
                        <h4 className="card-title">Customer Satisfaction</h4>
                        <p className="card-text">
                          Your satisfaction is our top priority. We aim to provide exceptional customer service and
                          a seamless shopping experience. Our friendly and knowledgeable team is always here to help, whether
                          you need assistance with sizing, shipping, or anything in between.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sustainability Section */}
              <div className="mb-5">
                <h2 className="mb-4">Sustainability</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  At Hoodigo, sustainability is at the heart of what we do. We are committed to making a positive
                  impact on the environment through responsible practices. From sourcing organic cotton to using eco-friendly
                  dyes, every step of our process is designed to reduce our environmental footprint.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  We believe that fashion and sustainability can coexist harmoniously. That's why we continuously
                  explore new ways to minimize our environmental impact while maintaining the high quality our
                  customers expect. Join us in our journey towards a more sustainable future, one hoodie at a time.
                </p>
              </div>

              {/* Community Section */}
              <div className="mb-5">
                <h2 className="mb-4">Join the Hoodigo Community</h2>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  We are more than just a brand—we are a community of hoodie lovers. Follow us on social media to
                  stay updated on our latest collections, special offers, and behind-the-scenes stories. Share your Hoodigo
                  moments with us using #HoodigoStyle and become a part of our growing family.
                </p>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#333' }}>
                  Thank you for choosing Hoodigo. We look forward to being a part of your wardrobe and your
                  journey towards comfortable, stylish living.
                </p>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-5">
                <h3>Ready to #GetHoodified?</h3>
                <p className="mb-4">Explore our collection and find your perfect hoodie today!</p>
                <a href="/shop" className="btn btn-primary btn-lg">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Blog;
