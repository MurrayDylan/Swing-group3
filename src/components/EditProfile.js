import React from "react";
import './EditProfile.css';
import { useNavigate } from 'react-router-dom';
import { useProfile } from "./ProfileContext";


const ProfileEdit = () => {
  const { profile, setProfile } = useProfile(); 
  const navigate = useNavigate();
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
        name="firstname"
        value={profile.firstname}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        type="text"
        name="surname"
        value={profile.surname}
        onChange={handleChange}
        placeholder="Surname"
      />

      {/*DropDown*/}
      <select name="Gender" value={profile.gender} onChange={handleChange}>
      <option value="">Select Gender</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
      <option value="Non-binary">Non-Binary</option>
      <option value="Tesco Shopping Bag">Tesco Shopping Bag</option>
      <option value="Rrefer Not To Say">Prefer Not To Say</option>
      </select>
      <input
        type="Date"
        name="Date Of Birth"
        value={profile.dateOfBirth}
        onChange={handleChange}
      />
      <input
        type="text"
        name="line1address"
        value={profile.address1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      <input
        type="text"
        name="line2address"
        value={profile.address2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        type="text"
        name="line3address"
        value={profile.address3}
        onChange={handleChange}
        placeholder="Address Line 3"
      />
      {/*DropDown*/}
      <select name="County" value={profile.address4} onChange={handleChange}>
      <option value="">Select County</option>
      <option value="Cork">Cork</option>
      <option value="Bublin">Dublin</option>
      <option value="Limerick">Limerick</option>
      <option value="Galway">Galway</option>
      <option value="Donegal">Donegal</option>
      <option value="Kerry">Kerry</option>
      <option value="Tripperary">Tripperary</option>
      <option value="Clare">Calre</option>
      <option value="Tyrone">Tyrone</option>
      <option value="Antrim">Antrim</option>
      <option value="Roscommon">Roscommon</option>
      <option value="Down">Down</option>
      <option value="Wexford">Wexford</option>
      <option value="Meath">Meath</option>
      <option value="Londonderry">Londonderry</option>
      <option value="Kilkenny">Kilkenny</option>
      <option value="Wicklow">Wicklow</option>
      <option value="Offlay">Offlay</option>
      <option value="Cavan">Cavan</option>
      <option value="Waterford">Waterford</option>
      <option value="Westmeath">Weatmeath</option>
      <option value="Sligo">Sligo</option>
      <option value="Laois">Laois</option>
      <option value="Kildare">Kildare</option>
      <option value="Fermanagh">Fermanagh</option>
      <option value="Longford">Longford</option>
      <option value="Carlow">Carlow</option>
      <option value="Louth">Louth</option>
      </select>

      <input
        type="text"
        name="cityaddress"
        value={profile.address5}
        onChange={handleChange}
        placeholder="City"
      />
      <input
        type="text"
        name="eircodeaddress"
        value={profile.address6}
        onChange={handleChange}
        placeholder="Eircode"
      />
      {/*DropDown*/}
      <select name="paymenmethod" value={profile.paymentmethod} onChange={handleChange}>
      <option value="">Select Payment Method</option>
      <option value="Credit card">Credit Card</option>
      <option value="Debit card">Debit Card</option>
      <option value="Paypal">Paypal</option>
      <option value="Cryptocurrency">Cryptocurrency</option>
      <option value="Alipay">Alipay</option>
      </select>

      {/* Career dropdown */}
      <select name="career" value={profile.career} onChange={handleChange}>
      <option value="">Select Career</option>
      <option value="General Occupations">General Occupations</option>
      <option value="Education">Education</option>
      <option value="Agriculture,Fisheries,Timber and Forestry">Agriculture, Fisheries, Timber and Forestry</option>
      <option value="Construction">Construction</option>
      <option value="Mining and Extractiveindustries">Mining and extractive industries</option>
      <option value="Transportation">Transportation</option>
      <option value="Manufacturing,Processing and Repair">Manufacturing, processing and repair</option>
      <option value="Publishing and Advertising">Publishing and advertising</option>
      <option value="Medical and Health Care">Medical and Health Care</option>
      <option value="Religious Organization">Religious Organization</option>
      <option value="Public Service">Public Service</option>
      <option value="Business">Business</option>
      <option value="Professional Sports">Professional Sports</option>
      <option value="Students">Students</option>
      <option value="Unemployed">Unemployed</option>
      <option value="Self-employed">Self-Employed</option>
      <option value="Prefer Not To Say">Prefer Not To Say</option>
  </select>
  <button onClick={() => { handleSave(); navigate(-1); }}>Save</button>
    </div>
  );
};

export default ProfileEdit;
