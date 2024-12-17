import { useState } from "react";
import ValidationObject from '../../validation.js';
import { Link } from 'react-router-dom';
function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    file: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        file: file,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 const NameV= ValidationObject.validateName(formData.name);
 const EmailV= ValidationObject.validateEmail(formData.email);
 const PassV= ValidationObject.validatePass(formData.password);
if(typeof NameV =='string' && NameV.length>1){
    return setError(NameV);
}
if (typeof EmailV == 'string' && EmailV.length>2){
    return setError(EmailV);
}
if(typeof PassV == 'string' && PassV.length>2){
    return setError (PassV);
}
setError('');
  };

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">
        <div className="bg-white p-10 rounded-xl shadow-2xl w-96">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Sign Up
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-600">
                Name:
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name here.."
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-600">
                Email:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email here.."
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-600">
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password here.."
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              />
            </div>
            <div className="mb-6">
              <label className="block text-lg font-medium mb-2 text-gray-600">
                Upload File:
              </label>
              <input
                type="file"
                name="file"
                accept=".jpg, .jpeg, .png"
                onChange={handleFileChange}
                disabled={!!formData.file} // Prevent additional uploads
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
              />
              {formData.file && (
                <p className="mt-2 text-sm text-gray-700">
                  Uploaded File: <strong>{formData.file.name}</strong>
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
            <p className="text-center">
                Already have an account? <Link to ={'/login'}>Sign up</Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignupForm;
