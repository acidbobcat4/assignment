// src/components/AdminPanel.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AdminPanel({ profiles, setProfiles }) {
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    photo: '',
    description: '',
    address: '',
    contact: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (isEditing) {
      setProfiles(profiles.map(profile => profile.id === formData.id ? formData : profile));
    } else {
      const newProfile = { ...formData, id: Date.now() };
      setProfiles([...profiles, newProfile]);
    }
    setFormData({ id: null, name: '', photo: '', description: '', address: '', contact: '' });
    setIsEditing(false);
  };

  const handleEdit = (profile) => {
    setFormData(profile);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setProfiles(profiles.filter(profile => profile.id !== id));
  };

  return (
    <div>
      <Link to="/">Back to Profiles</Link>
      <h1>Admin Panel</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="photo" placeholder="Photo URL" value={formData.photo} onChange={handleChange} required />
        <input name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input name="contact" placeholder="Contact" value={formData.contact} onChange={handleChange} required />
        <button type="submit">{isEditing ? 'Update Profile' : 'Add Profile'}</button>
      </form>
      <h2>Existing Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>
            {profile.name} - {profile.address}
            <button onClick={() => handleEdit(profile)}>Edit</button>
            <button onClick={() => handleDelete(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AdminPanel;
