import React from "react";
import initTranslations from "@/app/i18n";

type AboutProps = {
  params: {
    locale: any;
  };
};

async function About({ params: { locale } }: AboutProps) {
  const { t } = await initTranslations(locale, ["About"]);

  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="bg-white shadow-md rounded-lg max-w-3xl w-full p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {t("header")}
        </h1>
        <p className="text-gray-700 mb-4">{t("p1")}</p>
        <p className="text-gray-700 mb-4">{t("p2")}</p>
        <p className="text-gray-700 mb-4">{t("p3")}</p>
        <p className="text-gray-700 mb-4">
          {t("p4_1")} <span className="font-bold text-blue-600">ROMantic</span>.{" "}
          {t("p4_2")}
        </p>
        <p className="text-gray-700 text-center mt-6">{t("happy_gaming")}</p>
      </div>
    </div>
  );
}

export default About;
