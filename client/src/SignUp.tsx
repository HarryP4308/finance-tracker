import React from 'react'
import { useState } from 'react';
export const SignUp = () => {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();

      if (!response.ok) {
        setMessage('❌ Registration was not successful');
      } else {
        setMessage('✅ Registration was successful');
      }
    } catch (err) {
      console.log(err);
      setMessage('⚠️ Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white-300 w-[400px] p-6 rounded-lg shadow-md flex flex-col space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-2">Register</h2>

        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1 font-medium">Email:</label>
          <input
            type="email"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className="mb-1 font-medium">Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
        >
          Submit
        </button>

        {message && (
          <p className="text-center mt-2 text-sm font-medium text-gray-800">
            {message}
          </p>
        )}
      </form>
    </div>
  );
  
}

export default SignUp