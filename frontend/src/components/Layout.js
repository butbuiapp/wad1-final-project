import Footer from "./Footer";
import Header from "./Header";
import { useOutlet } from "react-router-dom";

function Layout() {
  const outlet = useOutlet();
  return (
    <div>
      <Header />
      {outlet}
      <Footer />
    </div>
  )
}

export default Layout;