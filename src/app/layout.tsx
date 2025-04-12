import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Sidebar, LogoItem, Footer } from "@/components";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',      
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nahseky Renal Care',
  description: 'Nah-Sekey Renal Institute is a world-class medical center dedicated to the prevention, diagnosis, and treatment of kidney-related conditions. Led by renowned nephrologist Dr. Nah Sekey, our institute combines cutting-edge technology with compassionate care to provide personalized treatment plans for every patient. From early-stage kidney disease to advanced dialysis services, we are committed to delivering expert nephrology care in a serene and modern environment.Whether you are seeking a second opinion, ongoing treatment, or preventative consultation, Sekey Renal Institute stands as a trusted partner in your journey to optimal kidney health.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased root relative`}
      >
        <Header />
        <Sidebar />
        <LogoItem />
        {children}
        <Footer />
      </body>
    </html>
  );
}
