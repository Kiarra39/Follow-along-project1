import { useState } from 'react';
function Loginp(){
    
    const [userdeets, setdeets] = useState({
        email: '',
        password: '',
      });
      const handleChange = (event) => {
        const { name, value } = event.target;
        console.log(name, value);
        setdeets({
          ...userdeets,
          [name]: value,
        });
      };return(
        <>
    <div className="flex items-center justify-center h-screen  bg-gradient-to-r from-blue-400 via-pink-500 to-red-500">
    <div className="bg-white p-10 rounded-xl shadow-2xl w-96">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Login Page</h1>
      <form>
        <div className="mb-6">
          <label className="block text-lg font-medium mb-2 text-gray-600"> Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here.."
            
            value={userdeets.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent transition-all"
           
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-medium mb-2 text-gray-600">Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Enter password here.."
            value={userdeets.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all"
            
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-3 rounded-xl font-semibold text-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Login
        </button>
      </form>
    </div>
  </div>
  </>
    );

};
export default Loginp;