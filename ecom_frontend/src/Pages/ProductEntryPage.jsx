import React, { useState } from 'react';
import axios from 'axios';

function ProductEntryPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: 0,
    discountedPrice: 0,
    originalPrice: 0,
    quantity: 0,
    category: '',
  });
  const [errorInput, setInputError] = useState('');
  const [Images, setImages] = useState(null);

  const handleImageUpload = (e) => {
    const ImagesArray = Array.from(e.target.files);
    console.log(ImagesArray);
    setImages(ImagesArray);
  };
  
  const handleChange = (e) => {
    setInputError('');
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    console.log(Images);
    const {
      title,
      description,
      rating,
      discountedPrice,
      originalPrice,
      quantity,
      category,
    } = formData;
    if (
      title.length <= 0 ||
      description.length <= 0 ||
      discountedPrice <= 0 ||
      originalPrice <= 0 ||
      quantity <= 0 ||
      category.length <= 0
    ) {
      return setInputError('Enter The Information Inside Fields Correctly...');
    }
    let formDataBody = new FormData();
    formDataBody.append('title', title);
    formDataBody.append('description', description);
    formDataBody.append('category', category);
    formDataBody.append('discountedPrice', discountedPrice);
    formDataBody.append('originalPrice', originalPrice);
    formDataBody.append('quantity', quantity);
    formDataBody.append('rating', rating);

    Images.map((ele) => {
      formDataBody.append('filepath', ele);
    });

    console.log(formDataBody);
  
    axios.post('http://localhost:8080/product/create-product', formDataBody, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-center text-2xl font-semibold text-gray-900">Create Product</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title Input */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Product Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter Product Title"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Description Input */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter Product Description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Discounted Price */}
          <div>
            <label htmlFor="discountedPrice" className="block text-sm font-medium text-gray-700">Discounted Price</label>
            <input
              type="number"
              name="discountedPrice"
              value={formData.discountedPrice}
              onChange={handleChange}
              placeholder="Enter Discounted Price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Original Price */}
          <div>
            <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">Original Price</label>
            <input
              type="number"
              name="originalPrice"
              value={formData.originalPrice}
              onChange={handleChange}
              placeholder="Enter Original Price"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Stock Quantity */}
          <div>
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Stock Quantity</label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Enter Stock Quantity"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Upload Images */}
          <div>
            <label htmlFor="images" className="block text-sm font-medium text-gray-700">Upload Product Images</label>
            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Enter Category"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Rating */}
          <div>
            <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Product Rating</label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              placeholder="Enter Rating"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Error Message */}
          {errorInput && <p className="text-red-500 text-sm">{errorInput}</p>}

          {/* Submit Button */}
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductEntryPage;
