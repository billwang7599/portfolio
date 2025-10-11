import React from "react";

export default function Loading() {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                background: "rgba(255,255,255,0.95)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
            aria-busy="true"
            aria-label="Loading"
        >
            <div
                style={{
                    width: 64,
                    height: 64,
                    border: "8px solid #e0e0e0",
                    borderTop: "8px solid #333",
                    borderRadius: "50%",
                    animation: "spin 1s linear infinite",
                }}
            />
            <p style={{ marginTop: 24, fontSize: 20, color: "#333" }}>
                Loading assets...
            </p>
            <style>
                {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
            </style>
        </div>
    );
}
