import { useRef } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Hero from "./img/heroimg.jpg";

function Home() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const mechanismRef = useRef(null);
  const [lang, setLang] = useState('English');

  const trynow=() => {
    navigate('/Login');
  };
  const services = [
    { title: "AI-Powered Skin Analysis", desc: "Upload or capture an image of your skin." },
    { title: "Facials", desc: "Rejuvenating treatments for glowing skin." },
    { title: "Instant Results", desc: "Accuracy improved with trained dermatology datasets." },
    { title: "Data Privacy & Security", desc: "No sharing of personal images; encrypted storage." },
    { title: "Personalized Recommendations", desc: "Suggests skincare routines, treatments, and lifestyle tips." },
    { title: "Multi-Language Support", desc: "English, Hindi, Tamil (customizable for local users)." },
  ];

  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLang(selectedLang);
  if (selectedLang === 'தமிழ்') navigate('/HomeTamil');
  else if (selectedLang === 'हिंदी') navigate('/HomeHindi');
  else navigate('/');
  };
  const login=()=>{
    navigate('/Login');
  };
  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToFeature = () => {
    featureRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToabout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    mechanismRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      {/* Navbar */}
      <div className="navbar">
        <div className="logo">
          <b>HealScope.ai</b>
        </div>
        <div className="left">
          <ul className="nav-links">
            <li onClick={scrollToHome}>Home</li>
            <li onClick={scrollToFeature}>Features</li>
            <li onClick={scrollToabout}>About</li>
            <li onClick={scrollToContact}>Mechanism</li>
          </ul>
          <select id="language-select"
            className="btn lang"
            value={lang}
            onChange={handleLanguageChange}
            title="Choose language">
            <option>English</option>
            <option>தமிழ்</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={login}>Sign In</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
      <section className="hero" ref={homeRef}>
        <div className="hero-text">
          <h1>Revolutionizing Skin Health with AI Precision.</h1>
          <p>
            Experience next-gen dermatology — instant analysis, early detection,
            and actionable solutions for healthier skin.
          </p>
          <button onClick={trynow}>Try Now</button>
        </div>
        <div className="hero-img">
          <img src={Hero} alt="Smart Compan Logo" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features" ref={featureRef}>
        <h2 >Features</h2>
        <div className="feature-grid">
          {services.map((service, index) => (
            <div className="feature-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
      </div>
      

      {/* About Section */}
      <section className="about" ref={aboutRef}>
        <h2>About </h2>
        <p style={{color:"white"}}>
          Healscope.ai is an intelligent health companion designed to empower users with real-time 
          support and early disease detection using cutting-edge AI <br></br>technology. Our mission is to make 
          healthcare more accessible, inclusive, and proactive—bridging the gap between individuals and timely 
          medical attention.<br></br>our mission is to make healthcare more accessible, intelligent, and inclusive for everyone.
          We strive to empower individuals and communities with AI-driven tools<br></br> that provide early health insights, 
          multilingual support, and real-time assistance—so people can make informed decisions, stay safe, and take control of <br></br>
          their well-being, no matter where they are or what language they speak.
        </p>
        <div className="about-stats">
          <div>
            <h3>Simple and Clear</h3>
            <p>Healscope.ai uses smart AI to <br></br>detect early signs of health issues <br></br>and provide support in your language.<br></br>
Accessible. Fast. Reliable.</p>
          </div>
          <div>
            <h3>With a Friendly Tone</h3>
            <p>Your health, your language, your companion.<br></br>
Healscope.ai offers AI-powered support<br></br> to help you stay healthy and  informe <br></br>wherever you are.</p>
          </div>
          <div>
            <h3>Professional Touch</h3>
            <p>Healscope.ai is an AI-driven platform <br></br>designed to improve early healthcare access <br></br> through intelligentdiagnosis and multilingual <br></br>support. </p>
          </div>
        </div>
      </section>
      <section className="mechanism" ref={mechanismRef}>
  <h2>How It Works</h2>
  <div className="steps-container">
    <div className="step">
      <span className="step-number">1</span>
      <h3>Upload or Capture</h3>
      <p>Take a photo of your skin condition or upload an existing image.</p>
    </div>

    <div className="arrow">→</div>

    <div className="step">
      <span className="step-number">2</span>
      <h3>AI Analysis</h3>
      <p>Our AI scans the image for acne, rashes, pigmentation, and more.</p>
    </div>

    <div className="arrow">→</div>

    <div className="step">
      <span className="step-number">3</span>
      <h3>Instant Results</h3>
      <p>Get accurate diagnosis and recommendations in seconds.</p>
    </div>

    <div className="arrow">→</div>

    <div className="step">
      <span className="step-number">4</span>
      <h3>Personalized Care</h3>
      <p>Follow tailored skincare routines and monitor progress over time.</p>
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;