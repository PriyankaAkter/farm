'use client'
import  Navbar  from "./components/layout/Navbar/Navbar";
import  Footer  from "./components/layout/Footer/Footer";
function WebsiteLayout({children}) {
  return (
    <div>
       <Navbar />
          {children}
          {/* <NewsLetter /> */}
          <Footer />
          
    </div>
  )
}

export default WebsiteLayout