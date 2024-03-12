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
      {/* Gender dropdown */}
      <select name="gender" value={profile.gender} onChange={handleChange}>
      <option value="">Select Gender</option>
      {/* Add gender options here */}
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="nonbinary">Non-Binary</option>
      <option value="tescoshoppingbag">Tesco Shopping Bag</option>
      <option value="prefernottosay">Prefer Not To Say</option>
      </select>
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
      {/* Career dropdown */}
      <select name="career" value={profile.career} onChange={handleChange}>
      <option value="">Select Career</option>
      {/* Add career options here */}
      <option value="generaloccupations">General Occupations</option>
      <option value="education">Education</option>
      <option value="agriculturefisheriestimberandforestry">Agriculture, Fisheries, Timber and Forestry</option>
      <option value="construction">Construction</option>
      <option value="miningandextractiveindustries">Mining and extractive industries</option>
      <option value="transportation">Transportation</option>
      <option value="manufacturingprocessingandrepair">Manufacturing, processing and repair</option>
      <option value="publishingandadvertising">Publishing and advertising</option>
      <option value="medicalandhealthcare">Medical and Health Care</option>
      <option value="religiousorganization">Religious Organization</option>
      <option value="publicservice">Public Service</option>
      <option value="business">Business</option>
      <option value="professionalsports">Professional Sports</option>
      <option value="students">Students</option>
      <option value="unemployed">Unemployed</option>
      <option value="selfemployed">Self-Employed</option>
      <option value="prefernottosay">Prefer Not To Say</option>
      
      {/* etc. */}
  </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default ProfileEdit;
