import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBar() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch products from fakestoreapi.com
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setFilteredProducts(response.data.slice(0, 20)); // Show 20 products by default
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery === '') {
      setFilteredProducts(products.slice(0, 20)); // Show first 20 products if no search query
    } else {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results.slice(0, 20)); // Limit to 20 filtered results
    }
  }, [searchQuery, products]);

  return (
    <div>
      <h2>Product List</h2>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '10px', width: '100%', marginBottom: '20px', borderRadius: '5px' }}
      />

      {/* Table of products */}
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Title</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Image</th>
            <th style={{ padding: '10px', border: '1px solid #ddd' }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>{product.title}</td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>
                <img src={product.image} alt={product.title} style={{ width: '50px', height: '50px' }} />
              </td>
              <td style={{ padding: '10px', border: '1px solid #ddd' }}>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
