import './Forgot.css';
import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function ForgotTamil() {
  const navigate = useNavigate();
  const [lang, setLang] = useState('தமிழ்');
  const [email, setEmail] = useState('');
  const [message] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("✅ கடவுச்சொல் மீட்டமைப்பு இணைப்பு உங்கள் மின்னஞ்சலுக்கு அனுப்பப்பட்டுள்ளது!");
    } catch (error) {
      alert("❌ பிழை: " + error.message);
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    if (selectedLang === 'English') navigate('/Forgot');
    else if (selectedLang === 'हिंदी') navigate('/ForgotHindi');
    else navigate('/ForgotTamil');
  };

  const home = () => {
    navigate('/LoginTamil');
  };

  return (
    <div className='forout'>
      <div className="navbar">
        <div className="logo">
          <b>ஹீல்ஸ்கோப்.ஏஐ</b>
        </div>
        <div className="left">
          <select className="btn lang" value={lang} onChange={handleLanguageChange}>
            <option>English</option>
            <option>தமிழ்</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={home}>உள்நுழை</button>
        </div>
      </div>

      <div className='forbox'>
        <h2>கடவுச்சொல்லை மறந்துவிட்டீர்களா?</h2>
        <form className='forform' onSubmit={handleReset}>
          <label htmlFor="email">மின்னஞ்சல்:</label>
          <input
            className='forinput'
            type="email"
            placeholder="உங்கள் மின்னஞ்சலை உள்ளிடவும்"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className='buttonfor' type="submit">மீட்டமைக்க</button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotTamil;
 