"use client";
import React, { useState, useEffect } from "react";
import cookie from "js-cookie";

function ConsentPopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const cookieConsent = cookie.get("cookie_consent");
    if (!cookieConsent) {
      setShowPopup(true);
    }
  }, []);

  const handleCookieConsent = () => {
    cookie.set("cookie_consent", "true", { expires: 365 });
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 flex justify-between items-center">
        <div>
          We use cookies to improve your experience. By using our site, you
          agree to our use of cookies.
        </div>
        <button
          onClick={handleCookieConsent}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Accept
        </button>
      </div>
    )
  );
}

export default ConsentPopup;
