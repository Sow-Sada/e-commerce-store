import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import { CartContextProvider } from "./context/CartContext";
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
        <CartContextProvider>{children}</CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
