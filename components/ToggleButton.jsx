//Import useState
import { useState } from "react";

//Name my component
const ToggleButton = () => {
    const [isActive,setIsActive] = useState(false);

    return ( 

        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Active" : "Inactive"}
            
        </button>
    )
}

//Export for default
export default ToggleButton;