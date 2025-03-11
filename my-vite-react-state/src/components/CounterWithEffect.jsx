import { useEffect, useState } from "react";

const CounterWithEffect = () => {

    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log(`El contador ha cambiado: ${count}`);
    }, [count]);

    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default CounterWithEffect;