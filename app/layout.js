import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zcrum",
  description: "Manage your projects",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
        <body className={`${inter.className} dotted-background`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Header />
       <main className="min-h-screen">{children}</main>
        <footer className="bg-gray-900 py-12">
              <div className="container mx-auto px-4 text-center text-gray-200">
                <p>Made with 💗 by Sudhanshu</p>
              </div>
            </footer>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
