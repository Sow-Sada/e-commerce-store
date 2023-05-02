import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "./components/Footer";
import { Poppins } from "next/font/google";
import { CartContextProvider } from "./context/CartContext";

const pop = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

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
    <html lang="en" className={pop.className}>
      <body>
        <Navbar />

        <CartContextProvider>{children}</CartContextProvider>
        <Footer />
      </body>
    </html>
  );
}
