import scss from '@/styles/foo.module.scss'


export default function SassEx(){
    return (
        <>
            <div>
                <h1 className={scss.bar}>SassEx Page</h1>
                <h2 className={scss.foo}>집에가고싶다</h2>
            </div>

        </>
    )
}