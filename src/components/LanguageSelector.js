import React, { useState, useRef, useEffect } from 'react';
import { LanguageMap } from '../types';
import GlobeIcon from './icons/GlobeIcon';

function LanguageSelector({ selectedLanguage, onLanguageChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const handleSelect = (lang) => {
        onLanguageChange(lang);
        setIsOpen(false);
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white transition-colors duration-200"
            >
                <GlobeIcon />
                {LanguageMap[selectedLanguage].split(' ')[0]}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ml-2 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800/90 backdrop-blur-sm rounded-md shadow-lg py-1 z-50 border border-gray-700">
                    {Object.entries(LanguageMap).map(([key, value]) => (
                        <a
                            key={key}
                            href="#"
                            onClick={(e) => { e.preventDefault(); handleSelect(key); }}
                            className={`block px-4 py-2 text-sm ${selectedLanguage === key ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}`}
                        >
                            {value}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;