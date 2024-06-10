import "./globals.css";
import 'sweetalert2/dist/sweetalert2.min.css';
import { calistoga, nunito } from "./fonts";

export const metadata = {
  title: "CalmoMilla",
  description: "A mente em dia, a vida em harmonia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className={`${calistoga.variable} ${nunito.variable} scroll-smooth`}>
      <body>
        {children}
      </body>
    </html>
  );
}
