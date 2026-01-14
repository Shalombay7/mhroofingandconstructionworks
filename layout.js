import "./globals.css";

export const metadata = {
  title: "MH Roofing and Construction Works",
  description: "Roofing and Construction Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}