export default function BarId(props){
    console.log(props)
    return(
        <div>
            <h1>중첩 라우팅</h1>
            <h1>foo {props.params.fooId}-{props.params.barId}-{props.searchParams.date}</h1>
        </div>
    )
}