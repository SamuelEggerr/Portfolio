import "./globals.css";
import Nav from "../components/nav";

export const metadata = {
  title: "Samuel Portfolio",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-50 text-gray-900">
        <Nav />
        {children}
      </body>
    </html>
  );
}
