import ComponentB from '@/components/ComponentsB'

export default function ComponentA({foo}){
    return(
        <>
        <h1>ComponentA</h1>
        <p>ComponentA - {foo.id}</p>
        <ComponentB data={foo}/>
        
        </>
    )
}