import { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Forgot.css';

function ForgotHindi() {
  const navigate = useNavigate();
  const [lang, setLang] = useState('हिंदी');
  const [email, setEmail] = useState('');
  const [message] = useState('');

  const handleReset = async (e) => {
    e.preventDefault();
    const auth = getAuth();
    try {
      await sendPasswordResetEmail(auth, email);
      alert("✅ पासवर्ड रीसेट लिंक भेज दिया गया है! कृपया अपना ईमेल जांचें।");
    } catch (error) {
      alert("❌ त्रुटि: " + error.message);
    }
  };

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    if (selectedLang === 'தமிழ்') navigate('/ForgotTamil');
    else if (selectedLang === 'English') navigate('/Forgot');
    else navigate('/ForgotHindi');
  };

  const home = () => {
    navigate('/LoginHindi');
  };

  return (
    <div className='forout'>
      <div className="navbar">
        <div className="logo">
          <b>Healscope.ai</b>
        </div>
        <div className="left">
          <select className="btn lang" value={lang} onChange={handleLanguageChange}>
            <option>English</option>
            <option>தமிழ்</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={home}>लॉगिन</button>
        </div>
      </div>

      <div className='forbox'>
        <h2>पासवर्ड भूल गए</h2>
        <form className='forform' onSubmit={handleReset}>
          <label htmlFor="email">ईमेल:</label>
          <input
            className='forinput'
            type="email"
            placeholder="अपना ईमेल दर्ज करें"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className='buttonfor' type="submit">पासवर्ड रीसेट करें</button>
        </form>
      </div>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgotHindi;
