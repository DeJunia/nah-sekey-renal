import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Sidebar, LogoItem, Footer, HeaderBg } from "@/components";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',      
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://nahsekey-renal-care.vercel.app"),
  title: {
    default: "Nah-Sekey Renal Institute",
    template: "%s | Nah-Sekey Renal Institute",
  },
  description: 'Nah-Sekey Renal Institute is a world-class medical center dedicated to the prevention, diagnosis, and treatment of kidney-related conditions. Led by renowned nephrologist Dr. Nah Sekey, our institute combines cutting-edge technology with compassionate care to provide personalized treatment plans for every patient. From early-stage kidney disease to advanced dialysis services, we are committed to delivering expert nephrology care in a serene and modern environment.Whether you are seeking a second opinion, ongoing treatment, or preventative consultation, Sekey Renal Institute stands as a trusted partner in your journey to optimal kidney health.',
  keywords: [
    "kidney clinic",
    "renal care",
    "kidney treatment",
    "Nah Sekey",
    "nephrology",
    "dialysis center",
    "kidney disease",
    "kidney transplant",
    "renal health",
    "kidney hospital",
    "premium kidney care",
  ],
  openGraph: {
    title: "Nah-Sekey Renal Institute",
    description: "Premium renal healthcare by Dr. Nah Sekey.",
    url: "https://nahsekey-renal-care.vercel.app",
    siteName: "Nah-Sekey Renal Institute",
    images: [
      {
        url: "../assets/images/img.jpg", // relative to public folder
        width: 500,
        height: 500,
        alt: "Nah-Sekey Renal Institute",
      },
      {
        url: "../../public/img.jpg", // relative to public folder
        width: 500,
        height: 500,
        alt: "Nah-Sekey Renal Institute",
      },
      {
        url: "/img.jpg", // relative to public folder
        width: 500,
        height: 500,
        alt: "Nah-Sekey Renal Institute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nah-Sekey Renal Institute",
    description: "Premium kidney care led by Dr. Nah Sekey.",
    images: ["../assets/images/img.jpg"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="y55MTSoIa-KHUFqwzzB2jiYH7lkAR50cMWoIiennuTY" />
      </head>
      <body
        className={`${inter.className} antialiased root relative`}
      >
        <Header />
        <HeaderBg />
        <Sidebar />
        <LogoItem />
        {children}
        <Footer />
      </body>
    </html>
  );
}
