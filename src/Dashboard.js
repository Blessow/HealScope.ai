import { useState, useRef } from "react";
import { analyzeImage } from './services/geminiService';
import { useNavigate } from 'react-router-dom';
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [preview, setPreview] = useState(null);
  const [fileInfo, setFileInfo] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [aiResult, setAiResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState("en");
  const inputRef = useRef(null);

  const labels = {
    en: {
      upload: "Upload an Image",
      dragDrop: "📁 Drag & drop or click to select an image",
      reset: "Reset",
      submit: "Submit",
      processing: "Your uploaded image is processed!",
      analyzing: "🌀 Analyzing with AI...",
      logout: "← Logout",
      aiResult: "[AI diagnosis result will appear here]",
      disclaimer: "*AI results are for informational purposes only and not a substitute for professional medical advice.",
      assistant: "✨ AI Assistant"
    },
    ta: {
      upload: "படத்தை பதிவேற்றவும்",
      dragDrop: "📁 இழுக்கவும் அல்லது கிளிக் செய்து படத்தை தேர்ந்தெடுக்கவும்",
      reset: "மீட்டமை",
      submit: "சமர்ப்பிக்கவும்",
      processing: "உங்கள் படத்தை AI செயலாக்கியது!",
      analyzing: "🌀 AI மூலம் பகுப்பாய்வு செய்யப்படுகிறது...",
      logout: "← வெளியேறு",
      aiResult: "[AI முடிவு இங்கு தோன்றும்]",
      disclaimer: "*AI முடிவுகள் தகவலுக்காக மட்டுமே, மருத்துவ ஆலோசனைகளுக்கு மாற்றாகாது.",
      assistant: "✨ AI உதவியாளர்"
    },
    hi: {
      upload: "एक छवि अपलोड करें",
      dragDrop: "📁 छवि चुनने के लिए खींचें या क्लिक करें",
      reset: "रीसेट",
      submit: "सबमिट करें",
      processing: "आपकी छवि प्रोसेस हो गई है!",
      analyzing: "🌀 AI द्वारा विश्लेषण किया जा रहा है...",
      logout: "← लॉगआउट",
      aiResult: "[AI परिणाम यहाँ प्रदर्शित होगा]",
      disclaimer: "*AI परिणाम केवल जानकारी के उद्देश्य से हैं, यह चिकित्सा सलाह का विकल्प नहीं है।",
      assistant: "✨ AI सहायक"
    }
  };

  const getPromptText = () => {
    switch (language) {
      case "ta":
        return "இந்த மருத்துவ படத்தை பகுப்பாய்வு செய்யவும்.";
      case "hi":
        return "इस मेडिकल छवि का विश्लेषण करें।";
      default:
        return "Analyze this medical image.";
    }
  };

  const handleSubmit = async () => {
    if (!inputRef.current?.files?.[0]) return;
    const file = inputRef.current.files[0];
    setShowResult(true);
    setIsLoading(true);
    setAiResult("");

    try {
      const result = await analyzeImage(file, getPromptText());
      setAiResult(result);
    } catch (err) {
      setAiResult("❌ Failed to analyze image.");
    } finally {
      setIsLoading(false);
    }
  };

  const home = () => navigate('/');

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const previewImage = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    document.body.classList.add("loading");
    reader.onload = () => {
      setPreview(reader.result);
      setFileInfo(`${file.name} — ${(file.size / 1024).toFixed(2)} KB`);
      document.body.classList.remove("loading");
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setPreview(null);
    setFileInfo("");
    setShowResult(false);
    navigate('/Dashboard');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      previewImage({ target: { files: e.dataTransfer.files } });
    }
  };

  const t = labels[language];

  return (
    <div className="outerz">
      <div className="navbar">
        <div className="logo"><b>HealScope.ai</b></div>
        <div className="left">
          <select value={language} onChange={(e) => setLanguage(e.target.value)} className="btn lang">
            <option value="en">English</option>
            <option value="ta">தமிழ்</option>
            <option value="hi">हिंदी</option>
          </select>
          <button className="btn btn-prim" onClick={home}>{t.logout}</button>
        </div>
      </div>

      <div className={`dashboardz ${showResult ? "slide-left" : ""}`}>
        <h1>{t.upload}</h1>
        <label className={`uploadbox ${dragActive ? "drag-active" : ""}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          {!preview && <p>{t.dragDrop}</p>}
          <input type="file" accept="image/*" onChange={previewImage} ref={inputRef} />
          {preview && (
            <div className="preview centered-preview">
              <img src={preview} alt="Preview" />
              <div className="file-info">{fileInfo}</div>
            </div>
          )}
        </label>

        <div className="buttons">
          <button onClick={handleReset} className="buttonz">{t.reset}</button>
          <button onClick={handleSubmit} className="buttonz">{t.submit}</button>
        </div>
      </div>

      {showResult && (
        <div className={`result-card ${showResult ? "show" : ""}`}>
          <h2>{t.assistant}</h2>
          <p>{t.processing}</p>
          <div className="ai-chat">
            {isLoading ? <p>{t.analyzing}</p> : <p>{aiResult || t.aiResult}</p>}
          </div>
          <div className="disclaimer">
            <p>{t.disclaimer}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;
