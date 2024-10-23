import "./globals.css";
import Footer from "@/components/Global/Footer";
import HeaderComp from "@/components/Global/Header";

export const metadata = {
  title: "KRIGEN.AI",
  description: "KRIGEN.AI",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      
      <html lang="en">
        <body className="bg-pink-100">
          <HeaderComp></HeaderComp>
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
