
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="brand">
          <h1>Tugas React</h1>
        </div>
        <div className="menus">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
