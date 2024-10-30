import "./globals.css";
import VantaBackground from "@/components/background/vanta";
import HomeButton from "@/components/home";
import { Press_Start_2P } from "next/font/google";

const pressStart2P = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={pressStart2P.className}>
        <VantaBackground />
        <HomeButton/>
        {children}
      </body>
    </html>
  );
}
