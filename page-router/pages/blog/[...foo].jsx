import {useRouter} from "next/router"

export default function Foo(){
    const router = useRouter()
    const {foo, id, name,pid} = router.query
    console.log({foo,id,name,pid})

    return (
    <>
        <h1>foo[0]: {foo ? foo[0] : 'undefined'}</h1>
        <h1>foo[1]: {foo ? foo[1] : 'undefined'}</h1>
        <h1>foo[2]: {foo ? foo[2] : 'undefined'}</h1>
        <h1>id: {id}</h1>
        <h1>name: {name}</h1>
        <h1>pid: {pid}</h1>
    </>
    )
}
//5주차 진행