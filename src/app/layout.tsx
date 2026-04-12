import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import LoadingScreen from "@/components/LoadingScreen";
import "./globals.css";

const horizon = localFont({
  src: [
    {
      path: "../../public/fonts/Horizon/Horizon.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-horizon",
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata: Metadata = {
  title: "Orion Festival | Sous les étoiles tous les sons brillent",
  description:
    "Festival de musique les 18 et 19 septembre 2026 au Parc des Molliers, Bernex. Entrée à prix libre. Rap, électro, pop, rock — la scène suisse émergente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${horizon.variable} ${poppins.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
