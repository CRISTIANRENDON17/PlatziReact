import { useState } from "react";


const NameForm = () => {
    const  [name, setName] = useState("");

    return(
        <div>
            <h1>Enter your name</h1>
            <input 
                type="text" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="Enter your name"
                />
            <p>Hola, {name || "visitante"}</p>
        </div>
    )
}

export default NameForm;