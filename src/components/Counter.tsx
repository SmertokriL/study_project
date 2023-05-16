import {useState} from "react";
import classes from './Counter.m.scss'


export const Counter = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        setCounter(counter + 1)
    }

    return (
        <>
            <h1>{counter}</h1>
            <button className={classes.btn} onClick={handleClick}>
                increment
            </button>
        </>
    );
};
