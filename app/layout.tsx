import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: '--font-sans' })
const playfair = Playfair_Display({ subsets: ["latin"], variable: '--font-serif' })

export const metadata: Metadata = {
  title: "AM",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        'flex flex-col min-h-screen font-sans antialiased',
        inter.variable,
        playfair.variable
      )}>
        <Providers> {/* Provider is a client component, but it won't make everything inside as client components */}
          
          <Header />
          <main className="grow">
            {children} {/* Server components can be passed as props, but we can't import a server component in side a 'use client' as it will make it client side render */}
          </main>
          <Footer />

        </Providers>
      </body>
    </html>
  )
}
