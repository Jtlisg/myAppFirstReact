const StaticComponent = () => {
    
    const items = ["Manzana","Pera","Uva"];

    return (
            
        <ul>
            {
                items.map((item,index)=>{
                    return <li key={index}>{item}</li>    
                })
            }
        </ul>
            
    )

}

export default StaticComponent;