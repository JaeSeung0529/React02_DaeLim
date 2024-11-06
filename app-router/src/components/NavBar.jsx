import Link from "next/link";
import "./style.css";  // CSS 파일을 import
import CssEx from "./CssEx";

export default function NavBar() {
  return (
    <div className="nav-container">
        <nav>
        <Link href="/" className="nav-link">HOME</Link>
      </nav>
      <nav>
        <Link href="/about" className="nav-link">ABOUT</Link>
      </nav>
      <nav>
        <Link href="/blog" className="nav-link">BLOG</Link>
      </nav>
      <nav>
        <Link href="/foo" className="nav-link">FOO</Link>
      </nav>
      <nav>
        <Link href="/rest-api-axios" className="nav-link">rest-api-axios</Link>
      </nav>
      <nav>
      <Link href="/cssEx" className="nav-link"><CssEx></CssEx></Link>
      </nav>
      <nav>
      <Link href="/cssModule" className="nav-link">CssModule</Link>
      </nav>
      <nav>
      <Link href="/sassEx" className="nav-link">SassEx</Link>
      </nav>
    </div>
  );
}
