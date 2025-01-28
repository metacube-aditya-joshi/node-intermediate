import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Github, Twitter, Facebook } from 'lucide-react';

const Login = () => {
  const { login } = useAuth();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Welcome Back</h2>
          <p className="mt-2 text-gray-600">Sign in with your social account</p>
        </div>
        
        <div className="space-y-4">
          <button
            onClick={() => login('google')}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <img 
              src="https://www.google.com/favicon.ico" 
              alt="Google" 
              className="h-5 w-5 mr-2"
            />
            Continue with Google
          </button>
          
          <button
            onClick={() => login('facebook')}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#1877F2] hover:bg-[#1874E8]"
          >
            <Facebook className="h-5 w-5 mr-2" />
            Continue with Facebook
          </button>
          
          <button
            onClick={() => login('twitter')}
            className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-white bg-[#1DA1F2] hover:bg-[#1A97E4]"
          >
            <Twitter className="h-5 w-5 mr-2" />
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};