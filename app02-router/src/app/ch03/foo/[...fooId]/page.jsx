import { pageContainer } from "./style"

export default function Page(props){

    return(
        <pageContainer>
        <h1>fooId: {props.params.fooId}</h1>
        
        </pageContainer>
    )
}