import "./globals.css";
import { Nunito_Sans } from "next/font/google";
import Header from "./header";

const nunito_sans = Nunito_Sans({
  weight: ["300", "600", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-nunito",
});

export const metadata = {
  title: "REST Countries API with color theme switcher",
  description:
    "Your challenge is to integrate with the [REST Countries API](https://restcountries.com) to pull country data and display it like in the designs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito_sans.variable}>
      <body>
        <main>
          <Header />
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
