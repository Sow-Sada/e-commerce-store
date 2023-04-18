import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "Saturn +",
  description: "Electronics e-commerce store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
