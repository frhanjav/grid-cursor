import { useState, useRef, useEffect } from 'react';

export default function useSmoothMousePosition(smoothing: number = 0.1) {

    const [mousePosition, setMousePosition] = useState({ x:0, y:0 });
    const [smoothPosition, setSmoothPosition] = useState({ x:0, y:0 });
    const animationRef = useRef<number | null>(null);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x:e.clientX, y:e.clientY});
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    // for smooth

    useEffect(() => {
        const animate = () => {
            setSmoothPosition(prev => ({
                x: prev.x + (mousePosition.x - prev.x) * smoothing,
                y: prev.y + (mousePosition.y - prev.y) * smoothing,
            }));
            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        }
        
    }, [mousePosition, smoothing]);

    return smoothPosition;
}