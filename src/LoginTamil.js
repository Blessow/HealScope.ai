import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function LoginTamil() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lang, setLang] = useState('தமிழ்');

    const home = () => {
    navigate('/HomeTamil');
    };
    const Forgot = () => {
    navigate('/ForgotTamil');  
  }
  const Register = () => {
    navigate('/RegTamil');  
  }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", userCredential);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login error:", error.code, error.message);
            alert("உள்நுழைவு தோல்வி: " + error.message);
        }
    };

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);
        if (selectedLang === 'தமிழ்') return;
        else if (selectedLang === 'हिंदी') navigate('/LoginHindi');
        else navigate('/Login');
    };

    return (
        <div className="outer">
            <div className="navbar">
                <div className="logo">
                    <b>ஹீல்ஸ்கோப்.ஏஐ</b>
                </div>
                <div className="left">
                    <label htmlFor="language-select" className="visually-hidden">மொழியைத் தேர்ந்தெடுக்கவும்</label>
                    <select
                        id="language-select"
                        className="btn lang"
                        onChange={handleLanguageChange}
                        value={lang}
                        defaultValue="தமிழ்"
                        title="மொழியைத் தேர்ந்தெடுக்கவும்"
                    >
                        <option>English</option>
                        <option>தமிழ்</option>
                        <option>हिंदी</option>
                    </select>
                    <button className="btn btn-prim" onClick={home}>முகப்பு</button>
                </div>
            </div>
            <div className="inner1">
                <h1>மீண்டும் வருக!</h1>
                <h3>உள்நுழைய உங்கள் விபரங்களை உள்ளிடவும்.</h3>
            </div>
            <form className="loginform" onSubmit={handleSubmit}>
                <div className="login">
                    <h1>உள்நுழை</h1>
                    <label htmlFor="username">பயனர்பெயர்:</label>
                    <input type="text" id="username" name="username" placeholder='👤 உங்கள் பயனர்பெயரை உள்ளிடவும்' required />
                    <label htmlFor="email">மின்னஞ்சல்:</label>
                    <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="📧 உங்கள் மின்னஞ்சலை உள்ளிடவும்" required />
                    <label htmlFor="password">கடவுச்சொல்:</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="🔐 உங்கள் கடவுச்சொல்லை உள்ளிடவும்" required />
                    <div className="button-container">
                        <button type="button" onClick={Forgot} className="forgot">கடவுச்சொல்லை மறந்துவிட்டீர்களா?</button>
                        <button type="submit" className="button">உள்நுழை</button>
                    </div>
                    <p>கணக்கு இல்லை?<button type="button" onClick={Register} className="forgot">பதிவு செய்யவும்</button></p>
                </div>
            </form>
        </div>
    )
}

export default LoginTamil;
