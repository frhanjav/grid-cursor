import { useEffect, useState, useRef } from "react";

export default function useSmoothMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 });
  const velocityRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  // Physics-based smooth interpolation with spring and damping
  useEffect(() => {
    const animate = () => {
      setSmoothPosition((prev) => {
        // Spring physics constants
        const springStrength = 0.03;
        // How strong the pull towards cursor is
        // Increase for snappier
        // Decrease for slower

        const damping = 0.8;
        // Reduces oscillation (0.8 = 20% energy loss per frame)
        // Decrease for more bounce
        // Increase for less bounce

        const maxDistance = 300;
        // Maximum influence distance
        // Larger = elastic works from further away

        // Calculate distance to target
        const dx = mousePosition.x - prev.x;
        const dy = mousePosition.y - prev.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Reduce spring strength if cursor is far away (elastic band effect)
        const distanceFactor = Math.min(1, maxDistance / (distance + 1));
        const adjustedSpring = springStrength * distanceFactor;

        // Calculate spring force
        const forceX = dx * adjustedSpring;
        const forceY = dy * adjustedSpring;

        // Update velocity (add force, apply damping)
        velocityRef.current.x = (velocityRef.current.x + forceX) * damping;
        velocityRef.current.y = (velocityRef.current.y + forceY) * damping;

        // Update position
        return {
          x: prev.x + velocityRef.current.x,
          y: prev.y + velocityRef.current.y,
        };
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  return smoothPosition;
}
