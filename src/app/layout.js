import "./globals.css";
import { Nunito_Sans } from "next/font/google";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "REST Countries API with color theme switcher",
  description:
    "Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito_sans.className}>
        {children}
        <div className="bg-slate-300">
          <span className="text-center text-4xl">deneme</span>
          <ul className="list-unstyled">
            <li>
              <a href="/">deneemdsd</a>
            </li>
            <li>
              <a href="/">deneemdsd</a>
            </li>
            <li>
              <a href="/">deneemdsd</a>
            </li>
            <li>
              <a href="/">deneemdsd</a>
            </li>
            <li>
              <a href="/">deneemdsd</a>
            </li>
          </ul>
        </div>
      </body>
    </html>
  );
}
