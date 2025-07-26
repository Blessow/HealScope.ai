import React from 'react';
import LanguageSelector from './LanguageSelector';

function Navbar({ language, onLanguageChange }) {
    return (
        <header className="fixed top-0 left-0 w-full z-10">
            <nav className="flex items-center justify-between bg-gradient-to-r from-[rgba(1,17,86,0.8)] to-[rgba(1,7,36,0.66)] backdrop-blur-md border-b border-white/10 shadow-lg px-6 py-3">
                <div className="text-2xl font-bold tracking-wider text-white" style={{ fontFamily: 'Arial, Helvetica, sans-serif' }}>
                    HealScope<span className="text-blue-400">.ai</span>
                </div>
                <div className="flex items-center gap-4">
                    <LanguageSelector selectedLanguage={language} onLanguageChange={onLanguageChange} />
                    <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#284ae4] to-[#9eaaf2] hover:from-[#3a5bf5] hover:to-[#b0b9f5] text-white border-none cursor-pointer transition-all duration-300 shadow-md">
                        Logout
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;