import "./globals.css";

export const metadata = {
  title: "Balungao Tourism",
  description: "Discover the beauty of Balungao, Pangasinan",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
