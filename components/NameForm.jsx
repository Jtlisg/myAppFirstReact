import { useState } from "react";


// name component 
const NameForm = () => {
    const [name,setName] = useState("");

    return (
        <div>
            <input 
            
            type="text"
            placeholder="Enter your name"
            value={name}

            onChange={(event) => setName(event.target.value) }
            />

            <p>Hola , {name || "Visitante"}</p>
        </div>
    )
};


// export dafault
export default NameForm;