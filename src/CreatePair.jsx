import React from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CreatePair = () => {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/student-pair');
    };

    const createPair = () => {
        axios.get("http://localhost:8081/tomcat/controller?command=create-pair")
            .then(handleClick)
            .catch(e => console.log(e))
    }

    return (
        <div>
            <button onClick={createPair}>Create Pair</button>
        </div>
    );
};

export default CreatePair;