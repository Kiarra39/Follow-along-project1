import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const AddressCard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addressData = {
      city,
      country,
      address1,
      address2,
      zipCode,
      addressType,
    };
    console.log(addressData);
    const token = localStorage.getItem('token');
    if (!token) {
      return alert('Token missing');
    }
    const response = await axios.post(`http://localhost:8080/user/add-address?token=${token}`,
      addressData);
    navigate('/profile');
  };

  return (
    <form className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">Address Line 1:</label>
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">Address Line 2:</label>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">Zip Code:</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
      <div className="mb-5">
        <label className="block text-sm font-semibold text-gray-700">Address Type:</label>
        <select
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="">Select Type</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AddressCard;
