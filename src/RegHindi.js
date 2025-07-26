import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function RegHindi() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('हिंदी');

  const home = () => {
    navigate('/HomeHindi');
  };
  const Login = () => {
    navigate('/LoginHindi'); 
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('पंजीकरण सफल रहा!');
      navigate('/LoginHindi');
    } catch (error) {
      console.error("पंजीकरण त्रुटि:", error);
      alert('पंजीकरण विफल: ' + error.message);
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    if (selectedLang === 'English') navigate('/Reg');
    else if (selectedLang === 'தமிழ்') navigate('/RegTamil');
    else navigate('/RegHindi');
  };

  return (
    <div className="outer">
      <div className="navbar">
        <div className="logo">
          <b>हीलस्कोप.एआई</b>
        </div>
        <div className="left">
          <label htmlFor="language-select" className="visually-hidden" aria-hidden="true">भाषा चुनें</label>
          <select
            id="language-select"
            className="btn lang"
            value={lang}
            onChange={handleLanguageChange}
            title="भाषा चुनें"
          >
            <option>हिंदी</option>
            <option>English</option>
            <option>தமிழ்</option>
          </select>
          <button className="btn btn-prim" onClick={home}>होम</button>
        </div>
      </div>

      <div className="inner1">
        <h1>स्वागत है!</h1>
        <h3>पंजीकरण के लिए कृपया अपनी जानकारी भरें।</h3>
      </div>

      <form className="loginform" onSubmit={handleRegister}>
        <div className="login">
          <h1>पंजीकरण</h1>

          <label htmlFor="username">यूज़रनेम:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="👤 अपना यूज़रनेम दर्ज करें"
            autoComplete="username"
            required
          />

          <label htmlFor="email">ईमेल:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📧 अपना ईमेल दर्ज करें"
            autoComplete="email"
            required
          />

          <label htmlFor="password">पासवर्ड:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="🔐 अपना पासवर्ड दर्ज करें"
            autoComplete="current-password"
            required
          />

          <div className="button-container">
            <button type="submit" className="button">पंजीकरण करें</button>
          </div>
          <p>पहले से अकाउंट है? <button type="button" onClick={Login} className="forgot">लॉगिन करें</button></p>
        </div>
      </form>
    </div>
  );
}

export default RegHindi;