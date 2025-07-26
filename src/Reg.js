import './Reg.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function Reg() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('English');
 
  const home = () => {
    navigate('/');
  };
  const Login = () => {
    navigate('/Login'); 
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error("Registration Error:", error);
      alert('Registration failed: ' + error.message);
    }
  };

  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLang(selectedLang);
  if (selectedLang === 'தமிழ்') navigate('/RegTamil');
  else if (selectedLang === 'हिंदी') navigate('/RegHindi');
  else navigate('/Reg');
  };
    return(
        <div className="outer">
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
          <button className="btn btn-prim" onClick={home}>Home</button>
        </div>
      </div>

      <div className="inner1">
        <h1>Welcome!</h1>
        <h3>Please enter your credentials to register.</h3>
      </div>

      <form className="loginform" onSubmit={handleRegister}>
        <div className="login">
          <h1>Register</h1>

          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="👤 Enter your Username"
            autoComplete="username"
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📧Enter your Email"
            autoComplete="email"
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="🔐 Enter your Password"
            autoComplete="current-password"
            required
          />

          <div className="button-container">
            <button type="submit" className="button">Register</button>
          </div>
          <p>Already have an account? <a href="/Login" onClick={Login} className="forgot">Login</a></p>
        </div>
      </form>
    </div>
    );
}

export default Reg;