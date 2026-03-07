
import React from "react";
import { Link } from "react-router-dom";
import { MoveLeft } from "lucide-react";

/**
 * Premium Deep Night Sky Coming Soon Page
 * Strictly Following: "Night view of the sky with stars and moving stars, Heading only"
 */
const ComingSoon = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden font-sans bg-[#020617] select-none">
      {/* Deep Night Sky Background */}
      <div className="absolute inset-0 z-0">
        {/* Core Space Gradient */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#020617] via-[#0f172a] to-[#020617] animate-space-shift"></div>

        {/* Moving Star Layers (Parallax Space effect) */}
        <div className="absolute inset-0 z-10 opacity-30">
          <div className="stars-layer s-fast"></div>
          <div className="stars-layer s-slow"></div>
        </div>

        {/* Shooting Stars (Moving across the sky) */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`shooting-star-v2 s-v2-${i + 1}`}></div>
          ))}
        </div>

        {/* Ethereal Galaxy Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] bg-blue-500/5 rounded-full blur-[150px] animate-galaxy-glow"></div>
      </div>

      {/* Main Content: Heading Only */}
      <div className="relative z-30 text-center animate-title-float">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none text-white
          drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] filter transition-all duration-700 hover:drop-shadow-[0_0_50px_rgba(255,255,255,0.5)]">
          COMING<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/40 to-white/10 italic font-medium opacity-80">
            SOON
          </span>
        </h1>
      </div>

      {/* Subtle Navigation Back (Hidden until hover for ultra-minimalist feel) */}
      <Link
        to="/"
        className="fixed bottom-10 left-10 z-50 p-3 text-white/5 hover:text-white/80 transition-all duration-700 bg-white/5 hover:bg-white/10 rounded-full backdrop-blur-sm"
        title="Home"
      >
        <MoveLeft className="w-8 h-8" />
      </Link>

      {/* Night Sky & Star Motion Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes space-shift {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 100% 100%; }
        }

        @keyframes galaxy-glow {
          0%, 100% { opacity: 0.1; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.2; transform: translate(-50%, -50%) scale(1.2); }
        }

        @keyframes title-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        /* Moving Star Layers */
        .stars-layer {
          position: absolute;
          inset: -100%;
          background: transparent url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/123163/stars.png') repeat top center;
        }
        
        .s-fast { animation: move-stars-up 100s linear infinite; opacity: 0.4; }
        .s-slow { background-size: 200%; animation: move-stars-up 150s linear infinite; opacity: 0.2; transform: rotate(10deg); }

        @keyframes move-stars-up {
          from { transform: translateY(0) rotate(0deg); }
          to { transform: translateY(1000px) rotate(5deg); }
        }

        /* Shooting Star Streaks */
        .shooting-star-v2 {
          position: absolute;
          top: -100px;
          left: 50%;
          height: 2px;
          background: linear-gradient(-45deg, rgba(255,255,255,1), rgba(0,0,255,0));
          filter: drop-shadow(0 0 8px rgba(255,255,255,1));
          animation: shooting-v2 5s linear infinite;
          opacity: 0;
        }

        .s-v2-1 { left: 80%; animation-delay: 0s; animation-duration: 4s; }
        .s-v2-2 { left: 20%; animation-delay: 2s; animation-duration: 6s; }
        .s-v2-3 { left: 50%; top: 20%; animation-delay: 4.5s; animation-duration: 5s; }
        .s-v2-4 { left: 10%; top: 40%; animation-delay: 7s; animation-duration: 3s; }
        .s-v2-5 { left: 90%; top: 60%; animation-delay: 9s; animation-duration: 7s; }

        @keyframes shooting-v2 {
          0% { transform: rotate(35deg) translateX(0) scale(1); opacity: 1; width: 0; }
          40% { transform: rotate(35deg) translateX(-400px) scale(1); opacity: 1; width: 100px; }
          100% { transform: rotate(35deg) translateX(-1000px) scale(0.5); opacity: 0; width: 0; }
        }
      `}} />
    </div>
  );
};

export default ComingSoon;
