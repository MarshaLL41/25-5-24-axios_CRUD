import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
    const [data, setData] = useState([]);
    const [view, setView] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:3001/posts`)
            .then((res) => {
                // console.log(res);
                setData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [data]);

    const inputHandler = (e) => {
        setView({ ...view, [e.target.name]: e.target.value });
    };

    const submitHandler = () => {
        axios
            .post(`http://localhost:3001/posts`, view)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    const deleteHandler = (ind) => {
        axios
            .delete(`http://localhost:3001/posts/${ind}`)
            .then((res) => console.log(res))
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <h1 className="text-center mt-4">AXIOS CRUD</h1>
                <div className="d-flex w-75 mx-auto justify-content-center gap-2">
                    <input type="text" placeholder="Enter something" name="title" onChange={inputHandler} className="w-25 form-control"></input>
                    <input type="text" placeholder="Enter something" name="author" onChange={inputHandler} className="w-25form-control"></input>
                    <button className="btn btn-success d-block" onClick={submitHandler}>
                        Click to Add
                    </button>
                </div>
                <div className="w-75 mx-auto mt-5">
                    {data?.map((val, ind, arr) => {
                        return (
                            <div className="text-center mt-3 border border-2 border-dark p-4" key={ind}>
                                <h5 className="">{val.title}</h5>
                                <h5 className="">{val.author}</h5>
                                <button className="btn btn-danger d-block mx-auto" onClick={() => deleteHandler(val.id)}>
                                    {val.id} Delete
                                </button>
                            </div>
                        );
                    })}
                </div>
                <div></div>
            </div>
        </>
    );
};

export default App;
