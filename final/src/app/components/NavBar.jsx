import Link from "next/link";
import "./style.css";  // CSS 파일을 import

export default function NavBar() {
    return (
      <div className="nav-container">
          <nav className="name">
          <Link href="/" >Home</Link>
        </nav>
        <nav className="no">
          <Link href="/about" >no</Link>
        </nav>
        <nav className="path">
          <Link href="/contact" >path</Link>
        </nav>      
      </div>
      
    );
  }
