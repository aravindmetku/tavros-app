import GoToTopButton from "@/components/go-to-top-button";
import { Geist } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { SpeedInsights } from "@vercel/speed-insights/next"

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Starter Kit",
  description: "The fastest way to build apps with Next.js and Supabase",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col items-center">
              <nav className="w-full flex justify-center bg-darkBg text-lightText h-16">
                <div className="container mx-auto flex justify-between items-center p-3 px-5">
                  <div className="text-2xl font-bold">{SITE_CONFIG.name}</div>
                  <div className="hidden md:flex space-x-8 items-center">
                    <Link href="#features" className="hover:text-lime">
                      Features
                    </Link>
                    <Link href="#contact" className="hover:text-lime">
                      Contact us
                    </Link>
                    <Link href="#use-cases" className="hover:text-lime">
                      Use Cases
                    </Link>
                  </div>
                </div>
                {/* <HeaderAuth /> */}
              </nav>
              {children}
              <footer className="w-full flex items-center justify-center bg-darkBg text-lightText py-16">
                <GoToTopButton />
              </footer>
            </div>
          </main>
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
