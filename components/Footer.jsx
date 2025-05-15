import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-bold">CRUD App</h2>
          <p className="text-sm text-blue-100">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Right side */}
        <div className="space-x-4 text-sm">
          <a href="/" className="hover:underline hover:text-yellow-300 transition">Home</a>
          <a href="/users" className="hover:underline hover:text-yellow-300 transition">Users</a>
          <a href="/add" className="hover:underline hover:text-yellow-300 transition">Add User</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
