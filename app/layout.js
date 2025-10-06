
import "./globals.css";


import localFont from "next/font/local";
 import {ConvexClientProvider} from "./ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "../components/theme-provider.jsx"
import { dark,shadcn,shadesOfPurple } from '@clerk/themes'
import Header from "@/components/Header";


 const spaceGrotesk=localFont({
  src:"./fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf",
  variable:"--font-space-grotesk",
  
 })


export const metadata = {
  title: "AI Content Creation Platform",
  description: "Content creation powered by AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
             <ClerkProvider appearance={{ baseTheme: [shadesOfPurple],variables:{colorBackground:"#192134"}}}>
            <ConvexClientProvider>
            <Header/>
            <main className="bg-slate-900 text-white overflow-x-hidden min-h-screen">
              {children}
              </main>
            </ConvexClientProvider>
            </ClerkProvider>
          </ThemeProvider>
      </body>
    </html>
  );
}
