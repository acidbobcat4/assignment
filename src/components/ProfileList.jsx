import React, { useState } from 'react';
import ProfileCard from './ProfileCard';
import MapComponent from './MapComponent';

const profiles = [
  { id: 1, name: 'Amit Sharma', photo: 'https://via.placeholder.com/150', description: 'Software Engineer', address: 'Bangalore, Karnataka' },
  { id: 2, name: 'Priya Singh', photo: 'https://via.placeholder.com/150', description: 'Data Scientist', address: 'Mumbai, Maharashtra' },
  { id: 3, name: 'Rahul Verma', photo: 'https://via.placeholder.com/150', description: 'Product Manager', address: 'Delhi, India' },
];

function ProfileList() {
  const [selectedAddress, setSelectedAddress] = useState(null);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} onSelect={() => setSelectedAddress(profile.address)} />
      ))}
      {selectedAddress && (
        <div className="mt-5">
          <h2 className="text-xl font-semibold mb-2">Location on Map</h2>
          <MapComponent address={selectedAddress} />
        </div>
      )}
    </div>
  );
}

export default ProfileList;
