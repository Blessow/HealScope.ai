import { useRef } from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Hero from "./img/heroimg.jpg";

function HomeHindi() {
  const navigate = useNavigate();
  const homeRef = useRef(null);
  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const mechanismRef = useRef(null);
  const [lang, setLang] = useState('हिंदी');

  const trynow=() => {
    navigate('/LoginHindi');
  };

  const services = [
    { title: "एआई-संचालित त्वचा विश्लेषण", desc: "अपनी त्वचा की छवि अपलोड करें या कैप्चर करें।" },
    { title: "फेशियल", desc: "चमकती त्वचा के लिए पुनर्योजी उपचार।" },
    { title: "त्वरित परिणाम", desc: "प्रशिक्षित त्वचा विशेषज्ञ डेटासेट के साथ सटीकता में सुधार।" },
    { title: "डेटा गोपनीयता और सुरक्षा", desc: "कोई व्यक्तिगत छवि साझा नहीं की जाती; एन्क्रिप्टेड भंडारण।" },
    { title: "व्यक्तिगत सुझाव", desc: "त्वचा देखभाल दिनचर्या, उपचार, और जीवनशैली टिप्स प्रदान करता है।" },
    { title: "बहु-भाषा समर्थन", desc: "अंग्रेज़ी, हिंदी, तमिल (स्थानीय उपयोगकर्ताओं के लिए अनुकूलन योग्य)।" },
  ];

  const handleLanguageChange = (e) => {
    const selectedLang = e.target.value;
    setLang(selectedLang);
    if (selectedLang === 'தமிழ்') navigate('/HomeTamil');
    else if (selectedLang === 'English') navigate('/');
    else navigate('/HomeHindi');
  };
  const login=()=>{
    navigate('/LoginHindi');
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
      {/* नेवबार */}
      <div className="navbar">
        <div className="logo">
          <b>हीलस्कोप.एआई</b>
        </div>
        <div className="left">
          <ul className="nav-links">
            <li onClick={scrollToHome}>मुखपृष्ठ</li>
            <li onClick={scrollToFeature}>विशेषताएँ</li>
            <li onClick={scrollToabout}>हमारे बारे में</li>
            <li onClick={scrollToContact}>मशीन कैसे काम करती है</li>
          </ul>
          <select id="language-select"
            className="btn lang"
            value={lang}
            onChange={handleLanguageChange}
            title="भाषा चुनें">
            <option>English</option>
            <option>தமிழ்</option>
            <option>हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={login}>साइन इन</button>
        </div>
      </div>

      {/* हीरो सेक्शन */}
      <div className="hero-container">
        <section className="hero" ref={homeRef}>
          <div className="hero-text">
            <h1>एआई-सटीकता के साथ त्वचा स्वास्थ्य में क्रांति।</h1>
            <p>
              अगली पीढ़ी के त्वचाविज्ञान का अनुभव करें — त्वरित विश्लेषण, प्रारंभिक पहचान,
              और स्वस्थ त्वचा के लिए व्यवहारिक समाधान।
            </p>
            <button onClick={trynow}>अभी आज़माएँ</button>
          </div>
          <div className="hero-img">
            <img src={Hero} alt="हीलस्कोप लोगो" />
          </div>
        </section>

        {/* फीचर्स सेक्शन */}
        <section className="features" ref={featureRef}>
          <h2>विशेषताएँ</h2>
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

      {/* अबाउट सेक्शन */}
      <section className="about" ref={aboutRef}>
        <h2>हमारे बारे में</h2>
        <p style={{ color: "white" }}>
          HealScope.ai एक बुद्धिमान स्वास्थ्य साथी है जो उन्नत AI तकनीक का उपयोग करके 
          उपयोगकर्ताओं को रीयल-टाइम समर्थन और प्रारंभिक रोग पहचान प्रदान करता है। <br />
          हमारा मिशन स्वास्थ्य सेवा को अधिक सुलभ, समावेशी और सक्रिय बनाना है — लोगों को 
          समय पर चिकित्सा सहायता से जोड़ना। <br />
          हम AI-संचालित टूल्स के माध्यम से व्यक्तिगत स्वास्थ्य अंतर्दृष्टि, बहुभाषी समर्थन और 
          त्वरित सहायता प्रदान करते हैं ताकि हर कोई अपने स्वास्थ्य की बेहतर देखभाल कर सके।
        </p>
        <div className="about-stats">
          <div>
            <h3>सरल और स्पष्ट</h3>
            <p>हीलस्कोप.एआई स्मार्ट AI का उपयोग करता है<br /> स्वास्थ्य समस्याओं के प्रारंभिक संकेतों का पता लगाने के लिए<br /> 
              और आपकी भाषा में समर्थन प्रदान करता है।<br />सुलभ। तेज। विश्वसनीय।</p>
          </div>
          <div>
            <h3>मित्रवत अनुभव</h3>
            <p>आपका स्वास्थ्य, आपकी भाषा, आपका साथी।<br />
              हीलस्कोप.एआई एआई-संचालित समर्थन प्रदान करता है<br /> ताकि आप जहां भी हों, स्वस्थ और जानकारी में रहें।</p>
          </div>
          <div>
            <h3>व्यावसायिक स्पर्श</h3>
            <p>हीलस्कोप.एआई एक एआई-संचालित प्लेटफ़ॉर्म है<br /> जो प्रारंभिक स्वास्थ्य सेवा पहुँच में सुधार करता है<br />
              बुद्धिमान निदान और बहुभाषी समर्थन के माध्यम से।</p>
          </div>
        </div>
      </section>

      {/* मैकेनिज़्म सेक्शन */}
      <section className="mechanism" ref={mechanismRef}>
        <h2>यह कैसे काम करता है</h2>
        <div className="steps-container">
          <div className="step">
            <span className="step-number">1</span>
            <h3>अपलोड करें या कैप्चर करें</h3>
            <p>अपनी त्वचा की स्थिति की एक तस्वीर लें या मौजूदा छवि अपलोड करें।</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">2</span>
            <h3>एआई विश्लेषण</h3>
            <p>हमारा एआई छवि को मुँहासे, चकत्ते, रंजकता आदि के लिए स्कैन करता है।</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">3</span>
            <h3>त्वरित परिणाम</h3>
            <p>सेकंडों में सटीक निदान और सिफारिशें प्राप्त करें।</p>
          </div>

          <div className="arrow">→</div>

          <div className="step">
            <span className="step-number">4</span>
            <h3>व्यक्तिगत देखभाल</h3>
            <p>व्यक्तिगत त्वचा देखभाल दिनचर्याओं का पालन करें और समय के साथ प्रगति की निगरानी करें।</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeHindi;
