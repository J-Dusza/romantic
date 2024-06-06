import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import CookiesConsentPopup from "@/components/CookiesConsent";
import Footer from "@/components/Footer";
import i18nConfig from "@/i18nConfig";
import { dir } from "i18next";
import TranslationsProvider from "@/components/TranslationsProvider";
import initTranslations from "@/app/i18n";

export const metadata = {
  title: "ROMantic",
  description:
    "ROMantic is a platform that offers a gateway to the golden age of gaming. Dive into a world of retro gaming fun!",
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const i18nNamespaces = ["Navigation", "Footer", "CookiesPopup"];
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.variable}>
        <TranslationsProvider
          namespaces={i18nNamespaces}
          locale={locale}
          resources={resources}
        >
          <Navbar />
          {children}
          <Footer />
          <CookiesConsentPopup />
        </TranslationsProvider>
      </body>
    </html>
  );
}
