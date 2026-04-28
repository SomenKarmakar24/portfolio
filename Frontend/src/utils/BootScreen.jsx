import React, { useEffect, useState, useRef } from 'react';
import './BootScreen.css';

const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&";

const GlitchText = ({ text }) => {
    const [display, setDisplay] = useState(text);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text.split("").map((char, i) => {
                    if (char === " ") return " ";
                    if (i < iteration) return text[i];
                    return CHARS[Math.floor(Math.random() * CHARS.length)];
                }).join("")
            );
            if (iteration >= text.length) clearInterval(interval);
            iteration += 0.5;
        }, 40);
        return () => clearInterval(interval);
    }, [text]);

    return <span>{display}</span>;
};

const BootScreen = ({ onComplete }) => {
    const canvasRef = useRef(null);
    const [phase, setPhase] = useState('matrix');   // matrix -> glitch -> fadeout
    const [fadeOut, setFadeOut] = useState(false);

    // Matrix rain on canvas
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const cols = Math.floor(canvas.width / 16);
        const drops = Array(cols).fill(1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0,0,0,0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = '#00ff41';
            ctx.font = '14px monospace';
            drops.forEach((y, i) => {
                const char = CHARS[Math.floor(Math.random() * CHARS.length)];
                ctx.fillText(char, i * 16, y * 16);
                if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        };

        const matrixInterval = setInterval(draw, 40);

        // After 1.5s switch to glitch phase
        const t1 = setTimeout(() => {
            clearInterval(matrixInterval);
            setPhase('glitch');
        }, 1500);

        // After glitch, fade out
        const t2 = setTimeout(() => {
            setFadeOut(true);
            setTimeout(onComplete, 700);
        }, 2800);

        return () => {
            clearInterval(matrixInterval);
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, []);

    return (
        <div className={`boot-screen ${fadeOut ? 'boot-fadeout' : ''}`}>
            <canvas ref={canvasRef} className="boot-canvas" />
            {phase === 'glitch' && (
                <div className="boot-glitch-overlay">
                    <div className="boot-glitch-text" data-text="SOMEN_OS">
                        <GlitchText text="SOMEN_OS" />
                    </div>
                    <div className="boot-glitch-sub">
                        <GlitchText text="ACCESS GRANTED" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default BootScreen;
