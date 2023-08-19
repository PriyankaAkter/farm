// import Newsletter from './components/layout/newsletter/newsletter'
'use client'
import "./globals.css";
import { Roboto, Yellowtail, Open_Sans } from "next/font/google";
import NewsLetter from "./components/layout/newsletter/NewsLetter";
import Footer from "./components/layout/Footer/Footer";
import Navbar from "./components/layout/Navbar/Navbar";
import { Provider } from "react-redux";
// import Footer from "./components/layout/Footer/Footer";
import store from "./reduxt_store/store"
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--roboto",
});
const yellowTail = Yellowtail({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--yellowTail",
});

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--openSans",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${openSans.variable} ${yellowTail.variable}`}
      >
        <Provider store={store}>
          <Navbar />
          {children}
          {/* <NewsLetter /> */}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
