import "./globals.css";

export const metadata = {
  title: "CalmoMilla",
  description: "A mente em dia, a vida em harmonia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
