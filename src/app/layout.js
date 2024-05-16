import "./globals.css";
import { calistoga, nunito } from "./fonts";

export const metadata = {
  title: "CalmoMilla",
  description: "A mente em dia, a vida em harmonia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${calistoga.variable} ${nunito.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
