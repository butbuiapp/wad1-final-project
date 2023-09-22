import { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { useOutlet, useNavigate } from "react-router-dom";

function Layout() {
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate('/login');
    }
  }, [])

  return (
    <div>
      <Header />
      {outlet}
      <Footer />
    </div>
  )
}

export default Layout;