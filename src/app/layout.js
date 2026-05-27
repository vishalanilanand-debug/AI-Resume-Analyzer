import "./globals.css";

export const metadata = {
  title: "AI Resume Analyzer",
  description: "AI powered resume analyzer and interview preparation platform",
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