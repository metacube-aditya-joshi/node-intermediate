import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Welcome to SocialAuth
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            A secure and simple way to authenticate using your favorite social media accounts.
          </p>
          
          {!user && (
            <div className="mt-8">
              <Link
                to="/login"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          )}
          
          {user && (
            <div className="mt-8">
              <Link
                to="/profile"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                View Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};