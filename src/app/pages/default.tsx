import React from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";

type TDefaultProps = {
    children: React.ReactNode;
};

function Default({ children }: TDefaultProps) {
    const path = window.location.pathname;
    return (
        <>
            <div>
                <img src={viteLogo} className="logo" alt="Vite logo" />
                <img src={reactLogo} className="logo react" alt="React logo" />
            </div>
            <div style={{ marginTop: "20px" }}>
                <code style={{ color: "#0094AC" }}>{path}</code>
            </div>
            <div className="card">{children}</div>
        </>
    );
}
export default Default;
