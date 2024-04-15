import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from "@/components/navigations/Navbar";
import { GeistSans } from "geist/font/sans";
import {ApolloWrapper} from "@/provider/ApolloWrapper";


export const metadata: Metadata = {
  title: "Pokemon Radical Red Librairy," ,
  description: "Pokemon Radical Red Librairy is a web application that allows you to search for information about Pokemon, such as their types, abilities, and moves.",
};



export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ThemeProvider>
          <html lang="en" className={GeistSans.className}>
          <meta property="og:image" content="banner.jpg"/>
          <meta property="og:image:type" content="image/jpeg"/>
          <meta property="og:image:width" content="800"/>
          <meta property="og:image:height" content="600"/>
          <body>
          <ApolloWrapper>
              <Navbar/>
              {children}
          </ApolloWrapper>
          </body>
          </html>
      </ThemeProvider>
  );
}