import Link from "next/link"

export default function NavBar(){
    return(
        <>  
            <nav>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/foo?pid=bar">Slug</Link>
            </nav>
        </>

    )
}