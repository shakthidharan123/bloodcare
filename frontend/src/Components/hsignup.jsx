import React, { useState } from 'react';
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    bname:'',
    email: '',
    password: '',
    location:""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(formData);
    Axios.post("http://localhost:8081/hospital/signup",formData).then((res)=>{
      console.log(res.data);
      console.log("Sign up success");
    }).catch((err)=>{
      console.log(err);
    })
    navigate('/hlogin');
  }

  return (
    <div className="flex items-center border border-r-4 justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Hospital Sign Up</h2>
        <form className="space-y-6" action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block  text-sm font-medium text-gray-700">
              Username
            </label>
            <input
            placeholder='eg:hp001'
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border  rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>

          <div>
            <label htmlFor="name" className="block  text-sm font-medium text-gray-700">
              bloodbank Name
            </label>
            <input
            
              type="text"
              name="bname"
              id="bname"
              value={formData.bname}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border  rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>


          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <label htmlFor="name" className="block  text-sm font-medium text-gray-700">
              Location
            </label>
            <input
            placeholder='eg:chennai'
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 mt-1 border  rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-indigo-200"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:ring-indigo-200"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
