import React, { useState, useEffect,useRef } from "react";

const BookCounter = () => {
    const [count, setCount] = useState(0);

    //componentDidMount
    // useEffect(() => {
    //     console.log("The use effect ran --Mount Phase");
    // }, []);

    //componentDidUpdate
    const didMountRef = useRef(false)
    useEffect(() => {
        if (didMountRef.current) {
            console.log("The use effect update ran --Update phase");
        } else didMountRef.current = true
    }, [count]);

    // componentWillUnmount
    // useEffect(() => {
    //     console.log("The use effect ran --unmount");
    //     return () => {
    //         console.log("the return is being ran -unmount cleanup");
    //     };
    // }, []);

    // useEffect(() => {
    //     console.log(`The count has updated to ${count}`);
    //     return () => {
    //         console.log(`we are in the cleanup - the count is ${count}`);
    //     };
    // }, [count]);

    return (
        <div>

            <button className="btn btn-dark m-4" onClick={() => setCount(count + 1)}>Read the book</button>
            <i className="fas fa-book-reader m-2"></i>
            <button className="btn btn-danger m-4" onClick={() => setCount(0)}>Reset</button>
            {count > 0 &&
                <h5 className="text-dark"> Read the book {count} {count <= 1 ? 'time' : 'times'} </h5>
            }

        </div>
    );
};

export default BookCounter;
