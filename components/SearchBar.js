import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    // Fetch products from Fake Store API
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await axios.get('https://fakestoreapi.com/products');
          setProducts(response.data);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  
    // Filter products based on query
    useEffect(() => {
      const results = products.filter(product =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }, [query, products]);
  
    return (
      <div>
        <h1>Product Search</h1>
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{ padding: '8px', width: '100%', marginBottom: '20px' }}
        />
  
        {/* Only display table if there is a query */}
        {query && (
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Title</th>
                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id}>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.id}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>{product.title}</td>
                  <td style={{ border: '1px solid #ddd', padding: '8px' }}>${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }