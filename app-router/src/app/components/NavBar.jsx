import Link from "next/link"

export default function NavBar(){
    return(
        <>
        <div style={{
                display: "flex",
                flexDirection: "row", // 수정된 부분
                justifyContent: "space-around" // 수정된 부분
            }}>
        <nav style={{border: "1px solid black", padding : "20px"}}><Link href="/">HOME</Link>
            </nav>   
            <nav><Link href="/about">ABOUT</Link></nav> 
            <nav><Link href="/blog">BLOG</Link></nav>
            <nav><Link href="/foo/202/bar/2024?date=10_11">bar</Link></nav>
            </div>
            </>   
        
    )
}