import scss from '@/styles/foo.module.scss'

export default function SassEx(){
    return (
        <>
            <div>
                <h1 className={scss.bar}>SassEx Page</h1>
            </div>

        </>
    )
}