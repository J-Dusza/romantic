import React from "react";

function about() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-md rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          About ROMantic
        </h1>
        <p className="text-gray-700 mb-4">
          Welcome to <span className="font-bold text-blue-600">ROMantic</span>!
          We are your go-to destination for downloading ROMs of your favorite
          retro consoles. Whether you are a fan of the classic Nintendo, Sega,
          or any other beloved console from the past, we have you covered.
        </p>
        <p className="text-gray-700 mb-4">
          At <span className="font-bold text-blue-600">ROMantic</span>, we are
          passionate about preserving the legacy of retro gaming. Our extensive
          collection of ROMs allows you to relive your childhood memories or
          discover timeless classics for the first time. We believe in providing
          high-quality, easily accessible, and virus-free ROMs to the gaming
          community.
        </p>
        <p className="text-gray-700 mb-4">
          Our team is dedicated to curating a comprehensive library of ROMs,
          ensuring that you have access to the best and most popular games from
          each console. We are constantly updating our database, so be sure to
          check back often for new additions.
        </p>
        <p className="text-gray-700 mb-4">
          Thank you for choosing{" "}
          <span className="font-bold text-blue-600">ROMantic</span>. We hope you
          enjoy your journey through the golden age of gaming. If you have any
          questions, feel free to reach out to us through our contact page.
        </p>
        <p className="text-gray-700 text-center mt-6">Happy Gaming!</p>
      </div>
    </div>
  );
}

export default about;
