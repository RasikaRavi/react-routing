import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        
            <Link className="text-size" to="/">Home</Link><br/>
            <Link className="text-size" to="/blogs">Blogs</Link><br/>
            <Link className="text-size" to="/contact">Contact</Link>
          
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;