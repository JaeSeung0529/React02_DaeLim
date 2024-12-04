import Link from "next/link";
import "./style.css";  // CSS 파일을 import

export default function NavBar() {
    return (
      <div className="nav-container">
          <nav className="nav-link">
          <Link href="/" >Home</Link>
        </nav>
        <nav className="nav-link">
          <Link href="/about" >about</Link>
        </nav>
        <nav className="nav-link">
          <Link href="/contact" >contact</Link>
        </nav>      
      </div>
      
    );
  }
