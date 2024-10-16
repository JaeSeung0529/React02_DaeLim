export default async function Foo(){
    let data = await fetch('https://api.vercel.app/blog')
    let posts = await data.json()
    return( 
        <ul>
            {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    )
}

// export default async function Page() {
//     const res = await fetch('https://api.github.com/repos/vercel/next.js', {
//         next: { revalidate: 60 } // ISR처럼 작동하게 설정
//     });
//     const repo = await res.json();

//     return (
//         <>
//             {repo.owner.login}
//         </>
//     );
// }