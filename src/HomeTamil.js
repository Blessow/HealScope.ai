import { useRef } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Hero from "./img/heroimg.jpg";

function HomeTamil() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const mechanismRef = useRef(null);
  const [lang, setLang] = useState('தமிழ்');

   const trynow=() => {
    navigate('/LoginTamil');
  };

  const services = [
    { title: "ஏ.ஐ. ஆதரவு தோல் பகுப்பாய்வு", desc: "உங்கள் தோலைப் படம் எடுக்கவும் அல்லது பதிவேற்றவும்." },
    { title: "முகச்சருகு சிகிச்சைகள்", desc: "பிரகாசமான தோலுக்கான புத்துணர்வு சிகிச்சைகள்." },
    { title: "உடனடி முடிவுகள்", desc: "பயிற்சியளிக்கப்பட்ட தோல்நோய் தரவுகளுடன் துல்லியம் அதிகரிக்கப்பட்டது." },
    { title: "தரவு பாதுகாப்பும் காப்பும்", desc: "தனிப்பட்ட படங்கள் பகிரப்படாது; குறியாக்கப்பட்ட சேமிப்பு." },
    { title: "தனிப்பயன் பரிந்துரைகள்", desc: "தோல் பராமரிப்பு, சிகிச்சை மற்றும் வாழ்க்கை முறை பரிந்துரைகளை வழங்குகிறது." },
    { title: "பலமொழி ஆதரவு", desc: "ஆங்கிலம், தமிழ், இந்தி (உள்ளூர் பயனர்களுக்கேற்ப மாற்றக்கூடியது)." },
  ];
  const handleLanguageChange = (e) => {
  const selectedLang = e.target.value;
  setLang(selectedLang);
  if (selectedLang === 'தமிழ்') navigate('/HomeTamil');
  else if (selectedLang === 'हिंदी') navigate('/HomeHindi');
  else navigate('/'); 
  };
  const login=()=>{
    navigate('/LoginTamil');
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
          <b>ஹீல்ஸ்கோப்.ஏஐ</b>
        </div>
        <div className="left">
          <ul className="nav-links">
            <li onClick={scrollToHome}>முகப்பு</li>
            <li onClick={scrollToFeature}>அம்சங்கள்</li>
            <li onClick={scrollToabout}>எங்களைப் பற்றி</li>
            <li onClick={scrollToContact}>செயல்முறை</li>
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
          <button className="btn btn-prim" onClick={login}>உள்நுழைய</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-container">
        <section className="hero" ref={homeRef}>
          <div className="hero-text">
            <h1>ஏ.ஐ. துல்லியத்துடன் தோல் ஆரோக்கியத்தில் புரட்சி.</h1>
            <p>
              அடுத்த தலைமுறை தோல்நோய் பரிசோதனையை அனுபவிக்கவும் — உடனடி பகுப்பாய்வு, 
              ஆரம்பக் கண்டறிதல் மற்றும் உடனடி தீர்வுகள்.
            </p>
            <button onClick={trynow}>இப்போது முயற்சிக்கவும்</button>
          </div>
          <div className="hero-img">
            <img src={Hero} alt="Smart Company Logo" />
          </div>
        </section>

        {/* Features Section */}
        <section className="features" ref={featureRef}>
          <h2>அம்சங்கள்</h2>
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
        <h2>எங்களைப் பற்றி</h2>
        <p style={{ color: "white" }}>
          ஹீல்ஸ்கோப்.ஏஐ என்பது செயற்கை நுண்ணறிவு தொழில்நுட்பத்தைப் பயன்படுத்தி உடனடி ஆதரவு மற்றும் 
          ஆரம்ப நோயறிதலை வழங்கக்கூடிய நுண்ணறிவு உடல்நல துணையாளர் ஆகும். 
          எங்களின் நோக்கம்: அனைவருக்கும் சுகாதாரத்தை மேலும் அணுகக்கூடியதாக, 
           புத்திசாலியாகவும், உள்ளடக்கியதாகவும் மாற்றுவது.
          நாங்கள் ஒவ்வொருவருக்கும் உடல்நலத்தைப் பற்றி அறிவுடன் முடிவெடுக்க, பாதுகாப்பாக இருக்க 
          மற்றும் தங்கள் நலன்களை நிர்வகிக்க ஏ.ஐ சார்ந்த கருவிகளை வழங்குகிறோம்.
        </p>
        <div className="about-stats">
          <div>
            <h3>எளிமை மற்றும் தெளிவு</h3>
            <p>
              ஹீல்ஸ்கோப்.ஏஐ உங்கள் மொழியில்<br></br>
              சுகாதாரப் பிரச்சனைகளை எளிதாகக்<br></br>
              கண்டறிந்து ஆதரவு வழங்குகிறது.<br></br>
              அணுகத்தக்கது. விரைவானது. நம்பத்தகுந்தது.
            </p>
          </div>
          <div>
            <h3>நட்பு பார்வை</h3>
            <p>
              உங்கள் உடல்நலம், உங்கள் மொழியில்,<br></br>
              உங்கள் துணையாளர்.<br></br>
              ஹீல்ஸ்கோப்.ஏஐ உடன் எங்கே இருந்தாலும்<br></br>
              நீங்கள் பாதுகாப்பாக இருக்க முடியும்.
            </p>
          </div>
          <div>
            <h3>தொழில்முறை அணுகுமுறை</h3>
            <p>
              ஹீல்ஸ்கோப்.ஏஐ என்பது ஆரம்ப சுகாதார<br></br>
              அணுகலை மேம்படுத்தும் நோக்கில்<br></br>
              உருவாக்கப்பட்ட ஏ.ஐ. சார்ந்த தளமாகும்.
            </p>
          </div>
        </div>
      </section>

      {/* Mechanism Section */}
      <section className="mechanism" ref={mechanismRef}>
        <h2>எப்படி செயல்படுகிறது</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <h3>பதிவேற்றம் அல்லது படம் எடுங்கள்</h3>
            <p>உங்கள் தோல் நிலையை படம் எடுக்கவும் அல்லது ஏற்கனவே உள்ள படத்தைப் பதிவேற்றவும்.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>ஏ.ஐ. பகுப்பாய்வு</h3>
            <p>எங்கள் ஏ.ஐ. படம் மூலம் பிம்பம், வாசனை, கருப்பு புள்ளிகள் மற்றும் மேலும் பலவற்றைப் பரிசோதிக்கிறது.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>உடனடி முடிவுகள்</h3>
            <p>சிக்கலுக்கு தீர்வும் பரிந்துரைகளும் சில வினாடிகளில் கிடைக்கும்.</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">4</span>
            <h3>தனிப்பயன் பராமரிப்பு</h3>
            <p>உங்கள் தோலுக்கேற்ற சிகிச்சையை பின்பற்றுங்கள் மற்றும் முன்னேற்றத்தை கண்காணியுங்கள்.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeTamil;
