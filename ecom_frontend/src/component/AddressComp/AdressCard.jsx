import React, { useState } from "react";


const AddressCard = () => {
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [addressType, setAddressType] = useState("");

  const handleSubmit = (e) => {
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
  };

  return (
    <form className="address-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>City:</label>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Country:</label>
        <input
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Address Line 1:</label>
        <input
          type="text"
          value={address1}
          onChange={(e) => setAddress1(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Address Line 2:</label>
        <input
          type="text"
          value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Zip Code:</label>
        <input
          type="text"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="form-group">
        <label>Address Type:</label>
        <select
          value={addressType}
          onChange={(e) => setAddressType(e.target.value)}
          className="input-field"
        >
          <option value="">Select Type</option>
          <option value="Home">Home</option>
          <option value="Office">Office</option>
        </select>
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default AddressCard;
