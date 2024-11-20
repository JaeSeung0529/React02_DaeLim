import ComponentC from "./ComponentsC"
export default function ComponentB({data}){
    return(
        <>
        <h1>ComponentB</h1>
        <p>ComponentB - {data.name}</p>
        <ComponentC props={data}/>
        
        </>
    )
}