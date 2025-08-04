import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import "./globals.css";

const raleway = Raleway({
  // variable: "--font-raleway",
  subsets: ["latin"],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
  icons: {
    icon: '/logo/logo.png'
  }
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();
  
  return (
    <html lang="en" className={raleway.className}>
      <body className="antialiased">
        <SessionProvider session={session}>
          <Navbar />
          <main className="bg-gray-50 min-h-screen ">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
