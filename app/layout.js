import {Inter} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zcrum",
  description: "Manage your projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
