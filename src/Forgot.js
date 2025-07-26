import './Forgot.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

function Forgot(){
    const navigate = useNavigate();
    const [lang, setLang] = useState('English');
  const [email, setEmail] = useState('');
  const [message] = useState('');
  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("✅ Password reset link sent! Check your email.");
    } catch (error) {
      alert("❌ Error: " + error.message);
    }
  };
  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLang(selectedLang);
  if (selectedLang === 'தமிழ்') navigate('/ForgotTamil');
  else if (selectedLang === 'हिंदी') navigate('/ForgotHindi');
  else navigate('/Forgot');
  };
  const home = () => {
    navigate('/Login');
  };
    return(
    <div className='forout'>
        <div className="navbar">
        <div className="logo">
          <b>Healscope.ai</b>
        </div>
        <div className="left">
          <label htmlFor="language-select" className="visually-hidden" aria-hidden="true">Choose Language</label>
          <select
            id="language-select"
            className="btn lang"
            value={lang}
            onChange={handleLanguageChange}
            title="Choose language"
          >
            <option>English</option>
            <option>தமிழ்</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={home}>Login</button>
        </div>
      </div>
      <div className='forbox'>
        <h2>Forgot Password</h2>
      <form className='forform' onSubmit={handleReset}>
        <label htmlFor="email">Email:</label>   
        <input
        className='forinput'
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className='buttonfor' type="submit">Reset Password</button>
      </form>
      </div>
      {message && <p>{message}</p>}
    </div>);
}

export default Forgot;