// src/components/ProfileDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import MapComponent from './MapComponent';

function ProfileDetails({ profiles }) {
  const { id } = useParams();
  const profile = profiles.find(p => p.id === parseInt(id));

  if (!profile) {
    return <div>Profile not found.</div>;
  }

  return (
    <div>
      <Link to="/">Back to Profiles</Link>
      <h1>{profile.name}</h1>
      <img src={profile.photo} alt={profile.name} />
      <p>{profile.description}</p>
      <p>Contact: {profile.contact}</p>
      <h3>Address: {profile.address}</h3>
      <MapComponent address={profile.address} />
    </div>
  );
}

export default ProfileDetails;
