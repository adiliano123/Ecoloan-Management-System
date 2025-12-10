import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Ecoloan Management System</h1>
      <div className="space-x-4">
        <Link 
          to="/trading" 
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Go to Trading Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Index;
