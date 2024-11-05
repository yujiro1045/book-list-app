import "./Layout.css";
import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<layoutProps> = ({ children }) => {
  return (
    <div className="container">
      <main className="mainContent">{children}</main>
    </div>
  );
};

export default Layout;
