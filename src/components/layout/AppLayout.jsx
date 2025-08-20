import { Outlet } from "react-router-dom"
import Footer from "../UI/Footer"
import Header from "../UI/Header"
import ScrollToTop from "../ScrollToTop"


export const AppLayout=()=>{
    return(
        <>
        <ScrollToTop />
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}