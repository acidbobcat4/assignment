import React from 'react';

function ProfileCard({ profile, onSelect }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex items-center space-x-4">
      <img src={profile.photo} alt={profile.name} className="w-16 h-16 rounded-full object-cover" />
      <div>
        <h3 className="text-lg font-bold">{profile.name}</h3>
        <p className="text-gray-600">{profile.description}</p>
        <p className="text-sm text-gray-500">{profile.address}</p>
        <button onClick={onSelect} className="mt-2 bg-blue-500 text-white px-4 py-1 rounded">
          Show on Map
        </button>
      </div>
    </div>
  );
}

export default ProfileCard;
