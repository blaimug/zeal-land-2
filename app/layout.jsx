import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { GoogleAnalytics } from "@next/third-parties/google";

const geist = Geist({ subsets: ["latin"] });

export const metadata = {
  verification: { google: "x2Pjbm095gMdhic33fpc3Hv1D1oKusFqOiycAJi_3sA" },
  title: "Zeal - Congregation Assistant App",
  description:
    "Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.",
  metadataBase: new URL("https://zeal.rw"),
  keywords: [
    "jw",
    "Jehovah's Witnesses",
    "cart witnessing",
    "jw cart",
    "clm schedule",
    "nw publisher",
    "nw scheduler",
    "jwcart",
    "public witnessing",
    "zeal jw",
    "s-140",
    "jw meetings",
    "hourglass",
    "jw library",
    "jw language",
    "zeal",
  ],
  openGraph: {
    title: "Zeal - Congregation Assistant App",
    description:
      "Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.",
    url: "https://zeal.rw",
    siteName: "Zeal",
    images: [
      {
        url: "/icon.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeal - Congregation Assistant App",
    description:
      "Schedule Christian Life & Ministry meeting parts, Public Talk assignments, Duties, Territories, Cart Schedule, Field Service Reports and more.",
    images: ["/icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head></head>
      <body className={`${geist.className} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-8W2MHEPPVX" />
    </html>
  );
}
