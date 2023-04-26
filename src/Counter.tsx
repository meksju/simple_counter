import React, {useState, useEffect} from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = (event: React.MouseEvent<HTMLElement>):void => {
        setCounter(counter + 1 );
    }

    const handleDecrement = (event: React.MouseEvent<HTMLElement>):void => {
        setCounter(counter - 1 );
    }

    useEffect(() => {
        document.title = `Counter is ${counter}`;
        }, [counter]);

    // useEffect(()=> {
    //     const timeout = setTimeout(() => {
    //         document.title = `Counter ${counter + 1}`;
    //     }, 1000);
    //     return () => clearTimeout(timeout);
    // })

    return(
        <main>
            <p>Count is {counter}</p>
            <div className="button-wrapper">
                <button className="increment" type="submit" value={counter} onClick={handleIncrement}>Increment</button>
                <button className="decrement" type="submit" value={counter} onClick={handleDecrement}>Decrement</button>
            </div>
        </main>
    )
}

export default Counter;