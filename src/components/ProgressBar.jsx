import React from "react";

function ProgressBar({ progress }) {
    return (
        <div style={{ margin: "20px 0" }}>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "8px",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        backgroundColor: "#4caf50",
                        height: "20px",
                    }}
                ></div>
            </div>

            <span>{progress.toFixed(0)} % Complete</span>
        </div>
    );
}

export default ProgressBar;
