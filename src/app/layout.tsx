import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider"
import { ClerkProvider } from '@clerk/nextjs'
import ModalProvider from "@/providers/ModalProvider";
import { Toaster } from "@/components/ui/sonner"

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Million",
  description: "Make your First Million",
  icons: {
    icon: "src/app/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <html lang="en">
        <body className={font.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <ModalProvider>
              {children}
              <Toaster />
            </ModalProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
