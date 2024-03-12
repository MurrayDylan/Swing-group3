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
      <select name="gender" value={profile.gender} onChange={handleChange}>
      <option value="">Select Gender</option>
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
      <select name="county" value={profile.address4} onChange={handleChange}>
      <option value="">Select County</option>
      <option value="dork">Cork</option>
      <option value="dublin">Dublin</option>
      <option value="limerick">Limerick</option>
      <option value="galway">Galway</option>
      <option value="donegal">Donegal</option>
      <option value="kerry">Kerry</option>
      <option value="tripperary">Tripperary</option>
      <option value="clare">Calre</option>
      <option value="tyrone">Tyrone</option>
      <option value="antrim">Antrim</option>
      <option value="roscommon">Roscommon</option>
      <option value="down">Down</option>
      <option value="wexford">Wexford</option>
      <option value="meath">Meath</option>
      <option value="londonderry">Londonderry</option>
      <option value="kilkenny">Kilkenny</option>
      <option value="wicklow">Wicklow</option>
      <option value="offlay">Offlay</option>
      <option value="cavan">Cavan</option>
      <option value="waterford">Waterford</option>
      <option value="westmeath">Weatmeath</option>
      <option value="sligo">Sligo</option>
      <option value="laois">Laois</option>
      <option value="kildare">Kildare</option>
      <option value="fermanagh">Fermanagh</option>
      <option value="longford">Longford</option>
      <option value="carlow">Carlow</option>
      <option value="louth">Louth</option>
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
      <option value="creditcard">Credit Card</option>
      <option value="debitcard">Debit Card</option>
      <option value="paypal">Paypal</option>
      <option value="cryptocurrency">Cryptocurrency</option>
      <option value="alipay">Alipay</option>
      </select>

      {/* Career dropdown */}
      <select name="career" value={profile.career} onChange={handleChange}>
      <option value="">Select Career</option>
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
  </select>
      <button onClick={handleSave}>Save</button>
      <button onClick={() => navigate(-1)} className="back-button">
       Back
      </button>
    </div>
  );
};

export default ProfileEdit;
