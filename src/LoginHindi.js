import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { useLocation } from 'react-router-dom';
function Hindi() {
    const location = useLocation();
    console.log("Current path:", location.pathname);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [lang, setLang] = useState('हिंदी');

    const home = () => {
    navigate('/HomeHindi');
    };
    const Forgot = () => {
    navigate('/ForgotHindi');  
  }
  const Register = () => {
    navigate('/RegHindi');  
  }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Login successful:", userCredential);
            navigate('/dashboard');
        } catch (error) {
            console.error("Login error:", error.code, error.message);
            alert("लॉगिन विफल: " + error.message);
        }
    };
    

    const handleLanguageChange = (e) => {
        const selectedLang = e.target.value;
        setLang(selectedLang);
        if (selectedLang === 'தமிழ்') navigate('/LoginTamil');
        else if (selectedLang === 'हिंदी') return;
        else navigate('/Login');
    };

    return (
        <div className="outer">
            <div className="navbar">
                <div className="logo">
                    <b>हीलस्कोप.एआई</b>
                </div>
                <div className="left">
                    <label htmlFor="language-select" className="visually-hidden">भाषा चुनें</label>
                    <select id="language-select" className="btn lang" onChange={handleLanguageChange} value={lang}>
                        <option>English</option>
                        <option>தமிழ்</option>
                        <option>हिंदी</option>
                    </select>
                    <button className="btn btn-prim" onClick={home}>होम</button>
                </div>
            </div>

            <div className="inner1">
                <h1>वापसी पर स्वागत है!</h1>
                <h3>कृपया लॉगिन करने के लिए अपने विवरण <br />दर्ज करें।</h3>
            </div>

            <form className="loginform" onSubmit={handleSubmit}>
                <div className="login">
                    <h1>लॉगिन</h1>
                    <label htmlFor="username">उपयोगकर्ता नाम:</label>
                    <input type="text" id="username" name="username" placeholder="👤 अपना उपयोगकर्ता नाम दर्ज करें" required />

                    <label htmlFor="email">ईमेल:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="📧 अपना ईमेल दर्ज करें"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label htmlFor="password">पासवर्ड:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="🔐 अपना पासवर्ड दर्ज करें"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="button-container">
                        <button type="button" onClick={Forgot} className="forgot">पासवर्ड भूल गए?</button>
                        <button type="submit" className="button">लॉगिन</button>
                    </div>
                    <p>खाता नहीं है?<button type="button" onClick={Register} className="forgot">पंजीकरण करें</button></p>
                </div>
            </form>
        </div>
    );
}

export default Hindi;
