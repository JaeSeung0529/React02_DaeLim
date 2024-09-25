export default function FooId(props){
    return(
        <div>
            <h1>App Router</h1>
            <h1>foo {props.params.fooId}/{props.searchParams.country}</h1>
        </div>
    )
}