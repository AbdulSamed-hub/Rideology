import { Outlet } from "react-router-dom"
import GuideNavbar from "../components/GuideNavbar"

export default function GuideLayout() {
    return (
        <>
            <GuideNavbar />
            <Outlet />
        </>
    )
}