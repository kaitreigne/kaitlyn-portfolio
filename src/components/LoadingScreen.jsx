import { useEffect, useState } from "react";
import ChibiKait from "../assets/ChibiKait.png";

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 300);
          setTimeout(() => {
            if (onFinish) onFinish();
          }, 900);
          return 100;
        }
        return prev + Math.floor(Math.random() * 12) + 4;
      });
    }, 180);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayProgress = Math.min(progress, 100);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "radial-gradient(circle at 50% 40%, #2a0f1f 0%, #1a0b14 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        opacity: fadeOut ? 0 : 1,
        transition: "opacity 0.6s ease",
        pointerEvents: fadeOut ? "none" : "auto",
      }}
    >
      {/* SPARKLES */}
      <span className="sparkle sparkle-a" aria-hidden="true">✦</span>
      <span className="sparkle sparkle-b" aria-hidden="true">✦</span>
      <span className="sparkle sparkle-c" aria-hidden="true">✦</span>

      {/* CHIBI STICKER */}
      <div
        style={{
          position: "relative",
          width: "180px",
          height: "180px",
          marginBottom: "28px",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: "-20px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(236,72,153,0) 70%)",
            animation: "pulseGlow 2.2s ease-in-out infinite",
          }}
        />
        <img
          src={ChibiKait}
          alt="Loading"
          className="chibi-float"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* NAME */}
      <h2
        style={{
          color: "#fff",
          fontSize: "20px",
          fontWeight: "600",
          margin: "0 0 6px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {"{ Kaitlyn }"}
      </h2>

      <p
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "13px",
          margin: "0 0 24px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        Loading portfolio...
      </p>

      {/* PROGRESS BAR */}
      <div
        style={{
          width: "220px",
          height: "6px",
          borderRadius: "999px",
          background: "rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${displayProgress}%`,
            height: "100%",
            borderRadius: "999px",
            background: "linear-gradient(90deg, #ec4899, #ff9ac9)",
            transition: "width 0.25s ease",
          }}
        />
      </div>

      <span
        style={{
          color: "#ec4899",
          fontSize: "12px",
          marginTop: "10px",
          fontFamily: "'JetBrains Mono','Courier New',monospace",
        }}
      >
        {displayProgress}%
      </span>

      <style>{`
        @keyframes chibiFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }

        .chibi-float {
          animation: chibiFloat 3s ease-in-out infinite;
        }

        @keyframes pulseGlow {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.08); }
        }

        @keyframes sparkleTwinkle {
          0%, 100% { opacity: 0; transform: scale(0.6) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(15deg); }
        }

        .sparkle {
          position: absolute;
          color: #ff9ac9;
          font-size: 20px;
          animation: sparkleTwinkle 2.4s ease-in-out infinite;
        }

        .sparkle-a {
          top: 28%;
          left: 32%;
          animation-delay: 0s;
        }

        .sparkle-b {
          top: 32%;
          right: 30%;
          font-size: 14px;
          animation-delay: 0.8s;
        }

        .sparkle-c {
          bottom: 30%;
          left: 38%;
          font-size: 12px;
          animation-delay: 1.4s;
        }

        @media (max-width: 480px) {
          .chibi-float {
            width: 140px !important;
            height: 140px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;