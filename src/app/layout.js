import { Cinzel, EB_Garamond } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-garamond",
});

export const metadata = {
  title: "Fernanda — Grimoire CV",
  description: "An interactive RPG-style Web CV",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/assets/roll.mp3" as="audio" />
      </head>
      <body
        className={`${cinzel.variable} ${garamond.variable} antialiased bg-stone-900 text-amber-100 overflow-x-hidden`}
      >
        <Preloader />
        {children}
      </body>
    </html>
  );
}
