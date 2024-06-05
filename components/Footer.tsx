import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ROMantic. All rights reserved.
        </p>
        <p className="text-xs mt-1">
          We do not support piracy. Only unconidtional love for the nostalgy it
          provides.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
