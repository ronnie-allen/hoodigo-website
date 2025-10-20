import React, { useState, useMemo } from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ProductCard from '../components/common/ProductCard';
import { products, getProductsByCategory } from '../assets/data';
import { Product, PRODUCT_CATEGORIES } from '../types';

const Shop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'hoodie' | 'accessory'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'name' | 'price' | 'category'>('name');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Apply category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Apply search filter
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(term) ||
        product.description?.toLowerCase().includes(term)
      );
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'price':
          return a.price - b.price;
        case 'category':
          return a.category.localeCompare(b.category);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchTerm, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(startIndex, startIndex + itemsPerPage);

  const handleCategoryChange = (category: 'all' | 'hoodie' | 'accessory') => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as 'name' | 'price' | 'category');
    setCurrentPage(1); // Reset to first page when sort changes
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      {/* Shop Banner */}
      <section
        className="shop-banner"
        style={{
          background: `linear-gradient(rgba(0, 8, 20, 0.6), rgba(0, 8, 20, 0.5)), url(/images/shop-banner-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <h2>#stayhoodified</h2>
        <p>Save more with coupons & up to 70% off!</p>
      </section>

      {/* Shop Products Section */}
      <section className="shop-Products" id="shop-products">
        <div className="container">
          <div className="col-md-12">
            <h1 className="fs-4 py-4 w-100 text-center">Products</h1>
          </div>

          {/* Filters and Search */}
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                {/* Search Bar */}
                <div className="flex-grow-1" style={{ maxWidth: '300px' }}>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </div>

                {/* Category Filter */}
                <div className="d-flex gap-2 flex-wrap">
                  <button
                    className={`btn ${selectedCategory === 'all' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleCategoryChange('all')}
                  >
                    All
                  </button>
                  <button
                    className={`btn ${selectedCategory === 'hoodie' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleCategoryChange('hoodie')}
                  >
                    Hoodies
                  </button>
                  <button
                    className={`btn ${selectedCategory === 'accessory' ? 'btn-primary' : 'btn-outline-primary'}`}
                    onClick={() => handleCategoryChange('accessory')}
                  >
                    Accessories
                  </button>
                </div>

                {/* Sort Options */}
                <div style={{ minWidth: '150px' }}>
                  <select className="form-select" value={sortBy} onChange={handleSortChange}>
                    <option value="name">Sort by Name</option>
                    <option value="price">Sort by Price</option>
                    <option value="category">Sort by Category</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="row mb-3">
            <div className="col-md-12">
              <p className="text-muted mb-0">
                Showing {paginatedProducts.length} of {filteredAndSortedProducts.length} products
                {searchTerm && ` for "${searchTerm}"`}
              </p>
            </div>
          </div>

          {/* Products Grid */}
          <div className="row">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((product) => (
                <div key={product.id} className="col-lg-3 col-md-4 col-sm-6 mb-4">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <div className="col-md-12 text-center py-5">
                <h4>No products found</h4>
                <p>Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-md-12">
                <div className="pagination d-flex justify-content-center align-items-center gap-2 mt-4">
                  <button
                    className="btn btn-outline-primary"
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    <i className="fa-solid fa-chevron-left"></i> Previous
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .filter(page =>
                      page === 1 ||
                      page === totalPages ||
                      Math.abs(page - currentPage) <= 1
                    )
                    .map((page, index, array) => {
                      if (index > 0 && page - array[index - 1] > 1) {
                        return [
                          <span key={`ellipsis-${page}`} className="px-3">...</span>,
                          <button
                            key={page}
                            className={`btn ${currentPage === page ? 'btn-primary' : 'btn-outline-primary'}`}
                            onClick={() => handlePageChange(page)}
                          >
                            {page}
                          </button>
                        ];
                      }
                      return (
                        <button
                          key={page}
                          className={`btn ${currentPage === page ? 'btn-primary' : 'btn-outline-primary'}`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      );
                    })}

                  <button
                    className="btn btn-outline-primary"
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    Next <i className="fa-solid fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Shop;
