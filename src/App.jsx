import React from 'react';
import ProfileList from './components/ProfileList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <h1 className="text-3xl font-bold text-center mb-5">Indian Profiles & Locations</h1>
      <ProfileList />
    </div>
  );
}

export default App;
