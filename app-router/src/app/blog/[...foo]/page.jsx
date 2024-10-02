export default function Page(props){

    return(
        <>
            <h1>foo: {props.params.foo[0]}</h1>
            <h1>id: {props.searchParams.id}</h1>
            <h1>name: {props.searchParams.name}</h1>
        </>
    )
}