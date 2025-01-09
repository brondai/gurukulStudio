import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
        <nav className="mt-2">
          <a href="/terms" className="mx-2 hover:underline">Terms</a>
          <a href="/privacy" className="mx-2 hover:underline">Privacy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
