import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lang, setLang] = useState('English');
 
  const home = () => {
    navigate('/');
  };
  const Forgot = () => {
    navigate('/Forgot');  
  }
  const Register = () => {
    navigate('/Reg');  
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Login successful:", userCredential);
      navigate('/dashboard');  
    } catch (error) {
      console.error("Login error:", error.code, error.message);
      alert("Login failed: " + error.message);
    }
  };

  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLang(selectedLang);
  if (selectedLang === 'தமிழ்') navigate('/LoginTamil');
  else if (selectedLang === 'हिंदी') navigate('/LoginHindi');
  else navigate('/Login'); 
  };

  return (
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
        <h1>Welcome Back!</h1>
        <h3>Please enter your credentials to login.</h3>
      </div>

      <form className="loginform" onSubmit={handleSubmit}>
        <div className="login">
          <h1>Login</h1>

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
            <a onClick={Forgot} href="/Forgot" className="forgot">Forgot Password?</a>
            <button type="submit" className="button">Login</button>
          </div>
          <p>Don't have an account? <a href="/Register" onClick={Register} className="forgot">Register</a></p>
        </div>
      </form>
    </div>
  );
}

export default Login;
