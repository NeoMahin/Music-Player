import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Main";
import { Outlet } from "react-router-dom";
export default function Layout(){
    return (
      
        <div className='flex flex-col min-h-screen main-container'>
          <Header />
        
          <Main>
            <Outlet />
          </Main>

          <Footer />
        </div>
    )
}
