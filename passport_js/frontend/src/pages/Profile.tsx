import React from 'react';
import { useAuth } from '../context/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex items-center space-x-6">
            <img
              src={user.profilePicture || 'https://via.placeholder.com/150'}
              alt={user.name}
              className="h-24 w-24 rounded-full object-cover"
            />
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <div className="mt-2 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                {user.socialProvider}
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8">
            <h3 className="text-lg font-semibold text-gray-900">Account Details</h3>
            <dl className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm font-medium text-gray-500">Member since</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {new Date(user.createdAt).toLocaleDateString()}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500">Social ID</dt>
                <dd className="mt-1 text-sm text-gray-900">{user.socialId}</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};