import React, { useEffect, useState } from 'react';
import './BootScreen.css';

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
const NAME = "SOMEN KARMAKAR";
const SUBTITLE = "FULL-STACK DEVELOPER";

const useGlitchText = (finalText, startDelay = 0) => {
    const [display, setDisplay] = useState(() => finalText.split("").map(() => " ").join(""));
    const [done, setDone] = useState(false);

    useEffect(() => {
        let timeout;
        timeout = setTimeout(() => {
            let iteration = 0;
            const interval = setInterval(() => {
                setDisplay(
                    finalText.split("").map((char, i) => {
                        if (char === " ") return " ";
                        if (i < iteration) return finalText[i];
                        return CHARS[Math.floor(Math.random() * CHARS.length)];
                    }).join("")
                );
                iteration += 0.4;
                if (iteration >= finalText.length) {
                    clearInterval(interval);
                    setDisplay(finalText);
                    setDone(true);
                }
            }, 40);
        }, startDelay);

        return () => clearTimeout(timeout);
    }, [finalText, startDelay]);

    return { display, done };
};

const BootScreen = ({ onComplete }) => {
    const [fadeOut, setFadeOut] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showBar, setShowBar] = useState(false);

    const { display: nameDisplay, done: nameDone } = useGlitchText(NAME, 300);
    const { display: subtitleDisplay } = useGlitchText(SUBTITLE, 1200);

    useEffect(() => {
        const t1 = setTimeout(() => setShowSubtitle(true), 1000);
        const t2 = setTimeout(() => setShowBar(true), 1800);
        const t3 = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 700);
        }, 3200);

        return () => [t1, t2, t3].forEach(clearTimeout);
    }, []);

    return (
        <div className={`boot-screen ${fadeOut ? 'boot-fadeout' : ''}`}>
            <div className="boot-content">
                <div className={`boot-name ${nameDone ? 'boot-name-done' : ''}`}>
                    {nameDisplay}
                </div>
                {showSubtitle && (
                    <div className="boot-subtitle">{subtitleDisplay}</div>
                )}
                {showBar && (
                    <div className="boot-divider">
                        <div className="boot-divider-line"></div>
                        <span className="boot-divider-text">INITIALIZING...</span>
                        <div className="boot-divider-line"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BootScreen;
