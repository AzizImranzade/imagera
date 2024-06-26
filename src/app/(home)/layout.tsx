import { Poppins } from "next/font/google";
import "../globals.css";
import { Providers } from "../providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Imagera - Upload and Share Your Images",
  description:
    "Imagera allows users to upload their images and generate dynamic view links. Share your moments easily!",
  keywords: "image upload, image sharing, dynamic links, Imagera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imagera.vercel.app",
    site_name: "Imagera",
    title: "Imagera - Upload and Share Your Images",
    description:
      "Imagera allows users to upload their images and generate dynamic view links. Share your moments easily!",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Imagera - Upload and Share Your Images",
    description:
      "Imagera allows users to upload their images and generate dynamic view links. Share your moments easily!",
  },
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  charset: "UTF-8",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  bg-foreground   `}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
