"use client";
import React from "react";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t("Footer:rights_reserved")}
        </p>
        <p className="text-xs mt-1">{t("Footer:description")}</p>
      </div>
    </footer>
  );
}

export default Footer;
