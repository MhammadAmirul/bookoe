import Navbar from "./navbar";
import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Footer2 from "./footer2";
export default function Layout() {
  return (
    <div className="container mx-auto pb-20">
      <Navbar />
      <Outlet />
      <Footer />
      <Footer2 />
    </div>
  );
}
