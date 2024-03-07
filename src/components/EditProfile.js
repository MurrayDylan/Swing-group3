import React, { useState } from "react";
import './EditProfile.css';

const ProfileEdit = () => {
  const [profile, setProfile] = useState({
    name: "",
    dateOfBirth: "",
    paymentMethod: "",
    gender: "",
    career: "",
    address: ""
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    console.log("Saved Profile:", profile);
  };

  return (
    <div className="profile-edit-container">
      <input
        type="text"
        name="name"
        value={profile.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="text"
        name="gender"
        value={profile.gender}
        onChange={handleChange}
        placeholder="Gender"
      />
      <input
        type="date"
        name="dateOfBirth"
        value={profile.dateOfBirth}
        onChange={handleChange}
      />
      <input
        type="text"
        name="address"
        value={profile.address}
        onChange={handleChange}
        placeholder="Address"
      />
      <input
        type="text"
        name="paymentMethod"
        value={profile.paymentMethod}
        onChange={handleChange}
        placeholder="Payment Method"
      />     
      <input
        type="text"
        name="career"
        value={profile.career}
        onChange={handleChange}
        placeholder="Career"
      />   
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProfileEdit;
