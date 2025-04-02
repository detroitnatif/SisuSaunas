import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sisu Saunas - Traditional Finnish Saunas & Ice Baths",
  description: "Experience the authentic Finnish sauna tradition with Sisu Saunas. Discover the health benefits of sauna therapy and ice baths for optimal wellness.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-lg fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800">Sisu Saunas</Link>
              </div>
              <div className="flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
                <Link href="/products" className="text-gray-600 hover:text-gray-900">Products</Link>
                <Link href="/faq" className="text-gray-600 hover:text-gray-900">FAQ</Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Sisu Saunas</h3>
                <p className="text-gray-300">Bringing authentic Finnish sauna culture to your home.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact</h3>
                <p className="text-gray-300">Email: info@sisusaunas.com</p>
                <p className="text-gray-300">Phone: (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
                  <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
                  <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
              <p>&copy; {new Date().getFullYear()} Sisu Saunas. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
