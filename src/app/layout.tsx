import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import coffeeYellow from "../../public/cofee-yellow.png"
import ShowNavbar from "@/utils/showNavbar";
import { Providers } from "@/components/Providers";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Buy Me a Chiya",
  icons: coffeeYellow.src,
  description: "Create your own patreon page for nepali creators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playwrite+IN:wght@100..400&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Providers>
          <ShowNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}