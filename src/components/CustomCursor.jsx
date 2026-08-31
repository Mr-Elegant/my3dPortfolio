import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only run on desktop devices with a precision mouse
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setEnabled(true);
    document.body.classList.add("custom-cursor-enabled");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovering = false;
    let isMouseDown = false;
    let isVisible = false;
    let targetScale = 1;
    let currentScale = 1;
    let animFrameId = null;

    const updateVisibility = (visible) => {
      isVisible = visible;
      if (dotRef.current) dotRef.current.style.opacity = visible ? "1" : "0";
      if (ringRef.current) ringRef.current.style.opacity = visible ? "1" : "0";
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        updateVisibility(true);
        ringX = mouseX;
        ringY = mouseY;
      }

      // Position inner dot immediately at cursor center
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleMouseDown = () => {
      isMouseDown = true;
    };

    const handleMouseUp = () => {
      isMouseDown = false;
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target &&
        target.closest &&
        target.closest("a, button, [role='button'], input, textarea, select, .cursor-pointer, .card, .card-border, .cta-button")
      ) {
        isHovering = true;
      } else {
        isHovering = false;
      }
    };

    const handleMouseLeave = () => {
      updateVisibility(false);
    };

    const handleMouseEnter = () => {
      updateVisibility(true);
    };

    const render = () => {
      // Smooth interpolation for the outer tracking ring
      const lerp = 0.28;
      ringX += (mouseX - ringX) * lerp;
      ringY += (mouseY - ringY) * lerp;

      // Determine scale based on interaction state
      if (isMouseDown) {
        targetScale = 0.75;
      } else if (isHovering) {
        targetScale = 1.45;
      } else {
        targetScale = 1;
      }

      currentScale += (targetScale - currentScale) * 0.2;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%) scale(${currentScale})`;
        
        // Dynamically style outer ring on hover without CSS transition interference
        if (isHovering) {
          ringRef.current.style.borderColor = "rgba(0, 240, 255, 0.9)";
          ringRef.current.style.backgroundColor = "rgba(0, 240, 255, 0.12)";
          ringRef.current.style.boxShadow = "0 0 20px rgba(0, 240, 255, 0.4)";
        } else if (isMouseDown) {
          ringRef.current.style.borderColor = "#00ff88";
          ringRef.current.style.backgroundColor = "rgba(0, 255, 136, 0.2)";
          ringRef.current.style.boxShadow = "0 0 20px rgba(0, 255, 136, 0.6)";
        } else {
          ringRef.current.style.borderColor = "rgba(0, 240, 255, 0.5)";
          ringRef.current.style.backgroundColor = "rgba(0, 240, 255, 0.04)";
          ringRef.current.style.boxShadow = "0 0 10px rgba(0, 240, 255, 0.15)";
        }
      }

      if (dotRef.current) {
        if (isMouseDown) {
          dotRef.current.style.backgroundColor = "#00ff88";
          dotRef.current.style.boxShadow = "0 0 10px #00ff88";
        } else {
          dotRef.current.style.backgroundColor = "#00f0ff";
          dotRef.current.style.boxShadow = "0 0 8px #00f0ff";
        }
      }

      animFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);

    animFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrameId) cancelAnimationFrame(animFrameId);
      document.body.classList.remove("custom-cursor-enabled");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-[999999] overflow-hidden select-none">
      {/* Outer Spring Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[#00f0ff]/50 bg-[#00f0ff]/5 pointer-events-none opacity-0 will-change-transform"
        style={{
          boxShadow: "0 0 10px rgba(0, 240, 255, 0.15)",
        }}
      />

      {/* Inner Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#00f0ff] pointer-events-none opacity-0 will-change-transform"
        style={{
          boxShadow: "0 0 8px #00f0ff",
        }}
      />
    </div>
  );
};

export default CustomCursor;
