import { useEffect, useRef, useState } from 'react';

export default function MatrixRain() {
  const canvasRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      setError("Canvas not initialized");
      return;
    }

    // Try-catch for context creation
    let ctx;
    try {
      ctx = canvas.getContext('2d');
      if (!ctx) {
        console.error("Could not get 2D context");
        setError("Canvas context initialization failed");
        return;
      }
    } catch (err) {
      console.error("Error creating canvas context:", err);
      setError("Canvas error: " + err.message);
      return;
    }
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      try {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      } catch (err) {
        console.error("Error setting canvas dimensions:", err);
      }
    };
    
    setCanvasDimensions();
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    // Try applying filter in a safe way
    try {
      ctx.filter = 'blur(1px)';
    } catch (err) {
      console.warn("Canvas filter not supported:", err);
      // Continue without filter
    }
    
    function draw() {
      try {
        // Clear with black, semi-transparent to show trail
        ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        // Green text
        ctx.fillStyle = 'rgba(0, 255, 0, 0.35)';
        ctx.font = `${fontSize}px monospace`;
        
        for (let i = 0; i < drops.length; i++) {
          const text = chars[Math.floor(Math.random() * chars.length)];
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          
          if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          }
          
          drops[i]++;
        }
      } catch (err) {
        console.error("Error in draw function:", err);
        clearInterval(interval);
      }
    }
    
    // Use requestAnimationFrame instead of setInterval for better performance
    let animationId;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    const interval = setInterval(draw, 33); // Keep as backup
    
    // Start animation
    try {
      animate();
    } catch (err) {
      console.error("Animation error:", err);
    }
    
    // Handle window resize
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (error) {
    console.error("MatrixRain error:", error);
    // Return an empty div with the same layout impact instead of nothing
    return <div className="fixed top-0 left-0 w-full h-full bg-black opacity-90" style={{zIndex: -10}} />;
  }

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full" 
      style={{zIndex: -10, background: 'black'}}
    />
  );
} 