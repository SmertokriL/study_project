import {useState} from "react";
import './style.scss'


export const Component = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleClick}>
                increment
            </button>
        </>
    );
};

