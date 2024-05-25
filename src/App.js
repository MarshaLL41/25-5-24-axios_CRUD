import React, { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
    const [data, setData] = useState([]);

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
    }, []);

    return (
        <>
            <div>
                <h1 className="text-center mt-4">AXIOS CRUD</h1>
                <div className="w-75 mx-auto mt-5">
                    {data?.map((val, ind, arr) => {
                        return (
                            <div className="text-center mt-3" key={ind}>
                                <h5 className="">{val.title}</h5>
                                <h5 className="">{val.author}</h5>
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
