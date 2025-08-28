import { Outlet } from "react-router-dom";
import Navbar from "../components/HomeNavbar";

export default function HomeLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}