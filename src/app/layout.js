import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CartSidebar from "@/components/CartSidebar";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LuxeStore | Premium E-Commerce",
  description: "A premium shopping experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <CartSidebar />
          <main className="container">
            {children}
          </main>
        </CartProvider>
      </body>
    </html>
  );
}
