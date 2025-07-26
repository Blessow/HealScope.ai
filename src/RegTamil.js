import './Reg.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase';

function RegTamil() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('தமிழ்');
  const home = () => {
    navigate('/HomeTamil');
  };
  const Login = () => {
    navigate('/LoginTamil'); 
  }
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert('பதிவுசெய்தல் வெற்றிகரமாக முடிந்தது!');
      navigate('/LoginTamil');
    } catch (error) {
      console.error("பதிவுசெய்யும் பிழை:", error);
      alert('பதிவுசெய்தல் தோல்வியடைந்தது: ' + error.message);
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    if (selectedLang === 'English') navigate('/Reg');
    else if (selectedLang === 'हिंदी') navigate('/RegHindi');
    else navigate('/RegTamil'); 
  };

  return (
    <div className="outer">
      <div className="navbar">
        <div className="logo">
          <b>ஹீல்ஸ்கோப்.ஏஐ</b>
        </div>
        <div className="left">
          <label htmlFor="language-select" className="visually-hidden" aria-hidden="true">மொழி தேர்வு</label>
          <select
            id="language-select"
            className="btn lang"
            value={lang}
            onChange={handleLanguageChange}
            title="மொழி தேர்வு"
          >
            <option>தமிழ்</option>
            <option>English</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={home}>முகப்பு</button>
        </div>
      </div>

      <div className="inner1">
        <h1>வரவேற்கிறோம்!</h1>
        <h3>பதிவுசெய்ய உங்கள் விபரங்களை உள்ளிடவும்.</h3>
      </div>

      <form className="loginform" onSubmit={handleRegister}>
        <div className="login">
          <h1>பதிவு</h1>

          <label htmlFor="username">பயனர்பெயர்:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="👤 உங்கள் பயனர் பெயரை உள்ளிடவும்"
            autoComplete="username"
            required
          />

          <label htmlFor="email">மின்னஞ்சல்:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="📧 உங்கள் மின்னஞ்சலை உள்ளிடவும்"
            autoComplete="email"
            required
          />

          <label htmlFor="password">கடவுச்சொல்:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="🔐 உங்கள் கடவுச்சொல்லை உள்ளிடவும்"
            autoComplete="current-password"
            required
          />

          <div className="button-container">
            <button type="submit" className="button">பதிவு</button>
          </div>
          <p>ஏற்கனவே கணக்கு உள்ளதா? <a href="/LoginTamil" onClick={Login} className="forgot">உள்நுழையவும்</a></p>
        </div>
      </form>
    </div>
  );
}

export default RegTamil;
